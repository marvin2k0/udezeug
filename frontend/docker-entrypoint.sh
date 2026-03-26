#!/bin/sh
envsubst < /usr/share/nginx/html/assets/env.js > /tmp/env.js
mv /tmp/env.js /usr/share/nginx/html/assets/env.js
exec "$@"
