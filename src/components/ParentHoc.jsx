import React, { useState } from "react";

const ParentHoc = (Parent) => {
  const EnhancedParent = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
      setCount(count + 1);
    };

    return <Parent counter={count} handleCounter={handleCount} />;
  };

  return EnhancedParent;
};

export default ParentHoc;
