import type { AppProps } from "next/app";
import { Provider as StoreProvider } from "react-redux";

import store from "@/utils/store";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/styles/styles.scss";
import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
};

export default App;
