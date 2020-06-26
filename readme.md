

## Startup Lagos
# Template:
[![CircleCI](https://circleci.com/gh/ekoinnovationhub/StartupLagosBackEnd.svg?style=svg&circle-token=01c9a3abd37cc20038644cc770efec2c5493749f)](https://app.circleci.com/pipelines/github/ekoinnovationhub/StartupLagosBackEnd)

### Getting Started

```
npm i
npm run prod:build
```
navigate to the PORT on your browser and navigate to the API-DOCS Endpoint

```
localhost:5000/api-docs
```

### DOCKER

```
docker build -t startuplagos .
docker images
docker run -it -p 9000:5000 -d startuplagos
docker ps

```

navigate to the PORT on your browser and navigate to the API-DOCS Endpoint

```
localhost:9000/api-docs
```