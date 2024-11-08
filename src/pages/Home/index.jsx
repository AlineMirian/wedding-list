import { Container } from './styles'
import { GuestList } from '../../components/GuestList'
import { PageNav } from '../../components/PageNav'
import * as S from './styles'


export function Home() {
  return (
    <S.Container>
        
        <PageNav />

        <S.Title>Gerenciamento de Convidados</S.Title>
        <GuestList />
      

      
    </S.Container>
  )
}