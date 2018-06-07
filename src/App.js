import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './containers/Header';
import Footer from './containers/Footer';
import HomePage from './pages/HomePage';
import RankPage from './pages/RankPage';
import DetailPage from './pages/DetailPage';

import { injectGlobal } from 'styled-components';
import { Container } from './base';

class App extends Component {
  render() {
    let navs = [{id: "001", name: "首页", url: "/"}, {id: "002", name: "排行版", url: "/rank"}]

    return (
        <Router>
          <Container width="100%">
            <Header title="DApp Rank" navs={navs} />
            <Route exact path="/" component={HomePage}/>
            <Route path="/rank" component={RankPage}/>
            <Route path="/detail/:id" component={DetailPage}/>
            <Footer title="DApp Rank"/>
          </Container>
        </Router>
    );
  }
}

injectGlobal`
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul {
  list-style: none;
}

button,
input,
select,
textarea {
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

img,
embed,
iframe,
object,
audio,
video {
  height: auto;
  max-width: 100%;
}

iframe {
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
  text-align: left;
}

a{
  text-decoration: none;
}
`;

export default App;