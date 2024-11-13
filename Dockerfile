FROM node:current-alpine3.18

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

#ENTRYPOINT ["tail", "-f", "/dev/null"]
CMD [ "node", "index.js" ]
