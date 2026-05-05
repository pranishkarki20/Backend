import { Socket } from "dgram"
import net from "net"

const server = net.createServer((Socket) =>
{
    Socket.write('Hello Client');
    Socket.on('data' ,(data) => {
        console.log(data.toString());
    });
});

server.listen(4000 , () => {
    console.log("server is running at port 300")
})