FROM node:9-alpine

RUN mkdir -p /opt/yarn/bin && ln -s /opt/yarn/yarn-v1.5.1/bin/yarn /opt/yarn/bin/yarn

COPY . /usr/src/
WORKDIR /usr/src

RUN "yarn"

CMD ["yarn", "run", "start"]
