
all : grunticon.loader.js

grunticon.loader.js :
	curl -O https://raw.github.com/filamentgroup/grunticon/v1.0.0/tasks/grunticon/static/grunticon.loader.js

clean :
	rm -rf grunticon.loader.js

.PHONY: all clean
