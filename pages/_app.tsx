import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import '../app/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { QueryClient, QueryClientProvider } from 'react-query';
type AppOwnProps = { example: string }
const queryClient = new QueryClient();
export default function MyApp({
  Component,
  pageProps,
  example,
 
}: AppProps & AppOwnProps) {
  return (
    <>
      {/* <p>Data: {example}</p> */}
      <main>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </QueryClientProvider>
      </main>
    </>
  )
}

MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context)
  
  return { ...ctx, example: '' }
}