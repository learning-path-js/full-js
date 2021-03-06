#######################################################################
# Builder container
#######################################################################

FROM node:10-alpine as builder

COPY package.json .
# RUN npm install --production
RUN npm install
COPY . .
RUN npm run build

#######################################################################
# Main container
#######################################################################
FROM node:10-alpine as main

LABEL maintainer="stepanenkomaksi@gmail.com"
ENV NODE_PORT 9090
ARG APP_DIR=/var/app

WORKDIR ${APP_DIR}

# Install bash and timezone files as root
RUN apk add --no-cache bash=4.4.19-r1 tzdata=2019a-r0
#    && rm -rf /etc/localtime \
#    && cp -rf /usr/share/zoneinfo/Europe/Kiev /etc/localtime \
#    && apk del tzdata

# Delete defult 'node' user and add new user:group 'app:appgrp'
RUN deluser --remove-home node && \
    addgroup -S appgrp && \
    adduser -S -D -G appgrp -h ${APP_DIR} app

COPY --from=builder --chown=app:appgrp node_modules ./node_modules
COPY --from=builder --chown=app:appgrp views ./views
COPY --from=builder --chown=app:appgrp dist ./dist
COPY --from=builder --chown=app:appgrp out ./out

#RUN chown -R app:appgrp ${APP_DIR}

EXPOSE ${NODE_PORT}
USER app
CMD ["node", "out/server/server.js"]