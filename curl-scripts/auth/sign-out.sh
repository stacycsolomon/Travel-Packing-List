#!/bin/bash

TOKEN="517c921d5f6b572caecdb9a6c6212c8e"

API="http://localhost:4741"
URL_PATH="/sign-out"

curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
