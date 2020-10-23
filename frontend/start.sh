#! /bin/bash
RESOURCE_OLD='RESOURCES_URL="http://localhost:8282"'
RESOURCE_NEW='RESOURCES_URL="http://localhost:blah"'
RESTAPI_OLD='RESTAPI_URL="http://localhost:5000"'
RESTAPI_NEW='RESTAPI_URL="http://localhost:blah"'

if [ ! -z  $1 ]  && [ -f $1 ] 
then
   sed -i -e 's#'$RESOURCE_OLD'#'$RESOURCE_NEW'#g' $1
   sed -i -e 's#'$RESTAPI_OLD'#'$RESTAPI_NEW'#g' $1
fi

./node_modules/http-server/bin/http-server -p 8000 -P http://localhost:8000? . 