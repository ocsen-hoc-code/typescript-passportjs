build-dev: 
	@echo "=============Build And Starting Service Locally============="
	docker build -f  Dockers/Development/Dockerfile -t ocsen-nodejs-dev .
	docker-compose up -d
build-release: 
	@echo "=============Build And Starting Service Locally============="
	docker build -f  Dockers/Release/Dockerfile -t ocsen-nodejs .
	cd Dockers/Release && docker-compose up -d
up:
	@echo "=============Starting Service Locally============="
	docker-compose up -d

up-release:
	@echo "=============Starting Service Locally============="
	cd Dockers/Release && docker-compose up -d

logs:
	docker-compose logs -f

logs-release:
	cd Dockers/Release
	docker-compose logs -f

down:
	docker-compose down

down-release:
	cd Dockers/Release && docker-compose down

clean-dev: down
	@echo "=============Cleaning Up============="
	docker rmi ocsen-nodejs-dev
	docker system prune -f
	docker volume prune -f

clean-release: down-release
	@echo "=============Cleaning Up============="
	docker rmi ocsen-nodejs
	docker system prune -f
	docker volume prune -f