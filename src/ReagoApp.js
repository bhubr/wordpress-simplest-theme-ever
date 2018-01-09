import React from 'react';
import RedirectWithStatus from './RedirectWithStatus';
import {
  Route,
  Redirect,
  Link,
  Switch
} from 'react-router-dom';
import SinglePost from './SinglePost';
import MultiplePost from './MultiplePost';
import ToolBar from './ToolBar';
import NotFound from './NotFound';


const Home = () => (
  <h1>Home</h1>
);

const Taxonomy = () => (
  <h1>Taxonomy</h1>
);

class QueryRoute extends React.Component {
  render() {
    const { component: Component, user, ...rest } = this.props;
    console.log('QueryRoute', arguments, this, user, rest);
    return (
      <Route {...rest} render={props => (
        <Component {...props}/>
      )} />
    );
  }
}


const ReagoApp = () => {
  const { permaStruct } = window.INITIAL_STATE.meta;
  return (
      <div>
        <ToolBar />
        <Switch>
          <Route exact path={permaStruct} component={SinglePost}/>
          <Route exact path="/" component={MultiplePost}/>
          <QueryRoute path="/author/:author" component={MultiplePost}/>
          <QueryRoute path="/category/:category" component={MultiplePost}/>
          <Route path="/:year/:monthnum/:hasPage?/:page?" component={MultiplePost}/>
          {/* some other routes
          <RedirectWithStatus
            status={301}
            from="/brands"
            to="/something"
          />
          <RedirectWithStatus
            status={302}
            from="/courses"
            to="/dashboard"
          /> */}
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
}

export default ReagoApp;
