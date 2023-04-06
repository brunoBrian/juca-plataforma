import { Login } from '@components/index';
import Head from 'next/head';

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
