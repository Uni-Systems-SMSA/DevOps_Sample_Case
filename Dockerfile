# stage1 as builder
FROM node as builder

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install --force

COPY . .

# Build the project and copy the files
RUN npm run build


FROM nginx

#!/bin/sh
RUN mkdir /var/www/
RUN scp -r ./build/* /var/www/build/
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder ./build /usr/share/nginx/html



ENTRYPOINT ["nginx", "-g", "daemon off;"]