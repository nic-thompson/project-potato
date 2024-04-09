FROM node:alpine

# Fixes https://github.com/facebook/create-react-app/issues/8688
ENV CI=true

# Fixes https://github.com/facebook/create-react-app/issues/11779
ENV WDS_SOCKET_PORT=0

WORKDIR /app
COPY package.json .
RUN npm install
COPY ./ ./

CMD ["npm", "start"]