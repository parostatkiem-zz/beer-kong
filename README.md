# How to launch Beer Kong frontend dev server

## Minimal requirements

Aby uruchomić serwer deweloperski z opisywaną stroną internetową, należy spełnić poniższe wymagania sprzętowe i programowe:

- One of the following OS: MacOs 10, Linux Debian 9.0 or Windows 7 or a newer version of the above
- NodeJS 12 enviroment, can be downloaded [HERE](https://nodejs.org/en/download/)

## Dependencies installation

1. Open terminal
2. Change workdir to the main directory of this repository (the directory where the file `README.md` is in)
3. Run the following command

```shell=bash
npm install
```

## Starting the dev server

One important launch param of the server is the _backend server url_. There are two options of setting this param:

### Using the cloud-hosted backend server

This option requires an internet connection and, of course, the online backend server must be up and running (which theoreticaly may fail for some reason). On the other hand it's much easier and quicker because you don't have to start the backend on your own.

To launch the frontend dev serwer with cloud-hosted backend, run:

```shell=bash
REACT_APP_GQL=https://beer-kong-server.herokuapp.com REACT_APP_POLL_INTERVAL=7000 npm start
```

### Using the local backend server

This option does not require an internet connection and is more reliable but takes more time and effort.
Before you run the following command, please make sure your local backend server is running and is hosted at `localhost:80`. You can find more details in `README.md` file of the backend server.

To launch the frontend dev serwer with local backend, run:

```shell=bash
REACT_APP_GQL=localhost:80 REACT_APP_POLL_INTERVAL=7000 npm start
```

---

No matter which path you chose, your browser should open a new tab pointed at `http://localhost:3000` and you should see the orange-themed website. If it did, open [this address](http://localhost:3000) localy.
