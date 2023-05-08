FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN apk add --no-cache tini
RUN npm install && npm cache clean --force
COPY . .
RUN npm run build
EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
CMD [ "npm", "run", "start" ]
