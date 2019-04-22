FROM node:10-alpine
LABEL maintainer="stepanenkomaksi@gmail.com"
ARG APP_DIR=/var/app
ENV NODE_PORT 9090

# Install bash and timezone files as root
RUN apk add --no-cache bash=4.4.19-r1 tzdata=2019a-r0
#    && rm -rf /etc/localtime \
#    && cp -rf /usr/share/zoneinfo/Europe/Kiev /etc/localtime \
#    && apk del tzdata

# Delete defult 'node' user and add new user:group 'app:appgrp'
#RUN deluser --remove-home node && \
RUN addgroup -S appgrp && \
    adduser -S -D -G appgrp -h ${APP_DIR} app

WORKDIR ${APP_DIR}
COPY package.json .
# RUN npm install --production
RUN npm install
COPY . .
RUN chown -R app:appgrp ${APP_DIR}
EXPOSE ${NODE_PORT}
USER app
CMD ["node_modules/.bin/babel-node", "src/server/server.js"]