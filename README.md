# hello-express

Prerequisites
-------------
1. install docker
1. install docker-compose
1. install git
1. clone repository: `git clone https://github.com/zhao-li/hello-express.git`

Getting Started
---------------
1. run bootstrap.sh: `./bootstrap.sh`
1. start service: `docker-compose up`
1. browse to: `http://localhost:3000/greetings/`

Other ways to interact with app:

    curl "localhost:3000/greetings/"

To get to the NodeJS/npm environment:

    $ docker-compose run app bash
    app$ npm --version

Testing
-------
To test the application:

    $ docker-compose run app scripts/test_app.sh
    or
    $ docker-compose run app bash
    app$ scripts/test_app.sh # or npm test

Documenting
-----------
To document the application (not working yet):

    app$ scripts/document_app.sh

Linting
-------
To lint the application (not working yet):

    app$ scripts/lint_app.sh

Notes
-----
TBD
