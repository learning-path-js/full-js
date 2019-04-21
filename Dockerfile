FROM node:10-alpine as builder
LABEL owner_email="stepanenkomaksi@gmail.com"
ARG APP_DIR=app
ENV NODE_PORT 9090
RUN apk add --no-cache bash tzdata
#    && rm -rf /etc/localtime \
#    && cp -rf /usr/share/zoneinfo/Europe/Kiev /etc/localtime \
#    && apk del tzdata
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}
COPY package.json .
# RUN npm install --production
RUN npm install
COPY . .
EXPOSE ${NODE_PORT}
CMD ["npm", "run", "server:prod"]