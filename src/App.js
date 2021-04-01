import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { MobileHeader, Header } from './Header';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { SubNav } from './MobileMenu/SubNav';
import { Home } from './Home';

function App() {
  return (
    <>
      <GlobalStyle />

      <Router>
        <MobileHeader />
        <Header />

        <Switch>
          <Route exact path="/mobileNav" component={MobileMenu} />
          <Route
            exact
            path="/mobileNav/:sub"
            component={(props) => (
              <>
                <SubNav {...props} />
              </>
            )}
          />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
