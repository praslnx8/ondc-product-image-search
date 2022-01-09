## Installation

```bash
$ npm install --python=python2.7
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

To classify the image.

```bash
curl --location --request POST 'localhost:4000/image-search' \
--form 'file=@"/Users/prasi/Desktop/istockphoto-1068482378-612x612.jpg"' 
```

