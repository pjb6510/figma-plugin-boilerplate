import { FC } from 'react';
import * as Networker from 'monorepo-networker';
import { NetworkMessages } from '@common/network/messages';
import { mainContainerStyle } from './App.styles';

export const App: FC = () => {
  const handlePingClick = async () => {
    const response = await NetworkMessages.PING.request({});
    console.log('Response:', response);
  };

  const handleSquareClick = () => {
    NetworkMessages.CREATE_RECT.send({
      width: 100,
      height: 100,
    });
  };

  return (
    <main css={mainContainerStyle}>
      hello figma{' '}
      <div className="hi">
        {' '}
        <span>(Current logical side = {Networker.Side.current.getName()})</span>
      </div>
    </main>
  );
};
