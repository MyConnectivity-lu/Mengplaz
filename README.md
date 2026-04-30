# MengPlaz [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The Golden Standard of national addresses, by MyConnectivity.
https://app.mengplaz.lu/

## Getting started

### Project structure

- `backend` contains all files pertaining to the backend (DB + Processing) activities
    - `api` contains publicly exposed modules and their functions
    - `edi` are all modules and functions to connect to external sources
    - `model` contains the definition of stored types and functions
    - `services` are utility services
- `frontend` contain all the frontend-remated files
- `package.json` defines the dependencies required by the frontend
- `project.gcl` is the entrypoint for GreyCat and backend


### The `.env` file

The `.env` file is not mandatory per say, but its content can have various impact for development or production phases to adapt to the capacities of the machine and ease teh work.
The file should be placed at the root of the project.

| Property    | Description | Suggested value |
| ----------- | ----------- | --------|
| GREYCAT_CACHE  | Size of RAM (in Mb) that can be used by the runtime (max 90% of total RAM) | 3000 |
| GREYCAT_STORE | Size  (in Mb) max of GreyCat metadata file. Grows with the data. 1Gb if not specified.  | 100 |
| GREYCAT_USER | Executes all functions as the specified user ID. With ID=1, executes all as root (shuts off all security). <!> For Development easiness only <!> | 1 |
| GREYCAT_WORKERS | Sets the maximum number of parallel workers of GreyCat. Linked to the CACHE size, workers share the cache equaly, each should have a decent amount of cache to work | 4 |
|||
| CACLR_API_CLIENT_ID    | ClientID to connect to CACLR datasource  | String |
| CACLR_API_CLIENT_SECRET    | Client Secret to connect to CACLR datasource  | String |
|||
| MENGPLAZ_ADMIN_LOGIN    | Login of first administrator    | String |
| MENGPLAZ_ADMIN_PASS    | Pass of first administrator, SHA256 encoded  | String |

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
```


### Backend

The backend runs with GreyCat. You shoudl have GreyCat installed on your machine (https://get.greycat.io).
1. `greycat install` will install dependencies locally, and the specific version of GreyCat required.
1. `greycat run bootstrap` will initialize the database and load data from accessible and known sources.
2. `greycat serve` serves the application.
3. `ctrl+c` to kill the service.

### Frontend

The frontend is build with pure WebComponents (no framework). An SDK must be generated from the backend types, to ease the frontend development.

1. `pnpm i` to install the frontend depenedencies
2. `greycat codegen` or `pnpm run gen` to generate the TypeScript typing file
3. `pnpm run dev` to lauch the development server of the fronten.

### Production builds

1. For the backend `greycat build`
2. For the frontend `pnpm build`

### Reset

Folders and files that can be safely deleted:
- `backup` => hosts the backups of the application, if any
- `files` => hosts the intermediary tasks results and files uploaded to the application
- `gcdata` => hosts the files of the database. <!> This removes all data, and you'll need `greycat run bootstrap` to re-initialize the DB <!>
- `lib` => hosts GreyCat libs, run `greycat install` to restore.
- `node_modules` working forlder to the frontened packaging system. Can be restored with `pnpm i`
- `webroot` contains the production versions of frontend tools. Can be restires with `greycat install` and `pnpm build`
- `project.gcp` is the compiled version of the backend program. Can be restored with `greycat build`


## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
## **📜 License**
MengPlaz is licensed under the **[MIT License](https://opensource.org/licenses/MIT)**.

> For the full license text, see the [`LICENSE`](LICENSE) file in the project root.

## Project status
**🚀 Actively Maintained**
> MengPlaz is under **active development and maintenance** by the [MyConnectivity](https://myconnectivity.lu) team.

### **Current Focus**
- **Enhancements**: Improving geographic matching and address reconciliation accuracy.
- **Performance**: Optimizing the matching pipeline for scalability.
- **Documentation**: Updating guides for contributors and end-users.
