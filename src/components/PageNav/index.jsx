import { Link } from 'react-router-dom'

export const PageNav = () => {
  return (
    <nav>
      <Link to='/'> Convidados </Link>
      <Link to='/presentes'> Presentes </Link>
    </nav>
  )
}