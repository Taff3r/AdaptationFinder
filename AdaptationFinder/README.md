# AdaptationFinder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# !!!IMPORTANT!!!
# Full functionality by running backend services

To achieve the full functionality of this project a backend needs to be up and running. This backend includes that of a [MariaDB](https://mariadb.org/) (A fork of MySQL), and the included API-server running [Express](http://expressjs.com/) server needs to be running.

Below are instructions for installing a running MariaDB server for an Debian-based system, the person who wrote this installed it on a Arch-based system, so the instructions are copied and changed from when that installation was made. (pacman => apt-get, is basically all that was changed) If you're running Windows you can install it using the downloadable installer from https://mariadb.com/downloads/, if you're running MacOS you can install MariaDB using the brew package managaer. 

Keep in mind you still need to configure the database correctly, i.e. add the database, and table with correct names and formatting. Refer to section "configure MariaDB server" for these instructions.

## Installing and starting MariaDB

This section will be going through how to set up and configure the MariaDB on your machine with the right setting to be able to run along side the API. The commands in this walkthrough are meant to be run in a Ubuntu CLI, if you are runnning something else you probably have to change a few things.

### Download and install MariaDB
In your CLI enter the following:
> sudo apt-get update

> sudo apt install mariadb-server -y

You should now have updated your system and installed the mariadb server. Now onto creating the accounts and starting the server.

*OPTIONAL BUT RECOMMENDED* 

You can check your installation by running:

> sudo systemctl status mariadb

### Configure MariaDB server
In your CLI enter the following:
>  sudo mysql_install_db --user=mysql --basedir=/usr --datadir=/var/lib/mysql 

> sudo systemctl start mariadb

> sudo mysql_secure_installation

*When asked for password just enter the ENTER-key*

*For all the options presented answer yes*

Now you can log in to the server:

> mysql -u root -p 
> *ENTER*
Now it is time to add a database and the table needed.

> CREATE DATABASE mydb DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_bin;

> USE mydb;

> CREATE TABLE connections (isbn varchar(255), id varchar(255));

## Running the Node server.

In a new terminal navigate to the (where you cloned this repo)/AdaptationFinder/src/ and run:

> node server.js

You should be greeted by the message:

Server running on :3000 

