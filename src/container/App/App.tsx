import Footer from "container/Footer/Footer";
import Header from "container/Header/Header";
import Main from "container/Main/Main";
import { StyledEngineProvider } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";

type Props = {};
const App = (props: Props) => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Header />
        <Main />
        <Footer />
      </StyledEngineProvider>
    </>
  );
};
export default App;
