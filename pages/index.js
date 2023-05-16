import Header from './header';
import Main from './main';
import Footer from './footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        {' '}
        <title>Turing Test of Images</title>
        <meta property="og:title" content="Turing Test of Images" />
        <meta
          name="description"
          content="Check out the Human vs Machine Turing Test and try to win"
        />
        <meta
          property="og:description"
          content="Check out the Human vs Machine Turing Test and try to win"
        />
        <meta property="og:image" content="logo500.png" />
        <meta name="twitter:title" content="Turing Test of Images" />
        <meta
          name="twitter:description"
          content="Check out the Human vs Machine Turing Test and try to win"
        />
        <meta name="twitter:image" content="logo500.png" />
      </Head>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
