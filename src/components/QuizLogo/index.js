import styled from "styled-components";

import React from "react";
import PropTypes from "prop-types";

function Logo({ className }) {
  return (
    <img
      className={className}
      viewBox="0 0 135 67"
      src="/img/queenzz-final.png"
    ></img>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  position: absolute;
  z-index: 10;
  height: 98px;
  margin-left: 52px;
  top: 40px;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;