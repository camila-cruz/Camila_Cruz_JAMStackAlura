import React from 'react';
import { Box } from '../src/components/foundation/layout/Box';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function Page404() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <h2>Página não encontrada</h2>
      <p>Mas enquanto isso, você pode jogar um pouquinho!</p>
      <iframe
        src="https://editor.p5js.org/camila-cruz/embed/OqfcWBqST"
        title="Jogo Astronauta de Mármore"
        style={{
          width: '800px',
          height: '500px',
        }}
      />
    </Box>
  );
}

export default websitePageHOC(Page404, {});
