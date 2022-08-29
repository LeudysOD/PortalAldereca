FROM node:14.17.1-alpine

WORKDIR /portal

COPY ["package.json", "package-lock.json", "./"]
RUN npm install -g
RUN npm install serve -g

COPY . .

RUN npm run build 
CMD serve -s build