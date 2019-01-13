FROM node:8

ARG DUMB_INIT_VERSION=1.2.2
WORKDIR /app

COPY . /app/
RUN wget -q -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v${DUMB_INIT_VERSION}/dumb-init_${DUMB_INIT_VERSION}_amd64 && \
    chmod +x /usr/local/bin/dumb-init && \
    npm install

ENTRYPOINT [ "/usr/local/bin/dumb-init", "--" ]
CMD [ "npm", "start" ]
