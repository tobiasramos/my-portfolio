import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={xxx} />
          <Route path="/" component={xxx} />
          <Route path="/" component={xxx} />
          <Route path="/" component={xxx} />
          <Route path="/" component={xxx} />
        </Switch>
      </div>
    </Router>
  );
};

export default Home;
