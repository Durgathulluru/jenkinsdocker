from ubuntu20:04
workdir /usr/src/app
run apt-get update && apt-get install -y  nginx
copy Read.me .
expose 80
cmd ["nginx", "-g", "daemon off;"]


