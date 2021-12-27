FROM node:14-alpine

WORKDIR /usr/src/app
COPY target/ ./

RUN npm install && npm run build

EXPOSE 80
CMD ["npm", "run", "start:prod"]