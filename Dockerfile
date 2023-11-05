# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy the application file to the working directory
COPY app.js .

# Make port 8080 available outside the container
EXPOSE 8080

# Run the application when the container launches
CMD ["node", "app.js"]

