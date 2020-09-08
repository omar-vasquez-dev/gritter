import React from "react";

function ComponentTwo(props) {
  const [active, updateState] = React.useState(false);

  const handleChangeStatus = () => {
    updateState(!active);
  };

  return (
    <h1
      style={{
        color: active ? "green" : "gray",
      }}
      onClick={handleChangeStatus}
    >
      Hello world 2 :{props.name}
    </h1>
  );
}

export default ComponentTwo;
