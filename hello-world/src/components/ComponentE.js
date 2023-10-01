import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "../App";

const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      <div>
        ComponentE user: {user} | channel: {channel}
      </div>
      <ComponentF />
    </div>
  );
};

export default ComponentE;
