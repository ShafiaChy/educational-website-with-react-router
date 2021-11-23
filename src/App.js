
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import TeacherOnStudyBuddies from './Components/TeachOnStudyBuddies/teach'
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/services">
          <Services></Services>
        </Route>
        <Route exact path="/teach">
         <TeacherOnStudyBuddies></TeacherOnStudyBuddies>
        </Route>
        <Route path="/*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    <Footer></Footer>
  </div>
  );
}

export default App;
