#!/usr/bin/env sh
nginx -c nginx.conf
uwsgi --ini uwsgi.ini