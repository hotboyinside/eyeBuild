FROM node:22-alpine

RUN apk update
RUN apk upgrade
RUN apk add --no-cache git

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 8000

ENTRYPOINT ["npm", "run", "start"]