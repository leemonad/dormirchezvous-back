.PHONY: help format install connect clean build start stop log

DOCKER_COMPOSE = docker-compose -p dormirchezvous -f docker-compose.yml

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

format: ## Format project code
	$(DOCKER_COMPOSE) run --rm --no-deps node bash -ci "npm run format"

install: ## Install docker + deps
	$(DOCKER_COMPOSE) build
	$(DOCKER_COMPOSE) run --rm --no-deps node bash -ci "npm install --no-progress"

connect: ## Connect to node server
	$(DOCKER_COMPOSE) run --rm node bash

clean: ## Clean production build
	$(DOCKER_COMPOSE) run --rm --no-deps node bash -ci "rm -rf build && mkdir build"

build: ## Build project for production use
	$(MAKE) clean
	$(DOCKER_COMPOSE) run --rm --no-deps node bash -ci "npm run build"

start: ## Start node server
	$(DOCKER_COMPOSE) up -d

stop: ## Stop node server
	$(DOCKER_COMPOSE) down

log: ## Show logs
	$(DOCKER_COMPOSE) logs -f
