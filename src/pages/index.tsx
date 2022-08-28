import type { NextPage } from 'next'

import { SignIn } from 'components/SignIn';

import { 
  Container,
  Slogan
} from '../styles/home';

const Home: NextPage = () => {
  return (
    <Container>
      <Slogan>BARBER <br /> SHOP</Slogan>
      <SignIn />
    </Container>
  )
}

export default Home
