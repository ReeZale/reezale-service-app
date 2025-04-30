# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.14.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Set working directory
WORKDIR /usr/src/app

# Copy only dependency files first (better cache)
COPY package*.json ./

# Install only production dependencies
RUN npm ci

# Copy all source files
COPY . .

# Generate Prisma client
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL
RUN npx prisma generate

# Fix permissions for non-root user
RUN chown -R node:node /usr/src/app

# Use non-root user
USER node

EXPOSE 8080

# Run the application.
CMD npm start
