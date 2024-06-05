After drag the 40bits file on the htdocs

Find the file name .env.example
Change it into .env

Go to the .env
You can see thers a code like this
\ # DB_CONNECTION=sqlite
\ # DB_HOST=127.0.0.1
\ # DB_PORT=3306
\ # DB_DATABASE=laravel
\ # DB_USERNAME=root
\ # DB_PASSWORD=

after you find the #
copy this and paste it

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=40bits_db
DB_USERNAME=root
DB_PASSWORD=

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=40bits_db
DB_USERNAME=root
DB_PASSWORD=

After 

Go to terminal ( Ctrl + Shift + ~ )
and copy and paste this
Write this on the terminal

1. 
npm install

2.
composer install

3.
php artisan key:generate

4.
php artisan migrate

After ( Ctrl + Shift + ~ )

comment this 

npm run dev

again do the ( Ctrl + Shift + ~ )

php artisan serve.


