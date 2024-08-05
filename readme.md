# Get Started

## Install

```bash
chmod +x install.sh
```

```bash
sudo ./install.sh
```

## Run Traefik

```bash
factory run traefik
```

> ⚠️
> The Traefik container uses port 80

# Dashboard & API
> ⚠️
> The API requires Node.js and the dashboard require the API. If you do not wish to use Node.js, only the CLI will be available.

## API Prerequisites

### For linux

```bash
sudo apt update && sudo apt install nodejs npm lsof
```

## Run Dashboard

```bash
factory run dashboard
```

You can access the dashboard at: `<your server>/factory` (*localhost in local*)

## Api only

```bash
factory run api
```
You can access the api at: `<your server>:3030` (*localhost in local*)

# CLI

## Commands List

- **run traefik**
```bash
factory run traefik
```

- **run dashboard**
```bash
factory run dashboard
```

- **run api**
```bash
factory run api
```

- **init app from template**
```bash
factory init
```
** *Params* : 

`<template>` *(required)*

`<app_name>`

`<domain_name>`

** *Options* : 

`--ssl` / `--nossl`

> ⚠️
> For now, the parameters and options must follow the exact order listed above.


- **show templates list**
```bash
factory --templates
```

- **show help cli**
```bash
factory --help
```
