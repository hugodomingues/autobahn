# Use the official Node.js image as the base image
FROM node:18.13

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build 

# Expose the port on which the app will run
EXPOSE 80

# Command to start the application
CMD ["npm", "start"]
