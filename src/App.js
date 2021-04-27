import './App.css';
import React  from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/Home/Home';
import NavBar from './components/Layout/NavBar';
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import MemberRegister from './components/Member/MemberRegister';
import SubmitClaim from './components/Member/SubmitClaim';
import Footer from './components/Layout/Footer'
import NotFound from './components/Exceptions/NotFound';
import UpdateMember from './components/Member/UpdateMember';
import ViewDetails from './components/Member/ViewDetails';

function App() {

  return (
    <>
      <NavBar/>
      <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/add" component={MemberRegister} />
          <Route exact path="/user/edit/:id" component={UpdateMember} />
          <Route exact path="/SubmitClaim" component={SubmitClaim} />
          <Route exact path="/user/show/:id" component={ViewDetails} />
          <Route component = {NotFound}></Route>
          <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
