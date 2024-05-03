.PHONY: start stop initial install update composer dev hot build npm craft

.DEFAULT_GOAL := help

## Start ddev start
start:
		ddev start

## Stop ddev stop
stop:
		ddev stop

## initial : ddev initial setup
initial:
		ddev composer install --no-scripts && ddev composer craft-initial && cd buildchain && ddev npm install && ddev npm run dev

## install : ddev composer install and npm install
install:
		ddev composer install && cd buildchain && ddev npm install

##
craft:
		ddev craft \
		$(filter-out $@,$(MAKECMDGOALS)) $(MAKEFLAGS)

## composer : use for ddev composer commands
composer:
		ddev composer \
		$(filter-out $@,$(MAKECMDGOALS)) $(MAKEFLAGS)

## dev : vite dev with HMR
dev:
		ddev start && cd buildchain && ddev npm run dev

## build : vite build
build:
		cd buildchain && ddev npm run build

## npm : use for ddev npm commands
npm:
		cd buildchain && ddev npm \
		$(filter-out $@,$(MAKECMDGOALS)) $(MAKEFLAGS)

help: Makefile
		@sed -n 's/^##//p' $<

%:
		@:
# ref: https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line




