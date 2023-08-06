const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    console.log(message.body);
	if(message.body === 'Hola') {
		message.reply(message.from,'Gracias por contactar con Matias Silvestri Tecnico en Programacion. En breve le respondera...');
	}
});

client.initialize();