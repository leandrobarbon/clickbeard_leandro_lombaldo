import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import type { NextPage } from 'next';

import { SignInUp } from 'components/SignIn';

import {
  Container,
  Slogan
} from '../styles/home';

const Index: NextPage = () => {
  return (
    <Container>
      <Slogan>BARBER <br /> SHOP</Slogan>
      <SignInUp />
    </Container>
  )
}


export default Index


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { ['nextauth-user']: user } = parseCookies(context);

  if (user) {
    return {
      props: {},
      redirect: '/home',
    }
  }

  return {
    props: {}
  }
}
