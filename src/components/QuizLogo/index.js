import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <img src="/img/queenzz-final.png"></img>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  position: absolute;
    z-index: 10;
    width: 250px;
    margin-left: 62px;
    top: 18px;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;