import type { NextPage } from 'next'

import { SignInUp } from 'components/SignIn';

import { 
  Container,
  Slogan
} from '../styles/home';

const Home: NextPage = () => {
  return (
    <Container>
      <Slogan>BARBER <br /> SHOP</Slogan>
      <SignInUp />
    </Container>
  )
}

export default Home
