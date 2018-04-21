import React, { Component } from 'react'
import { Box, Header, Main, Position, theme, View } from 'jaak-primitives'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ThemeProvider } from 'styled-components'

import { Fade, Loader } from 'core/components'
import { BodyText, Box as BorderBox, Error, HeaderText } from 'core/primitives'
import { theme as customTheme } from 'core/style'
import { selectors as UISelectors } from 'domains/ui'

class App extends Component {
  getChildContext() {
    return {
      router: this.props.router,
    }
  }

  render() {
    const { children, error, isLoading } = this.props

    return (
      <ThemeProvider theme={theme(customTheme)}>
        <View size={['100%', 'auto']}>
          <Main>
            <Header>
              <Position position="fixed" size={['auto', '100%']} zIndex={3}>
                <Box backgroundColor="yellow">
                  {!isLoading && (
                    <BorderBox borderColor="grey" borderWidth={[0, 0, '1px']}>
                      <Box flexDirection="column" padding={['8px']}>
                        <BodyText fontSize={1} padding={[0, 0, '8px']}>
                          Gabrielle & Adrian
                        </BodyText>

                        <BodyText color="grey">30-06-18</BodyText>
                      </Box>

                      <BorderBox
                        align="center"
                        borderWidth={[0, 0, 0, '1px']}
                        flex="none"
                        flexDirection="column"
                        margin={['8px', 0]}
                        padding={[0, '8px', 0]}
                        size={['auto', '130px']}
                      >
                        <HeaderText
                          fontStyle="italic"
                          padding={[0, 0, '4px']}
                          textAlign="right"
                        >
                          California
                        </HeaderText>

                        <HeaderText color="grey" textAlign="right">
                          USA
                        </HeaderText>
                      </BorderBox>
                    </BorderBox>
                  )}

                  <Box flex="none" size={['auto', '100%']}>
                    {error && <Error>{error.message}</Error>}
                  </Box>
                </Box>
              </Position>
            </Header>

            <Position
              position="absolute"
              left={0}
              size={['100%']}
              top={0}
              zIndex={1}
            >
              <Fade appear={true} duration={500} in={isLoading}>
                <Loader />
              </Fade>
            </Position>

            {children}
          </Main>
        </View>
      </ThemeProvider>
    )
  }
}

App.childContextTypes = {
  router: PropTypes.object,
}

export default connect(
  createStructuredSelector({
    error: UISelectors.error,
    isLoading: UISelectors.isLoading,
  })
)(App)
