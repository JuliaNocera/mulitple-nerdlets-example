import React from 'react';
import {BlockText, HeadingText, Layout, LayoutItem, Spacing} from 'nr1'

import NavBar from '../../src/NavBar'

export default class SecondNerdlet extends React.Component {
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
            <HeadingText style={{textAlign: 'center'}}>This nerdlet shows up when "Two" is clicked</HeadingText>
            <Spacing type={[Spacing.TYPE.MEDIUM]}>
              <BlockText style={{textAlign: 'center'}}>This nerdlet has the id "second" in the Nerdpack with the launcher</BlockText>
            </Spacing>
            <Spacing type={[Spacing.TYPE.MEDIUM]}>
              <Link style={{textAlign: 'center'}} to="">Nerdlet and repo location</Link>;
            </Spacing>
          </LayoutItem>
        </Layout>
      </>
    )
  }
}
