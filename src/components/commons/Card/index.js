import React from 'react';
import styled from 'styled-components';
import { CardWrapper } from './styles/CardWrapper';

export default function Card({ title, image, text }) {
  return (
    <CardWrapper>
      <CardWrapper.CardTitle>{title}</CardWrapper.CardTitle>
      <CardWrapper.CardImage>{image}</CardWrapper.CardImage>
      <CardWrapper.CardText>{text}</CardWrapper.CardText>
    </CardWrapper>
  );
}