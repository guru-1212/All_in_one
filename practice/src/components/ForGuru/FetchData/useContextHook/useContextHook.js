import React, { useContext } from "react";
import { Data } from "../../context/DataProvider";
const UseContextHook = () => {
  const given_value = useContext(Data);
  return (
    <>
      <h4>Getting values from Guru component using useContext {given_value}</h4>
      {/* <button onClick={given_value}>Click here</button> */}
    </>
  );
};

export default UseContextHook;
