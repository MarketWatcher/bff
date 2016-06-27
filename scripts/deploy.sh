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

CONFIGURE_RESULT=$?
if [ $CONFIGURE_RESULT -ne 0 ]; then
	echo "Could not configure ECS CLI"
	exit $CONFIGURE_RESULT
fi

COMPOSE_PROJECT_NAME=marketwatcher-io \
ecs-cli compose --file docker-compose.yml service down

DOWN_RESULT=$?
if [ $DOWN_RESULT -ne 0 ]; then
	echo "Could not bring service DOWN in ECS"
	exit $DOWN_RESULT
fi

COMPOSE_PROJECT_NAME=marketwatcher-io \
ecs-cli compose --file docker-compose.yml service up

UP_RESULT=$?
if [ $UP_RESULT -ne 0 ]; then
	echo "Could not bring service UP in ECS"
	exit $UP_RESULT
fi

cd $OLDPWD









