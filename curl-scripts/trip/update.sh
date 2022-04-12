#!/bin/bash

DESTINATION="St. Lucia"
DATE="01-01-2023"
LENGTHOFSTAY="two weeks"
TOKEN="a84fc7458bc8a322936345383ceee853"
ID="6255b79fc7e5b93ef669e648"

API="http://localhost:4741"
URL_PATH="/trips"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
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
