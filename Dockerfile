FROM node:current-alpine3.21

WORKDIR /app
COPY . .
RUN npm install
RUN npx prisma generate
RUN npx tsc


ENV PORT=3000
 
EXPOSE 3000

CMD [ "node","dist/index.js" ]