#!/bin/bash

DIR=`dirname $(readlink -f $0)`
OLDPWD=`pwd`

cd $DIR/../

ecs-cli configure \
	--region us-west-1 \
	--cluster default \
	--compose-project-name-prefix "" \
	--compose-service-name-prefix ""

# ecs-cli up --keypair marketwatcher --capability-iam --size 1 --instance-type t2.medium

ecs-cli compose --file docker-compose.yml service down

sleep 10

ecs-cli compose --file docker-compose.yml service up

cd $OLDPWD
