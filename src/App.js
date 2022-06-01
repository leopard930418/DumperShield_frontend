import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Component/header'
import SnackbarProvider from 'react-simple-snackbar';
import OTC from './Pages/OTC'
import Gateway from './Pages/Gateway'
import RouterPage from './Pages/RouterPage'
import Governance from './Pages/Governance'
import Unfreeze from './Pages/Unfreeze'
import ConnectWallet from './Pages/connectWallet'
import Gs from './Theme/globalStyles';
import { ThemeProvider } from 'styled-components'
import { theme } from './Theme/theme'
import Footer from './Component/footer';
import { metamask_connection } from './Service/metamask_function';

const { useState } = React;

const selectedTheme = theme(true)
function App() {
  const [isHead, setIsHead] = useState(false);

  useEffect(() => {
    metamask_connection(localStorage.getItem('account'), 'UseEffect')
  })

  function changeHead(flag) {
    setIsHead(flag)
  }
  return (
    <Router basename={''}  >
      {/*  basename={'Demo/governance'}   */}
      <ThemeProvider theme={selectedTheme}>
        <SnackbarProvider>
          <section className='MainBox clearfix'>
            <Gs.GlobalStyle />
            {isHead ? null : <Header />}
            <Gs.MainBox>
              <Switch>
                <Route path="/" exact> <ConnectWallet changeHead={changeHead} />  </Route>
                <Route path="/otc" exact> <OTC />  </Route>
                <Route path="/Gateway" exact> <Gateway />  </Route>
                <Route path="/Router" exact> <RouterPage />  </Route>
                <Route path="/Unfreeze" exact> <Unfreeze />  </Route>
                <Route path="/Governance" exact> <Governance />  </Route>
               
              </Switch>
            </Gs.MainBox>
            {isHead ? null : <Footer />}

          </section>
        </SnackbarProvider>
      </ThemeProvider>
    </Router>

  );
}

export default App;