# 
FROM alpine:edge as base

WORKDIR /base

RUN apk update && apk add nodejs npm

ADD . .

RUN npm run build

FROM alpine:edge

WORKDIR /app

RUN apk update \
    && apk add --update nodejs npm

COPY --from=base /base/dist/ .

COPY scripts/start.sh .

RUN npm install http-server

RUN chmod +x start.sh

#CMD ["node_modules/http-server/bin/http-server", "-p","8000","-P","http://localhost:8000?","." ]

CMD ["start.sh"]

