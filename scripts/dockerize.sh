#!/bin/bash

DIR=`dirname $(readlink -f $0)`
OLDPWD=`pwd`

cd $DIR/../

docker login -u $DOCKER_USERNAME -e $DOCKER_EMAIL -p $DOCKER_PASSWORD
docker build -t thoughtworksturkey/marketwatcher-io .
docker push thoughtworksturkey/marketwatcher-io

cd $OLDPWD
