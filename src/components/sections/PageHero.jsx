import React from 'react';
import PropTypes from 'prop-types';

function PageHero({ eyebrow, title, description, supportingText }) {
  return (
    <section className="page-hero section-spacing">
      <div className="container narrow">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="page-title">{title}</h1>
        <p className="page-description">{description}</p>
        {supportingText && <p className="page-supporting-text">{supportingText}</p>}
      </div>
    </section>
  );
}

PageHero.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  supportingText: PropTypes.string,
};

PageHero.defaultProps = {
  eyebrow: '',
  supportingText: '',
};

export default PageHero;
