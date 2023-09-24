import * as Networker from 'monorepo-networker';

export const NetworkSide = {
  PLUGIN: Networker.Side.register(
    new Networker.Side<MessageEvent<unknown>>('Plugin', {
      attachListener: (callback) => figma.ui.on('message', callback),
      detachListener: (callback) => figma.ui.off('message', callback),
    }),
  ),

  UI: Networker.Side.register(
    new Networker.Side('UI', {
      shouldHandle: (event) => event.data?.pluginId != null,
      messageGetter: (event) => event.data.pluginMessage,
      attachListener: (callback) => window.addEventListener('message', callback),
      detachListener: (callback) => window.removeEventListener('message', callback),
    }),
  ),
};
