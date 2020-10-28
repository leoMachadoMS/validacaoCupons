## Sobre
Este programa é um protótipo de um sistema que verifica e gerencia códigos promocionais.
O app é feito com React e ReactDOM, ao mesmo tempo que é usado uma API Rest feita com Laravel.


## Instalação dos Requisitos


Para a aplicação rodar localmente, seguem os seguintes requisitos:

PHP (<a href="https://www.php.net/manual/en/install.php">Installation Guide </a>)
Composer (<a href="https://getcomposer.org/doc/00-intro.md">Guia de Instalação</a>)
Laravel (<a href="https://laravel.com/docs/8.x">Guia de Instalação</a>)
Windows / Linux: Homestead (<a href="https://laravel.com/docs/8.x/homestead">Guia de Instalação</a>)


Para o uso do banco de dados relacional, é necessário um servidor MySQL e Apache para a simulação local.

XAMPP (<a href="https://www.apachefriends.org/pt_br/download.html">Guia de Instalação </a>)
MySQL Workbrench (<a href="https://www.mysql.com/downloads/"> Guia de Instalação</a>)


## Intalação dos Módulos e preparação

Para instalar as dependências do PHP:

<b>"composer install"</b>


E as dependências JS:

<b>"npm install"</b>


A partir do arquivo ".env.example", crie o arquivo ".env" e configure a partir das informações do seu banco de dados. Este trecho em questão:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=


Com o XAMPP ativo e um banco de dados ativo, use o código abaixo para fazer as migrações das tabelas:

<b>"php artisan migrate"</b>


## Compilação e Execução

Então compile os JS assets com:

<b>"npm run dev"</b>


Finalmente, utilize o código abaixo para rodar o sistema:

<b>"php artisan serve"</b>


A aplicação está rodando no endereço <a href="http://127.0.0.1:8000/">http://127.0.0.1:8000/<a>
