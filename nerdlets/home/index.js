import React from 'react';
import {HeadingText, Layout, LayoutItem} from 'nr1'

import NavBar from '../../src/NavBar'

export default class HomeNerdlet extends React.Component {
  render() {
    return (
      <>
        <Layout>
          <LayoutItem>
            <NavBar />
          </LayoutItem>
        </Layout>
        <Layout fullHeight>
          <LayoutItem>
            <HeadingText style={{textAlign: 'center'}}>This is nerdlet "ONE" </HeadingText>
          </LayoutItem>
        </Layout>
      </>
    )
  }
}
