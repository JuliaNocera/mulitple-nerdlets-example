import React from 'react';
import {BlockText, HeadingText, Layout, LayoutItem, Link, Spacing} from 'nr1'

import Header from '../../src/Header'
import NavBar from '../../src/NavBar'

export default class SecondNerdlet extends React.Component {
  render() {
    return (
      <>
        <Layout>
          <LayoutItem>
            <Header />
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
              <div style={{textAlign: 'center'}}>
                <Link to="https://github.com/JuliaNocera/mulitple-nerdlets-example/tree/main/nerdlets/second">Nerdlet and repo location</Link>
              </div>
            </Spacing>
          </LayoutItem>
        </Layout>
      </>
    )
  }
}
