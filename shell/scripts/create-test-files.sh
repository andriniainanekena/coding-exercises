#!/bin/bash

SRC_DIR="/media/nekena/Local Disk1/Learning/Practice/coding-exercises/javascript/src/30-shades-of-PROG1"
TESTS_DIR="/media/nekena/Local Disk1/Learning/Practice/coding-exercises/javascript/tests"

mkdir -p "$TESTS_DIR"

for file in "$SRC_DIR"/*.js; do
  if [[ "$file" != *.test.js ]]; then
    filename=$(basename "$file")
    testfile="${filename%.js}.test.js"
    testpath="$TESTS_DIR/$testfile"

    if [ ! -f "$testpath" ]; then
      touch "$testpath"
      echo "Created $testpath"
    else
      echo "Exists $testpath"
    fi
  fi
done
