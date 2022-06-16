# Trybe Futebol Club

# About project

![image](https://user-images.githubusercontent.com/88905400/173710781-7e610def-3c60-4516-8f40-d87a0a9ae923.png)

This project was developed to practice the [skills](#skills) developed in the Trybe course in the Back-end module.

All files located in /app/frontend/ were developed and made available by Trybe for the execution of this project.

In this project, a REST API was developed that creates and manipulates a MySQL database, authenticates registered users through a login, lists a leaderboard with all teams being able to filter by performance as home or visitor, lists and adds, updates and ends matches .

## Skills 

  - Use _Docker_ and _Docker-compose_ to manage container environment;
  - Use MSC architecture;
  - Use _TypeScript_ and _OOP(Object-Oriented Programming)_ with _SOLID_ principles;
  - Use _Express_ framework from _Node.js_ and ORM library _Sequelize_ for _MySQL_ database modeling;
  - Use _JWT_ and _bcrypt_ libraries to authenticate users and create a hash of user information;
  - Practice _TDD_ with integration tests using _Mocha, _Chai_ and _Sinon_.
 
## Opening the app locally

On terminal:

1. Please install or check the version of the following services on your system:

[Docker](https://docs.docker.com/get-docker/) on version `20.10.16`
```bash
  docker -v
```
[Docker-Compose](https://docs.docker.com/compose/install/) on version `1.29.2`
```bash
  docker-compose -v
```

2. Clone the repository

```bash
  git git@github.com:rtxnak/trybe-futebol-clube.git
```

3. Install the dependencies
  * move to app folder:
  
    `cd Trybe-Futebol-Clube`
  * Install dependencies:
  
    `npm install`

4. build docker-compose

```bash
  npm run compose:up
```

The API will be ready to use when the output in your terminal looks like this

![image](https://user-images.githubusercontent.com/88905400/174193690-7eca5dbe-28f4-40af-9181-7b158a1392b7.png)

5. The application can be accessed through:

http://localhost:3000/

#### Tests

To run the integration tests: 
  * move to app folder:
  
    `cd app/backend`
  * execute npm test command:
  
    `npm run test`
