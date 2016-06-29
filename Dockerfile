FROM nginx

MAINTAINER Sandeep Arneja <sandeep45@gmail.com>

RUN apt-get update && apt-get install -y -q \
  curl \
  net-tools \
  man \
  vim

COPY dist /usr/share/nginx/html

COPY nginx.conf.template /etc/nginx/nginx.conf.template

ENV APP_SERVER app

RUN envsubst < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

EXPOSE 8080

ENTRYPOINT ["nginx"]
