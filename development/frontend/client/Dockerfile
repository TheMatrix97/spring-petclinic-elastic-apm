FROM node:8
WORKDIR /root
COPY ./frontend/client .
RUN npm install
EXPOSE 8081
CMD ["npm","start"]