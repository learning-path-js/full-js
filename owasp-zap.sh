#!/usr/bin/env bash

docker run -t owasp/zap2docker-weekly zap-baseline.py -t http://0.0.0.0:9090
