FROM python:3.7-alpine AS base

LABEL maintainer="hendy j agusta <hendy.j.agusta@gmail.com>"

# Add demo app
# WORKDIR /app
RUN mkdir /install
WORKDIR /install


COPY requirements.txt /requirements.txt



RUN apk update \
    && apk --update --no-cache add build-base 

RUN apk add --no-cache \
    nginx \
#    python3-dev \
    linux-headers

#RUN apk add python-dev gcc linux-headers

RUN pip install --upgrade pip

RUN pip install --prefix=/install -r /requirements.txt

FROM base

COPY --from=base /install /usr/local
#COPY src /app

WORKDIR /app

COPY *.py .
COPY ./data ./data
COPY ./reservation ./reservation
COPY flask-nginx.conf /etc/nginx/nginx.conf
COPY flask-uwsgi.ini wsgi.ini
COPY flask-startup.sh /app/startup.sh

RUN chmod +x ./startup.sh

EXPOSE 80
#CMD [ "./startup.sh" ]
