import { FontSizes } from "@fluentui/react";
import React = require("react");

const titleStyles: React.CSSProperties = {
  fontWeight: 600,
  fontSize: FontSizes.size42,
};

const Title = () => {
  return (
    <div>
      <h1 style={titleStyles}>Weather Forecast App</h1>
    </div>
  );
};

export default Title;
