
#
# Production stage.
# This state compile get back the JavaScript code from builder stage
# It will also install the production package only
#
#FROM sebp/lighttpd:latest
#
#RUN rm -rf /var/cache/apk/*
#
#RUN mkdir /var/www/localhost/htdoc/
#
#RUN chmod 777 /var/www/localhost/htdoc/
#
#ADD dist/ /var/www/localhost/htdoc/
#
FROM node:alpine as base 

WORKDIR /base

RUN apk update 
    #&& apk add lighttpd \
    #&& rm -rf /var/cache/apk/*

ADD . .

RUN npm run build

FROM alpine:edge

RUN apk update \
    && apk add lighttpd \
    && rm -rf /var/cache/apk/*


COPY --from=base /base/dist/ /var/www/localhost/htdocs

RUN addgroup -S www
RUN adduser -S www -G www

COPY lighttpd.conf /etc/lighttpd/

#EXPOSE 80

CMD ["lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]

