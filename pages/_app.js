import { SectionProvider } from '../context/SectionContext';
import Layout from '../components/Layout';
import OverlayDetector from '../components/OverlayDetector';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SectionProvider>
      <Layout>
        {/* opt-in debug helper: add ?debug=overlay to the URL to temporarily disable blocking overlays */}
        <OverlayDetector />
        <Component {...pageProps} />
      </Layout>
    </SectionProvider>
  );
}

export default MyApp;