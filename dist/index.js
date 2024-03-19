import * as React from 'react';

const SimpleLogin = ({
  children,
  onClick
}) => {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      padding: "10px 20px",
      fontSize: "1.2em",
      borderRadius: "5px",
      cursor: "pointer",
      backgroundColor: "blue",
      color: "white",
      border: "none"
    }
  }, children);
};

var SimpleLogin$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SimpleLogin: SimpleLogin
});

export { SimpleLogin$1 as SimpleLogin };
