import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { navigation } from '../../content/siteContent';

function Layout({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <NavLink exact to="/" className="brand-mark" aria-label="Go to homepage">
            HF
          </NavLink>
          <nav className="site-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                exact={item.path === '/'}
                to={item.path}
                className="nav-link"
                activeClassName="nav-link-active"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="footer-title">Software Quality Assurance Engineer</p>
          <p className="footer-copy">
            Building release confidence through business invariants, risk clarity, and
            enterprise workflow validation.
          </p>
        </div>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
