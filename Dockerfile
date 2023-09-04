# Use an official Node.js image with version 16 or higher
FROM node:16-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install
# Copy app files
COPY . .
# Expose port
EXPOSE 8083
# Start the app
CMD [ "yarn", "start" ]
