.PHONY: help format install clean build start stop log

DOCKER_COMPOSE = docker-compose -p dormirchezvous -f docker-compose.yml
DOCKER_COMPOSE_EXEC = $(DOCKER_COMPOSE) run --rm --no-deps backend bash -ci

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

format: ## Format project code
	$(DOCKER_COMPOSE_EXEC) "npm run format"

install: ## Install docker + deps
	$(DOCKER_COMPOSE) build
	$(DOCKER_COMPOSE_EXEC) "npm install --no-progress"

build: ## Build project for production use
	$(DOCKER_COMPOSE_EXEC) "rm -rf dist && mkdir dist"
	$(DOCKER_COMPOSE_EXEC) "npm run build-backend"
	$(DOCKER_COMPOSE_EXEC) "npm run build-frontend"

start: ## Start node server
	$(DOCKER_COMPOSE) up -d

stop: ## Stop node server
	$(DOCKER_COMPOSE) down

log: ## Show logs
	$(DOCKER_COMPOSE) logs -f
