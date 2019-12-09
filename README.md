express to create the server nodmon to keep track of changes to files and automatically restart the server

yarn add express
yarn add nodemon
yarn add body-parser
api run 0th

add blank api app in server.js add task start to package.json

run it

yarn start  # ctrl-c to stop

# aka
./bin/run-api.sh  # ctrl-c to stop
api run

# install package
yarn install



#Fix Database config in 
./model/resetdb.js
.src/model/route/alldb.js


#CRUD 
on GET
curl -X GET \
http://localhost:3000/users/ 

get 1 user
curl -X GET \
http://localhost:3000/users/1 \

on POST
curl -X POST \
http://localhost:3000/users \
-H 'Accept: */*' \
-H 'Accept-Encoding: gzip, deflate' \
-H 'Cache-Control: no-cache' \
-H 'Connection: keep-alive' \
-H 'Content-Length: 39' \
-H 'Content-Type: application/json' \
-H 'Host: localhost:3000' \
-H 'Postman-Token: 4c5e0234-055f-40be-a7b3-2d5b32d4ed8c,db2f34c5-9d78-4de1-802a-c3f1e09e161d' \
-H 'User-Agent: PostmanRuntime/7.20.1' \
-H 'cache-control: no-cache' \
-d '{
  "name":"Tin",
  "dob":"1998-05-05"
  }'


# run api
./bin/run-api.sh  # ctrl-c to stop
call endpoint as api been run



