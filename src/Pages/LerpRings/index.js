import React, { useState } from "react";
import "./style.css";

import { Canvas } from "react-three-fiber";
import * as THREE from "three";

//Components
import Rings from "./Rings";
import Circle from "./Circle";
import Line from "./Line";

const LerpRings = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    setMouse({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -((e.clientY - 56) / (window.innerHeight - 56)) * 2 + 1
    });
    // if (window.innerWidth > 800) {
    //   setMouse({
    //     x: ((e.clientX - 270) / (window.innerWidth - 270)) * 2 - 1,
    //     y: -((e.clientY - 59.44) / (window.innerHeight - 59.44)) * 2 + 1,
    //   });
    // } else {
    //   setMouse({
    //     x: (e.clientX / window.innerWidth) * 2 - 1,
    //     y: -((e.clientY - 59.44) / (window.innerHeight - 59.44)) * 2 + 1,
    //   });
    // }
  };

  // useEffect(() => {
  //   document.body.style.cursor =
  //     "url('https://raw.githubusercontent.com/chenglou/react-motion/master/demos/demo8-draggable-list/cursor.png') 39 39, auto";
  // }, []);

  return (
    <div className="lerp-rings-container">
      <Canvas
        camera={{ fov: 100, position: [0, 0, 3] }}
        onCreated={({ gl }) => {
          // gl.toneMapping = THREE.Uncharted2ToneMapping;
          gl.setClearColor(new THREE.Color("#424242"));
        }}
        onClick={(e) => handleClick(e)}
      >
        <pointLight
          color={"#ffffff"}
          intensity={1}
          position={[10, 10, 10]}
          decay={1}
        />
        <ambientLight color={"#ffffff"} intensity={1} />
        <Line mouse={mouse} />
        <Rings mouse={mouse} />
        <Circle mouse={mouse} />
      </Canvas>
    </div>
  );
};

export default LerpRings;
