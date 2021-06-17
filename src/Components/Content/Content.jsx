import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home/Home';
import Search from './Search/Search';
import About from './About/About';
import Auth from './Auth/Auth';
import Overview from './Admin/SubComponents/Overview/Overview';
// import NotFound from './NotFound/NotFound';

import "./Content.css";

class Content extends React.Component{

  render(){
      return(
        <div className="Content">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/search" render={(props) => <Search {...props} firebase={this.props.firebase} />} />
            <Route path="/auth" render={(props) => <Auth {...props} firebase={this.props.firebase} />} />
            <Route path="/admin/overview" render={(props) => <Overview {...props} firebase={this.props.firebase} />} />
            <Route path="/admin/pending" render={(props) => <Overview {...props} firebase={this.props.firebase} />} />
            <Route path="/admin/edit" render={(props) => <Overview {...props} firebase={this.props.firebase} />} />
            <Route path="/admin/verified" render={(props) => <Overview {...props} firebase={this.props.firebase} />} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      );
  }
    
}

export default Content;