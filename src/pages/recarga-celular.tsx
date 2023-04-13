import Head from 'next/head';
import { parseCookies } from 'nookies';
import { GetServerSideProps } from 'next';

import { Layout } from '@components/Layout/Layout/layout';
import { RecargaCelular } from '@components/pages/RecargaCelular';

export default function RecargaCelularPage() {
  return (
    <>
      <Head>
        <title>Vem pro Juca - Recarga de celular</title>
        <meta
          name="description"
          content="Serviços financeiros sempre perto de você"
        />
      </Head>

      <RecargaCelular />
    </>
  );
}

RecargaCelularPage.layout = Layout;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { ['juca.accesstoken']: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
};
