import { Lottie } from '@crello/react-lottie';
import React, { useEffect, useState } from 'react';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

import animation404 from './animations/404.json';

export default function Screen404() {
  const [windowHeight, setWindowHeight] = useState(300);

  useEffect(() => {
    setWindowHeight(window.innerHeight - 150);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid.Container
        display="flex"
        justifyContent="center"
      >
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12 }}
            display={{ xs: 'flex', md: 'none' }}
            justifyContent="center"
          >
            <Lottie
              width="200px"
              height="200px"
              className="lottie-container basic"
              config={{
                animationData: animation404,
                loop: true,
                autoplay: true,
              }}
            />
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 4 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Text
              as="h2"
              variant="h2"
              size={2}
              textAlign={{ xs: 'center', md: 'right' }}
              marginBottom="16px"
            >
              Página não encontrada!
            </Text>
            <Text
              as="p"
              variant="h3"
              size={0}
              textAlign="right"
              display={{ xs: 'none', md: 'block' }}
            >
              Tente novamente ou jogue um pouquinho!
            </Text>
            <Text
              as="p"
              variant="h3"
              size={0}
              textAlign="center"
              marginBottom="32px"
              display={{ xs: 'block', md: 'none' }}
            >
              Tente novamente!
            </Text>
          </Grid.Col>
          <Grid.Col
            value={{ md: 8 }}
            display={{ xs: 'none', md: 'block' }}
          >
            <iframe
              src="https://editor.p5js.org/camila-cruz/embed/OqfcWBqST"
              title="Jogo Astronauta de Mármore"
              style={{
                width: '100%',
                height: windowHeight,
              }}
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}
