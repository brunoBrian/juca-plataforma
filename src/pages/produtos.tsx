import { Produtos } from '@components/index';
import Layout from '@components/layout';
import Head from 'next/head';

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
