import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import LandingPage from './pages/landing-page/landing-page';
import ArtistDetails from './pages/artist-details/artist-details';


const Home = () => (
  <Provider store={store}>
    <Router>
            <div>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/artist/:id" component={ArtistDetails} />
            </div>
        </Router>
  </Provider>
);

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
