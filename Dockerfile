
#
# Production stage.
# This state compile get back the JavaScript code from builder stage
# It will also install the production package only
#
FROM node:12.18.3-alpine AS frontend

WORKDIR /app
ENV NODE_ENV production

COPY package*.json ./
RUN npm ci --quiet --only=production

## We just need the build to execute the command
COPY ./dist ./build