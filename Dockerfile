FROM node:10-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install
RUN yarn run setup
RUN yarn run build
RUN yarn run swagger

EXPOSE 3000
CMD [ "yarn", "run", "start:webfront" ]
