import { FontSizes } from "@fluentui/react";
import React = require("react");

const titleStyles: React.CSSProperties = {
  fontWeight: 600,
  fontSize: FontSizes.size42,
};

interface isApiOn {
  apiOn: boolean;
}

export const Title = (props: isApiOn) => {
  return (
    <div>
      <h1 style={titleStyles}>
        {!props.apiOn ? "Weather Forecast App API ON" : "Weather Forecast App"}
      </h1>
    </div>
  );
};
