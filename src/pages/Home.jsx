import React from 'react'

import Header from '../layouts/Header'
import Main from '../layouts/Main'

const Home = (props) => (
  <React.Fragment>
    <Header 
      propsRouterHeader={props}
    />
    <Main />
  </React.Fragment>
)

export default Home