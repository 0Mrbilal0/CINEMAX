FROM debian:latest
WORKDIR /home/app
RUN apt-get update && apt upgrade -y && apt-get install -y git nodejs npm
RUN git clone 