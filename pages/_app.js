import { SectionProvider } from '../context/SectionContext';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SectionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SectionProvider>
  );
}

export default MyApp;