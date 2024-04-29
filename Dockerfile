FROM node:18-alpine

WORKDIR /REACT_APP1/

COPY package.json /REACT_APP1/

RUN npm install

COPY public/ /REACT_APP1/public
COPY src/ /REACT_APP1/src/

EXPOSE 3000

CMD ["npm","start"]