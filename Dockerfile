# Dockerhub image
FROM node:latest

# Work Directory
WORKDIR /usr/src/dev/graphql

# Copying package.json to workdir
COPY package*.json ./

# Installing dependencies
RUN yarn install

# Copying source code to workdir
COPY . .

# Defining Container port
EXPOSE 4692

# Running server
CMD ["yarn", "dev"]