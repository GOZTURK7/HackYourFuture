const net = require('net');

const zeroFilled = (i) =>{
    return (i<10 ? '0' : '') + i
}

const time = () =>{
    let date = new Date();
    return date.getFullYear() + '-' + 
    zeroFilled(date.getMonth()+1) + '-' +
    zeroFilled(date.getDate()) + ' ' +
    zeroFilled(date.getHours()) + ':' +
    zeroFilled(date.getMinutes())
}

const server = net.createServer(function(socket){
    socket.write(time());
    socket.end('\n');
});

server.listen(Number(process.argv[2]));