FROM node:16-alpine AS development
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install
# Copy app files
COPY . .
CMD [ "yarn", "start" ]