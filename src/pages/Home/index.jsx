import { Container } from './styles'
import { GuestList } from '../../components/GuestList'
import { PageNav } from '../../components/PageNav'


export function Home() {
  return (
    <Container>
        
        <PageNav />

        <h1>Gerenciamento de Convidados</h1>
        <GuestList />
      

      
    </Container>
  )
}