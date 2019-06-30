
FROM node:10
WORKDIR /usr/src
RUN git clone https://github.com/alexsde/koji-react-native-web-scaffold.git app && cd app/frontend
RUN yarn install
RUN yarn start
