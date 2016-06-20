FROM nginx

COPY dist /usr/share/nginx/html
COPY server/default.conf /etc/nginx/conf.d/default.conf
