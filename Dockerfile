FROM node:20

WORKDIR /myApp 


COPY . .

RUN npm install 

EXPOSE 3000

CMD [ "npm","start" ]

