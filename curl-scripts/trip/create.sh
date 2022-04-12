#!/bin/bash

DESTINATION="St. Lucia"
DATE="01-01-2023"
LENGTHOFSTAY="11 nights"
TOKEN="a84fc7458bc8a322936345383ceee853"

API="http://localhost:4741"
URL_PATH="/trips"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "trip": {
      "destination": "'"${DESTINATION}"'",
      "date": "'"${DATE}"'",
      "length": "'"${LENGTHOFSTAY}"'"
    }
  }'

echo
