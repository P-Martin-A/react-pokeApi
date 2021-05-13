import React from 'react'

import Header from '../layouts/Header'
import Error from '../components/Error'

const Home = (props) => (
  <React.Fragment>
    <Header 
      propsRouterHeader={props}
    />
    <Error />
  </React.Fragment>
)

export default Home