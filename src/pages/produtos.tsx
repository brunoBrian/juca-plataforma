import { Header, Produtos } from '@components/index';
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
      <Header />
      <Produtos />
    </>
  );
}
