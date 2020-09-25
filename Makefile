.PHONY: deploy
deploy:
	@docker image rm -f bien-pa-bot-js;\
docker build -t bien-pa-bot-js .;\
docker rm -f bien-pa-bot-js;\
docker run -d --restart unless-stopped --name bien-pa-bot-js --env-file config.env bien-pa-bot-js;\

.PHONY: start
start:
	@docker run -d --restart unless-stopped --name bien-pa-bot-js --env-file config.env bien-pa-bot-js

.PHONY: stop
stop:
	@docker stop bien-pa-bot-js

.PHONY: logs
logs:
	@tail -f -n 2000 logs.txt

