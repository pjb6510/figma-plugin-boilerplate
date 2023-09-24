import React from 'react';
import ReactDOM from 'react-dom/client';

import { initializeNetwork } from '@common/network/init';
import { NetworkMessages } from '@common/network/messages';
import { NetworkSide } from '@common/network/sides';

import './reset.css';

async function main() {
  initializeNetwork(NetworkSide.UI);

  NetworkMessages.HELLO_PLUGIN.send({ text: 'Hey there, Figma!' });

  const App = (await import('./components/app/App')).App;

  const rootElement = document.getElementById('root') as HTMLElement;
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

main();
