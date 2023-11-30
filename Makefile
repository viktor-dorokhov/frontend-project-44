install: # установить зависимости
	npm ci

brain-games: # запустить приложение
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .