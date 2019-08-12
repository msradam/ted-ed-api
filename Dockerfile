From node:latest
RUN mkdir -p /srv/app/ted-ed-api
WORKDIR /srv/app/ted-ed-api

COPY package.json /srv/app/ted-ed-api
COPY yarn.lock /srv/app/ted-ed-api

RUN yarn

COPY . /srv/app/ted-ed-api

CMD ["yarn", "run", "dev"]