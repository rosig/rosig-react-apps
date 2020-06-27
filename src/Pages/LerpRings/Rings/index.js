import React from "react";
import Ring from "./Ring";

const Rings = ({ mouse }) => {
  return (
    <group>
      <Ring args={[0.8, 1.0, 10]} color={"#000429"} mouse={mouse} t={0.05} />
      <Ring args={[0.6, 0.8, 10]} color={"#060940"} mouse={mouse} t={0.02} />
      <Ring args={[0.4, 0.6, 10]} color={"#2B1773"} mouse={mouse} t={0.01} />
      <Ring args={[0.2, 0.4, 10]} color={"#7D52D9"} mouse={mouse} t={0.005} />
    </group>
  );
};

export default Rings;
