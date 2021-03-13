import styled from 'styled-components';

const Link = styled.a`
  /* Efeito de hover */
  &:after {    
    position: relative;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    background: ${({ theme }) => theme.mainUi.text.light.primary};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover {
    &:after { 
      width: 100%;
      left: 0; 
    }
  }
`;

export default Link;
