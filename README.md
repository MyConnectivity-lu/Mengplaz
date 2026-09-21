# MengPlaz [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The Golden Standard of national addresses, by MyConnectivity.
https://app.mengplaz.lu/

## Getting started

### Local development

Everything runs from two toolchains: **GreyCat** (backend, database and HTTP server) and
**Node.js + pnpm** (frontend build). Both are supported on Linux, macOS and Windows, on x64 and
arm64. GreyCat's own documentation: [doc.greycat.io](https://doc.greycat.io/).

| Tool    | Minimum                                                   | Checked with        |
| ------- | --------------------------------------------------------- | ------------------- |
| GreyCat | any recent release - the project pins its own in `bin/`   | `greycat --version` |
| Node.js | `^20.19` \|\| `^22.18` \|\| `>=24.11` (Vite+ requirement) | `node -v`           |
| pnpm    | 10.x                                                      | `pnpm -v`           |

#### 1. Install GreyCat

The full documentation lives at [doc.greycat.io](https://doc.greycat.io/), and the installation page
at [doc.greycat.io/getting-started/installation](https://doc.greycat.io/getting-started/installation/)
covers the editions and the manual download.

Linux, macOS and FreeBSD (x64, arm64):

```sh
curl -fsSL https://get.greycat.io/install.sh | bash -s stable
```

Windows (x64, arm64), in PowerShell:

```powershell
iwr https://get.greycat.io/install.ps1 -useb | iex
```

The installer drops the binary in `~/.greycat/bin` (`%USERPROFILE%\.greycat\bin` on Windows) and adds
it to the `PATH` - open a new shell, then check with `greycat --version`. That copy is only the
launcher: `greycat install` inside the project downloads the exact version pinned by `project.gcl`
into `bin/`, and every later command uses that one.

#### 2. Install Node.js and pnpm

Node.js:

- **Linux** - your distribution's package (`dnf install nodejs`, `apt install nodejs`), or
  [nvm](https://github.com/nvm-sh/nvm) if you juggle versions.
- **macOS** - `brew install node`, or nvm.
- **Windows** - `winget install OpenJS.NodeJS.LTS`, or the installer from
  [nodejs.org](https://nodejs.org/).

pnpm - the simplest route is Corepack, which ships with Node:

```sh
corepack enable pnpm
```

Otherwise `npm install -g pnpm`, or the standalone installers:
`curl -fsSL https://get.pnpm.io/install.sh | sh -` on Linux/macOS,
`iwr https://get.pnpm.io/install.ps1 -useb | iex` on Windows.

#### 3. Fresh clone to running app

```sh
greycat install                    # backend deps + the pinned greycat binary into bin/
./scripts/download-postal-data.sh  # libpostal models, once per machine (see below)
greycat run bootstrap              # create the admin user and initialize the database may take a few minutes
pnpm i                             # frontend deps
pnpm run gen                       # greycat codegen -> project.d.ts
pnpm build                         # build app/ into webroot/
greycat dev                        # API + frontend on http://localhost:8080
```

`greycat dev` serves the API and the frontend together: frontend changes need a page reload, backend
changes need a restart. Use `greycat serve` to serve the prebuilt `webroot/` without the watcher.

`greycat run bootstrap` restores from `./backup` when one is there, and otherwise falls back to the
live sources - which needs **CACLR API credentials**. They are also required for every later data
refresh. See [CACLR API credentials](#caclr-api-credentials).

#### Windows specifics

- The helper scripts under `scripts/` are `bash` scripts. Run them from **WSL2** or **Git Bash**, or
  follow the manual `curl`/`tar` steps documented in
  [libpostal model data](#libpostal-model-data) - Windows 10+ ships both commands in PowerShell.
- Paths in `.env` accept forward slashes: keep `GREYCAT_POSTAL_DATA_DIR="./files/postal-data"`.
- Only one process may hold the `gcdata/` lock, so stop a running `greycat serve`/`dev` before
  another `greycat run ...`.


### Project structure

- `backend` contains all files pertaining to the backend (DB + Processing) activities
    - `api` contains publicly exposed modules and their functions
    - `edi` are all modules and functions to connect to external sources
    - `model` contains the definition of stored types and functions
    - `services` are utility services
- `app` contains the frontend:
    - `lib` holds the shared modules: the GreyCat session gate (`gc.ts`), the `GcPage` base class, MPA routing with the legacy `?page=` shim, theme tokens and formatting helpers
    - `components` holds the shared `mp-*` Lit components (app shell, tables, panels, address card, comparison views, dialogs)
    - `pages` holds one directory per page, each an MPA entry point; the map lives at the root and is served at `/`
    - `public` holds static assets served as-is, including `login.html`
- `e2e` contains the Playwright suite
- `package.json` defines the dependencies required by the frontend
- `project.gcl` is the entrypoint for GreyCat and backend


### The `.env` file

The `.env` file is not mandatory per say, but its content can have various impact for development or production phases to adapt to the capacities of the machine and ease teh work.
The file should be placed at the root of the project.

| Property                | Description                                                                                                                                                                                                      | Suggested value     |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| GREYCAT_CACHE           | Size of RAM (in Mb) that can be used by the runtime (max 90% of total RAM)                                                                                                                                       | 3000                |
| GREYCAT_STORE           | Size  (in Mb) max of GreyCat metadata file. Grows with the data. 1Gb if not specified.                                                                                                                           | 100                 |
| GREYCAT_USER            | Executes all functions as the specified user ID. With ID=1, executes all as root (shuts off all security). <!> For Development easiness only <!>                                                                 | 1                   |
| GREYCAT_WORKERS         | Sets the maximum number of parallel workers of GreyCat. Linked to the CACHE size, workers share the cache equaly, each should have a decent amount of cache to work                                              | 4                   |
|                         |                                                                                                                                                                                                                  |                     |
| CACLR_API_CLIENT_ID     | Client ID for the CACLR datasource. **Required** - see [CACLR API credentials](#caclr-api-credentials).                                                                                                          | String              |
| CACLR_API_CLIENT_SECRET | Client secret for the CACLR datasource. **Required** - see [CACLR API credentials](#caclr-api-credentials).                                                                                                      | String              |
|                         |                                                                                                                                                                                                                  |                     |
| MENGPLAZ_ADMIN_LOGIN    | Login of first administrator                                                                                                                                                                                     | String              |
| MENGPLAZ_ADMIN_PASS     | Pass of first administrator, SHA256 encoded                                                                                                                                                                      | String              |
|                         |                                                                                                                                                                                                                  |                     |
| GREYCAT_POSTAL_DATA_DIR | Directory holding the libpostal model data (the one containing `address_parser/`, `transliteration/`, ...). **Required** - address parsing raises without it. See [libpostal model data](#libpostal-model-data). | ./files/postal-data |

Example of `.env`
```bash, .env
GREYCAT_CACHE=3000
GREYCAT_STORE=100
#GREYCAT_USER=1
#GREYCAT_WORKERS=4

#CACLR_API_CLIENT_ID=7********b-2**c-4**8-9**6-9*************
#CACLR_API_CLIENT_SECRET=7********b-2**c-4**8-9**6-9*************

#MENGPLAZ_ADMIN_LOGIN=John******
#MENGPLAZ_ADMIN_PASS=3*****************d

GREYCAT_POSTAL_DATA_DIR="./files/postal-data"
```


### libpostal model data

The backend parses and normalizes address text with [libpostal](https://github.com/openvenues/libpostal),
through `@library("postal")`. The NLP models are **not** shipped with the library: they have to be
downloaded once per machine, and `GREYCAT_POSTAL_DATA_DIR` has to point at the directory holding them.
Without the variable the parser starts disarmed and every `parse` / `parseStructured` call raises -
loaders, reconciliation and text search all depend on it.

Budget ~1.4 Gb of download, ~3 Gb on disk, and ~2-3 Gb of RAM once the models are loaded (they are
loaded lazily, on the first parse, not at startup).

Run the helper script from the project root:

```sh
./scripts/download-postal-data.sh              # into ./files/postal-data
./scripts/download-postal-data.sh /opt/postal  # or anywhere else
```

It is safe to re-run: an archive that is already extracted is skipped, and an interrupted download
resumes. It downloads and extracts three independently versioned archives:

| Archive                      | Version | Size    | Contents                                            |
| ---------------------------- | ------- | ------- | --------------------------------------------------- |
| `libpostal_data.tar.gz`      | v1.1.0  | ~10 Mb  | `address_expansions/`, `numex/`, `transliteration/` |
| `language_classifier.tar.gz` | v1.1.0  | ~50 Mb  | `language_classifier/`                              |
| `parser.tar.gz`              | v1.2.0  | ~1.3 Gb | `address_parser/` - the address parser model        |

Then declare the directory in `.env`:

```bash, .env
GREYCAT_POSTAL_DATA_DIR="./files/postal-data"
```

To do it by hand instead:

```sh
mkdir -p files/postal-data && cd files/postal-data
curl -sSL https://public-read-libpostal-data.s3.amazonaws.com/v1.1.0/libpostal_data.tar.gz -o libpostal_data.tar.gz
curl -sSL https://public-read-libpostal-data.s3.amazonaws.com/v1.1.0/language_classifier.tar.gz -o language_classifier.tar.gz
curl -sSL https://public-read-libpostal-data.s3.amazonaws.com/v1.2.0/parser.tar.gz -o parser.tar.gz
tar -zxf libpostal_data.tar.gz && tar -zxf language_classifier.tar.gz && tar -zxf parser.tar.gz
rm -f ./*.tar.gz
```

### CACLR API credentials

CACLR - the national street and address register - is the authoritative source MengPlaz reconciles
everything else against. The project therefore **requires a CACLR API client id and secret**.

Declare them in `.env` at the project root:

```bash, .env
CACLR_API_CLIENT_ID=xxxx
CACLR_API_CLIENT_SECRET=xxxx
```

Without them every CACLR call throws `No credentials provided to conect to CACLR source.`, which
means:

- `greycat run bootstrap` on a store with no `./backup` to restore from ends up with no CACLR data -
  and since BDA and OSM records are reconciled onto the CACLR skeleton, effectively no golden
  records either.

### Backend

The backend runs with GreyCat, installed as described in [Local development](#local-development).
1. `greycat install` will install dependencies locally, and the specific version of GreyCat required.
2. `./scripts/download-postal-data.sh` downloads the libpostal models and `GREYCAT_POSTAL_DATA_DIR` is set to point at them (see above). Only needed once per machine.
3. `greycat run bootstrap` will initialize the database and load data from accessible and known sources.
4. `greycat serve` serves the application.
5. `ctrl+c` to kill the service.

### Frontend

The frontend is build with pure WebComponents (no framework). An SDK must be generated from the backend types, to ease the frontend development.

1. `pnpm i` to install the frontend depenedencies
2. `greycat codegen` or `pnpm run gen` to generate the TypeScript typing file
3. `pnpm run dev` to lauch the development server of the frontend.

### Production builds

1. For the backend `greycat build`
2. For the frontend `pnpm build`

### Reset

Folders and files that can be safely deleted:
- `backup` => hosts the backups of the application, if any
- `files` => hosts the intermediary tasks results and files uploaded to the application. <!> Also hosts the libpostal models when `GREYCAT_POSTAL_DATA_DIR` points inside it - deleting them means a ~1.4 Gb re-download with `./scripts/download-postal-data.sh` <!>
- `gcdata` => hosts the files of the database. <!> This removes all data, and you'll need `greycat run bootstrap` to re-initialize the DB <!>
- `lib` => hosts GreyCat libs, run `greycat install` to restore.
- `node_modules` working forlder to the frontened packaging system. Can be restored with `pnpm i`
- `webroot` contains the production versions of frontend tools. Can be restored with `pnpm build`
- `project.gcp` is the compiled version of the backend program. Can be restored with `greycat build`


## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
## **📜 License**

### Source code
The MengPlaz **source code** (everything under `backend/` and `frontend/`) is licensed under the **[MIT License](https://opensource.org/licenses/MIT)**.

> For the full license text, see the [`LICENSE.txt`](LICENSE.txt) file in the project root. The MIT License covers the software only, not the data it processes. The root `license` (no extension, binary) is the GreyCat runtime license - do not confuse the two.

### Data & attribution
The address data is built in part from **[OpenStreetMap](https://www.openstreetmap.org/copyright)** (imported via [`backend/edi/osmLoader.gcl`](backend/edi/osmLoader.gcl)), which is licensed under the **[Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/1-0/)**. Any use of the data must credit:

> Address data © OpenStreetMap contributors, licensed under the ODbL.

This credit is surfaced in the map UI (attribution control), via the public `attribution` API endpoint, and per-record via source links. Other sources (CACLR, geoportail layers) are CC0.

## Project status
**🚀 Actively Maintained**
> MengPlaz is under **active development and maintenance** by the [MyConnectivity](https://myconnectivity.lu) team.

### **Current Focus**
- **Enhancements**: Improving geographic matching and address reconciliation accuracy.
- **Performance**: Optimizing the matching pipeline for scalability.
- **Documentation**: Updating guides for contributors and end-users.
