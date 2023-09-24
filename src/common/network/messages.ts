import { CreateRectMessage } from '@common/network/messages/CreateRectMessage';
import { HelloMessage } from '@common/network/messages/HelloMessage';
import { PingMessage } from '@common/network/messages/PingMessage';
import { NetworkSide } from '@common/network/sides';
import * as Networker from 'monorepo-networker';

export const registry = new Networker.MessageTypeRegistry();

export const NetworkMessages = {
  PING: registry.register(new PingMessage('ping')),
  HELLO_PLUGIN: registry.register(new HelloMessage(NetworkSide.PLUGIN)),
  HELLO_UI: registry.register(new HelloMessage(NetworkSide.UI)),
  CREATE_RECT: registry.register(new CreateRectMessage('create-rect')),
};
