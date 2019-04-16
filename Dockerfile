FROM nginx:latest
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
