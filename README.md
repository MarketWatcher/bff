# marketwatcher.io

## Dev Instructions

* Clone the repository and run following:

```sh 
npm install
```
```sh
npm run start #to run the hot loading dev server on http://localhost:3000
``` 
```sh
 npm clean build #clean build obvo
```

```
docker build -t thoughtworksturkey/marketwatcher-io . #to build docker image
```

```
docker login -u $DOCKER_USERNAME -e $DOCKER_EMAIL -p $DOCKER_PASSWORD #login to docker
```

```
docker push xyz/marketwatcher-io #to push to your hub account
```
