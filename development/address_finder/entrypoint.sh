#!/bin/sh

python3 /usr/src/spring-petclinic/address_resolver/src/data_load.py
/usr/local/bin/gunicorn --config gunicorn.conf --log-config logging.conf -b :5000 server:app