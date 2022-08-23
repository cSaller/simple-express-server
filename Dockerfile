FROM node:lts-alpine

WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn --no-progress --frozen-lockfile
COPY . .

COPY --chown=node:node . .
USER node

EXPOSE $PORT

CMD ["yarn", "start"]
