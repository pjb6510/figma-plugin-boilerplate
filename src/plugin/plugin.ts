const getAllComponentSet = () =>
  figma.currentPage.findAll((node) => node.type === 'COMPONENT_SET') as ComponentSetNode[];

const logWithLine = (input: string) => console.log(`**********${input}*********`);

async function bootstrap() {
  figma.showUI(__html__, {
    width: 200,
    height: 200,
    title: 'PDS Figma Plugin',
  });

  const handleMessage = async () => {};

  figma.ui.onmessage = handleMessage;
}

bootstrap();
