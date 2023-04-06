import { Login } from '@components/pages';
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
