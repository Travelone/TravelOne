FROM python:3.8.5-slim-buster AS base

LABEL maintainer="hendy j agusta <hendy.j.agusta@gmail.com>"

RUN mkdir /install
WORKDIR /install

COPY requirements.txt /requirements.txt

RUN apt update -y && apt upgrade -y
RUN apt install -y build-essential

RUN pip install --upgrade pip

RUN pip install --prefix=/install -r /requirements.txt 

FROM python:3.8.5-slim-buster

LABEL maintainer="hendy j agusta <hendy.j.agusta@gmail.com>"

COPY --from=base /install /usr/local

WORKDIR /app

COPY *.py .
COPY ./data ./data
COPY ./reservation ./reservation
#RUN rm /etc/nginx/conf.d/*
#COPY flask-nginx.conf /etc/nginx/conf.d/nginx.conf
COPY flask-uwsgi.ini uwsgi.ini
COPY flask-startup.sh /app/startup.sh

RUN chmod +x ./startup.sh
RUN chmod +wr ./reservation

EXPOSE 5000
CMD [ "./startup.sh" ]
