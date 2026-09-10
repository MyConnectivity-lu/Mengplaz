#!/usr/bin/env bash
# Bundle the deployable artifacts into mengplaz.tar.gz.
#
#   ./scripts/bundle.sh [output.tar.gz]
#
# Runs from the project root whatever the caller's cwd, and refuses to
# produce a half-empty archive: every item has to be there.
set -euo pipefail

cd "$(dirname "$0")/.."

OUT="${1:-mengplaz.tar.gz}"

ITEMS=(
  bin
  lib
  webroot
  project.gcp
)

missing=()
for item in "${ITEMS[@]}"; do
  [ -e "$item" ] || missing+=("$item")
done

if [ ${#missing[@]} -gt 0 ]; then
  echo "bundle: missing ${missing[*]}" >&2
  echo "bundle: run 'greycat build' and 'pnpm build' first" >&2
  exit 1
fi

tar czf "$OUT" "${ITEMS[@]}"

echo "bundle: wrote $OUT ($(du -h "$OUT" | cut -f1))"
