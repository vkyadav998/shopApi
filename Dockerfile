FROM node:10

MAINTAINER Vipin Yadav  <vkyadav998@gmail.com>

# Create directory if not present
RUN mkdir -p /usr/src/app

# Sets work directory
WORKDIR /usr/src/app

# Copy package.json
COPY package*.json ./

# Installs dependencies 
RUN echo "installing packages for shop-api" && npm install --silent

# Copy working files
COPY . .

# Expose port
EXPOSE 3010

# Starts run command
CMD [ "npm", "start" ]