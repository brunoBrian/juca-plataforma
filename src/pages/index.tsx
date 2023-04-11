import { Login } from '@components/index';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { parseCookies } from 'nookies';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vem pro Juca</title>
        <meta
          name="description"
          content="Serviços financeiros sempre perto de você"
        />
      </Head>
      <Login />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { ['juca.accesstoken']: token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: '/produtos',
        permanent: true
      }
    };
  }

  return {
    props: {}
  };
};
