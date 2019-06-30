
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Copy over the working HEAD we downloaded from S3
COPY . .

# Run install commands if we have them
CMD yarn install --prefix frontend
