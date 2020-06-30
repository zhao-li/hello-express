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

Interacting with the Database
-----------------------------
Start database:

    $ docker-compose up # start application and database
    or
    $ docker-compose up database # start database only

To connect to the database (in a separate terminal):

    $ docker-compose run database bash
    database$ psql --host database --port 5432 --dbname hello_express --username user # credentials are located in database/.env
    psql$ SELECT * FROM greetings;

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
