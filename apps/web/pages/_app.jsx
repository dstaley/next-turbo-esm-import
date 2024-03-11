function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.getInitialProps = async ({ Component, ctx }) => {
  const client = await import("@repo/cms");

  let pageProps = {};
  return { pageProps };
};

export default App;
