FROM node:10 as builder
ARG APP_DIR=app
ENV NODE_PORT 9090
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}
COPY . .
# RUN npm install --production
RUN npm install
EXPOSE ${NODE_PORT}
CMD ["npm", "run", "server"]