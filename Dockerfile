FROM nginx
MAINTAINER Sandeep Arneja <sandeep45@gmail.com>
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y net-tools
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
ENTRYPOINT ["nginx"]