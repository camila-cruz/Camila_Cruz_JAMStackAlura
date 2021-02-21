/* eslint-disable object-curly-newline */
import React from 'react';
import { CardWrapper } from './styles/CardWrapper';
import Text from '../../foundation/Text';

// eslint-disable-next-line react/prop-types
export default function Card({ title, image, text, link, destaque }) {
  return (
    <>
      {(destaque === true && (
        <CardWrapper.CardDestaque>
          <CardWrapper.CardImage as="a" href={link} target="_blank" style={{ textDecoration: 'none' }}>
            <img src={image} alt={`Imagem do projeto ${title}`} />
          </CardWrapper.CardImage>
          <div>
            <CardWrapper.CardTitle>{title}</CardWrapper.CardTitle>
            <CardWrapper.CardText>
              {text}
              <Text tag="a" variant="link" href={link} target="_blank">
                Veja o repositório
                <img src="/images/arrow.svg" alt="Link para o repositório" />
              </Text>
            </CardWrapper.CardText>
            <CardWrapper.CardDestaqueLabel>Destaque</CardWrapper.CardDestaqueLabel>
          </div>
        </CardWrapper.CardDestaque>
      )) || (
        <CardWrapper>
          <CardWrapper.CardImage as="a" href={link} target="_blank" style={{ textDecoration: 'none' }}>
            <img src={image} alt={`Imagem do projeto ${title}`} />
          </CardWrapper.CardImage>
          <CardWrapper.CardTitle>
            {title}
          </CardWrapper.CardTitle>
        </CardWrapper>
      )}
    </>
  );
}
