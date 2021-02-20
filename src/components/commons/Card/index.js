import React from 'react';
import styled from 'styled-components';
import { CardWrapper } from './styles/CardWrapper';

export default function Card({ title, image, text, ...props }) {
  return (
    <>
    {(props.destaque === true && (
      <CardWrapper.CardDestaque>
        <CardWrapper.CardImage><img src={image} alt={`Imagem do projeto ${title}`}/></CardWrapper.CardImage>
        <div>
          <CardWrapper.CardTitle>{title}</CardWrapper.CardTitle>
          <CardWrapper.CardText>{text}</CardWrapper.CardText>
        </div>
      </CardWrapper.CardDestaque>
    )) || (
      <CardWrapper>
        <CardWrapper.CardImage><img src={image} alt={`Imagem do projeto ${title}`}/></CardWrapper.CardImage>
        <CardWrapper.CardTitle>{title}</CardWrapper.CardTitle>
        {/* <CardWrapper.CardText>{text}</CardWrapper.CardText> */}
      </CardWrapper>
    )}
    </>
  );
}