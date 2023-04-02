import React from 'react';
import { Router, Route, Switch } from "react-router-dom";

import Dashboard  from './pages/_dashboard.js';
import About_me   from './pages/_aboutMe.js';
import More       from './pages/_more.js';   
import Blogs      from './pages/_blogs.js';    
import Reviews    from './pages/_reviews.js';    
import ContactMe  from './pages/_contactMe.js';    
import SignIn     from './pages/_signIn.js';   

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

function App() {
  return (
    <>

        <Router history={history}>
            <Switch>
                <Route path="/_fd7e471d9e5696ea083f10720f169311" component={About_me} />
                <Route path="/_d3da97e2d9aee5c8fbe03156ad051c99" component={More} />
                <Route path="/_d6b9ea32b921a9f56de32062ba4b94f3" component={Blogs} />
                <Route path="/_34e80a799d144cfe4af46815e103f017" component={Reviews} />
                <Route path="/_65e84f4e55313aef8aa986ccff3e778b" component={ContactMe} />
                <Route path="/_f2fdea440d768b85591e936a803c3631" component={SignIn} />
                <Route path="/"                                  component={Dashboard} />      
            </Switch>
        </Router>
    </>
  );
}
export default App;