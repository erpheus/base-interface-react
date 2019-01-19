SHELL:=/bin/bash

UI_PORT = 3232

run-ui-dev:
	UI_PORT=${UI_PORT} docker-compose -f docker/docker-compose-dev.yml --project-directory $$(pwd) run --service-ports --rm ui
