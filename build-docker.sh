#!/usr/bin/env bash
docker build --build-arg APP_DIR=/var/app -t mstepan/full-js:1.0.0 .
