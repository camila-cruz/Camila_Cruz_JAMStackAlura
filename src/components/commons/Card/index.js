import React from 'react';
import styled from 'styled-components';
import { CardWrapper } from './styles/CardWrapper';

export default function Card({ title, image, text }) {
  return (
    <CardWrapper>
      <CardWrapper.CardImage><img src={image} /></CardWrapper.CardImage>
      <CardWrapper.CardTitle>{title}</CardWrapper.CardTitle>
      <CardWrapper.CardText>{text}</CardWrapper.CardText>
    </CardWrapper>
  );
}