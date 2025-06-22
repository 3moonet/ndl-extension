import React from "react";

interface ExtensionBaseProps {
  children: React.ReactNode;
}

const ExtensionBase: React.FC<ExtensionBaseProps> = ({ children }) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
      }}
    >
      {children}
    </div>
  );
};

export default ExtensionBase;
