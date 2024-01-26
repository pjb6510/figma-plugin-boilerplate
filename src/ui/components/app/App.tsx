import { FC, MouseEventHandler } from 'react';
import { mainContainerStyle } from './App.styles';

export const App: FC = () => {
  const handleButtonClick: MouseEventHandler = () => {
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count: 3 } }, '*');
  };

  return (
    <main css={mainContainerStyle}>
      <div className="hi">hello figma</div>
      <button onClick={handleButtonClick}>Button</button>
    </main>
  );
};
