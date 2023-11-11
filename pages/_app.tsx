import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import '../app/globals.css' 
import Header from '../components/header'
import Footer from '../components/footer'
type AppOwnProps = { example: string }
 
export default function MyApp({
  Component,
  pageProps,
  example
}: AppProps & AppOwnProps) {
  return (
    <>
      {/* <p>Data: {example}</p> */}
      <main>
      <Header />
      <Component {...pageProps} />
      <Footer />
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