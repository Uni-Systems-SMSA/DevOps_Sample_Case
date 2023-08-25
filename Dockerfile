FROM node


# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm config set legacy-peer-deps true
RUN npm ci
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install serve --silent

# add app
COPY . ./
RUN npm run build
# start app
CMD ["serve", "-s", "-l", "3001", "build"]
