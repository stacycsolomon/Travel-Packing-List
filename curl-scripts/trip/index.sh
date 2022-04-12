#!/bin/sh
TOKEN="a84fc7458bc8a322936345383ceee853"

API="http://localhost:4741"
URL_PATH="/trips"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
