create database agencia;
use agencia;

create table viagens(
id int auto_increment primary key,
destino varchar(255) not null,
data_viagem date not null,
preco decimal(10,2) not null,
vagas int not null
);

   
