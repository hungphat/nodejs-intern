#!/usr/bin/env bash
s=$BASH_SOURCE ; s=$(dirname "$s") ; s=$(cd "$s" && pwd) ; SCRIPT_HOME="$s"  # get SCRIPT_HOME=executed script's path, containing folder, cd & pwd to get container path
a="$SCRIPT_HOME/.." ;                a=$(cd "$a" && pwd) ; APP_HOME="$a"

c=hungphat_nodejs_postgres

docker exec -it $c psql -U postgres -c  "DROP DATABASE IF EXISTS customer;"
docker exec -it $c psql -U postgres -c  "CREATE DATABASE customer;"
