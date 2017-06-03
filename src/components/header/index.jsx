import { h } from 'preact';
import { Link } from 'preact-router/match';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import Container from '../shared/container';

const Header = styled.header`
  background: ${colors.theme};
  color: ${colors.text.light};
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

const SiteTitle = styled.h1`
  flex: 1 1 0%;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  flex: 0 1 0%;
`;

const StyledLink = styled(Link).attrs({
  activeClassName: btoa(Math.random().toString()),
})`
  padding: 0 4px;
  text-decoration: none;

  &.${props => props.activeClassName} {

  }
`;

export default () => (
  <Header>
    <Container>
      <Flex>
        <SiteTitle>BTCMarkets Ticker</SiteTitle>
        <Nav>
          <StyledLink href="/">Home</StyledLink>
        </Nav>
      </Flex>
    </Container>
  </Header>
);
