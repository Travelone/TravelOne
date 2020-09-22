FROM alpine:edge

RUN apk update \
    && apk add lighttpd \
    && rm -rf /var/cache/apk/*

ADD images/ /var/www/localhost/htdocs/images

RUN addgroup -S www
RUN adduser -S www -G www

COPY lighttpd.conf /etc/lighttpd/

EXPOSE 8000

CMD ["lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"] 