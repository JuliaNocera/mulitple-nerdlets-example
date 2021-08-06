import React from 'react';
import {BlockText, HeadingText, Layout, LayoutItem, Spacing} from 'nr1'

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
            <HeadingText style={{textAlign: 'center'}}>This nerdlet shows up when "Three" is clicked</HeadingText>
            <Spacing type={[Spacing.TYPE.MEDIUM]}>
              <BlockText style={{textAlign: 'center'}}>This nerdlet has the id "third" in the Nerdpack with the launcher</BlockText>
            </Spacing>
          </LayoutItem>
        </Layout>
      </>
    )
  }
}
