const Discord = require('discord.js')
const client = new Discord.Client()

//Teste pra ver se o bot ta rodando.
client.on('ready', () => {
    console.log('Bot Rodando')
 });

//Quando o bot recebe uma mensagem, ele verifica o conteúdo da mensagem e responde respectivamente.
client.on('message', function(msg) {
  if (msg.content === 'oi') {
    msg.reply('Olá!');
  }
});

client.on('message', function(msg) {
  if (msg.content === 'tudo bem?') {
    msg.reply('tudo ótimo e com você?');
  }
}); 

client.on('message', function(msg) {
  if (msg.content === 'ótimo') {
    msg.reply('fico feliz com seu bem estar');
  }
}); 

client.on('message', function(msg) {
  if (msg.content === 'ta fazendo o que?') {
    msg.reply('servindo você mestre');
  }
}); 
 




//Faz o login do Bot no servidor.
 client.login('NTQ1NzU4MDQzMzg0NTc4MDQ5.D0eUqg.shrFO_icbGACTNQsRe3eHclTVoo')