const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

let first;
let second;


wss.on('connection', (ws) => {
  console.log('Новое соединение');
  console.log(wss.clients.size);

if(wss.clients.size==1) { first = ws;   }
else if( wss.clients.size==2) { second=ws; }

if( second !=undefined ) {
  second.on('message', (message) => {// если пришло от второго 
    //console.log('Получено:', message.toString());
    first.send(`от второго: ${message}`); //отправляем первому
  }); 
 first.on('message', (message) => {// если пришло от первого 
    //console.log('Получено:', message.toString());
    second.send(`от первого: ${message}`); //отправляем второму
  });
}
});

console.log('WebSocket сервер запущен на ws://localhost:3000');
const ws = new WebSocket('ws://localhost:3000');

// Ждём открытия соединения
ws.addEventListener('open', () => {
  console.log('Соединение установлено!');
 // ws.send('Привет, сервер!');
});

// Получаем сообщения от сервера
ws.addEventListener('message', (e) => {
  console.log('Сервер ответил:', e.data);
  document.querySelector("#board").style.background="red";
});

// Обработка ошибок
ws.addEventListener('error', (e) => {
  console.error('Ошибка WebSocket:', e);
});
