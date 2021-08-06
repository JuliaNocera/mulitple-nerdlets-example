import React from 'react';
import {HeadingText, Layout, LayoutItem} from 'nr1'

import NavBar from '../../src/NavBar'

export default class ThirdNerdlet extends React.Component {
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
            <HeadingText style={{textAlign: 'center'}}>This is nerdlet "THREE" in the Nerdpack with the launcher </HeadingText>
          </LayoutItem>
        </Layout>
      </>
    )
  }
}
