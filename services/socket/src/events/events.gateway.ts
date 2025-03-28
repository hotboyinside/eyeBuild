import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';
import { ServerToClientEvents } from './types/events';
import { Message } from 'src/messages/entities/message.entity';
import { UseGuards } from '@nestjs/common';
import { WsJwtGuard } from 'src/auth/ws-jwt/ws-jwt.guard';
import { SocketAuthMiddleware } from 'src/auth/ws-jwt/ws.middleware';
import { CLIENT_URL } from 'constants/env';

@WebSocketGateway({
  namespace: 'events',
  cors: {
    origin: [CLIENT_URL],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  },
})
@UseGuards(WsJwtGuard)
export class EventsGateway {
  @WebSocketServer()
  server: Server<any, ServerToClientEvents>;

  afterInit(client: Socket) {
    client.use(SocketAuthMiddleware() as any);
  }

  @SubscribeMessage('message')
  handleEvent(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: string,
  ): string {
    return 'Hello world!';
  }

  sendMessage(message: Message) {
    this.server.emit('newMessage', message);
  }
}
