import Head from 'next/head';
import { parseCookies } from 'nookies';
import { GetServerSideProps } from 'next';

import { Produtos } from '@components/index';
import { Layout } from '@components/Layout/Layout/layout';

export default function ProdutosPage() {
  return (
    <>
      <Head>
        <title>Vem pro Juca - Produtos</title>
        <meta
          name="description"
          content="Serviços financeiros sempre perto de você"
        />
      </Head>
      <Produtos />
    </>
  );
}

ProdutosPage.layout = Layout;

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
