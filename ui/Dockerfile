FROM node:lts-jessie

# Install yarn for package management instead of npm and webpack for dev web server
RUN npm i -g yarn

# app directory in container's root
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

COPY . .

# Dev server
CMD ["npm", "start"]
