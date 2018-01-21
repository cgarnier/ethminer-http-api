FROM node
RUN mkdir /app
ADD . /app
RUN cd /app && npm install
WORKDIR /app
EXPOSE 8888
CMD node index.js
