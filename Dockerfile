FROM php:8.3-cli-bookworm

WORKDIR /var/www

COPY . /var/www

EXPOSE 8000

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
