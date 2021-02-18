import styled from 'styled-components'
import Cabecalho from '../src/components/commons/Cabecalho'
import Capa from '../src/components/commons/Capa'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <>
      <Capa title="Camila Cruz"/>
      <Cabecalho />
    </>
  )
}
