#!/usr/bin/env bash
s=$BASH_SOURCE; s=$(dirname "$s"); s=$(cd "$s" && pwd); a="$s/../..";   a=$(cd "$a" && pwd); APP_HOME=$a

# rm image
docker image rm -f 'hungphat/nodejs_crud'

# do build

docker build -t 'hungphat/nodejs_crud' .

