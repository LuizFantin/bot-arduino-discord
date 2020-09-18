const Discord = require('discord.js')
const five = require('johnny-five')

const client = new Discord.Client()
const board = new five.Board()

//Teste pra ver se o bot ta rodando.
client.on('ready', () => {
    console.log('Bot Rodando')
 });

board.on('ready', function () {
  const led = new five.Led(13)

  client.on('message', function(msg) {

    switch (msg.content){

      case 'liga':
      console.log('Ligando led')
      led.on()
      break

      case 'desliga':
      console.log('Desligando led')
      led.off()
      break
    }

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
  })
})

 




//Faz o login do Bot no servidor.
 client.login('NTQ1NzU4MDQzMzg0NTc4MDQ5.D0eUqg.shrFO_icbGACTNQsRe3eHclTVoo')