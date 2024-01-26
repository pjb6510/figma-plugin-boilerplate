import React from 'react';
import ReactDOM from 'react-dom/client';

import './reset.css';

async function main() {
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
