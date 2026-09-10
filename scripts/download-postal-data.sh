#!/usr/bin/env bash
# Download the libpostal model data used by @library("postal").
#
#   ./scripts/download-postal-data.sh [target-dir]
#
# The target directory defaults to $GREYCAT_POSTAL_DATA_DIR, then to
# ./files/postal-data. Point GREYCAT_POSTAL_DATA_DIR at it in .env afterwards.
#
# ~1.4 GB downloaded, ~3 GB extracted. Safe to re-run: an archive whose
# extracted directory is already present is skipped, and interrupted
# downloads resume.
set -euo pipefail

BASE_URL="https://public-read-libpostal-data.s3.amazonaws.com"

# archive|version|directory the archive extracts to
ARCHIVES=(
  "libpostal_data.tar.gz|v1.1.0|transliteration"
  "language_classifier.tar.gz|v1.1.0|language_classifier"
  "parser.tar.gz|v1.2.0|address_parser"
)

target="${1:-${GREYCAT_POSTAL_DATA_DIR:-./files/postal-data}}"

for cmd in curl tar; do
  command -v "$cmd" >/dev/null 2>&1 || { echo "error: '$cmd' is required" >&2; exit 1; }
done

mkdir -p "$target"
cd "$target"
target_abs="$(pwd)"

for entry in "${ARCHIVES[@]}"; do
  IFS='|' read -r archive version marker <<<"$entry"

  if [ -d "$marker" ]; then
    echo "== $archive already extracted ($marker/), skipping"
    continue
  fi

  echo "== downloading $archive ($version)"
  curl -fSL --retry 3 --retry-delay 2 -C - "$BASE_URL/$version/$archive" -o "$archive"

  echo "== extracting $archive"
  tar -xzf "$archive"
  rm -f "$archive"
done

echo
echo "libpostal data ready in $target_abs"
echo "Add this to your .env (or export it):"
echo
echo "    GREYCAT_POSTAL_DATA_DIR=\"$target\""
