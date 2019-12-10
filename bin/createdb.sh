#!/usr/bin/env bash
s=$BASH_SOURCE ; s=$(dirname "$s") ; s=$(cd "$s" && pwd) ; SCRIPT_HOME="$s"  # get SCRIPT_HOME=executed script's path, containing folder, cd & pwd to get container path
a="$SCRIPT_HOME/.." ;                a=$(cd "$a" && pwd) ; APP_HOME="$a"

c=hungphat_nodejs_postgres

docker cp "$APP_HOME/SQL/create_database.sql" $c:/
docker exec -it $c bash -c "psql -Upostgres -f /create_database.sql"