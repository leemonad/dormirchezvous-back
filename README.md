# DormirChezVous

## Installation

### Requirements

In order to run this project, you need to install several tools:

* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)

Installing these tools is not a part of this documentation. You should refer to correct documentation section from links above.

### Installing Dependencies

Installation is as simple as:

``` sh
make install
```

## Running the Project

### Configuration

Before start the projet, you need to setup our environment. To achieve this task you need to copy the ".env-dist" to an ".env" file at the root of the projet.

Change values to adapt it to our configuration.

### Starting Project

A single command allows you to run the project:

``` sh
make start
```

Then, you can access via http://localhost:3000

### Stopping Project

If you need to stop all project containers, just use:

``` sh
make stop
```

### Debugging Docker Containers

You can display (and refresh) all project containers logs using:

``` sh
make logs
```

## Linting

You can format files through [Prettier](https://github.com/prettier/prettier) with the following command.

``` sh
make format
```

Commits on master are automatically deployed to the dev server
