import React, { useRef, useMemo } from "react";

import { useFrame, useThree } from "react-three-fiber";

const Circle = ({ mouse }) => {
  const material = useRef();
  const mesh = useRef();
  const { viewport } = useThree();

  const next_x = useMemo(() => mouse.x * (viewport.width / 2), [
    mouse.x,
    viewport.width,
  ]);

  const next_y = useMemo(() => mouse.y * (viewport.height / 2), [
    mouse.y,
    viewport.height,
  ]);

  let i = 0;

  useFrame(() => {
    mesh.current.position.x = next_x;
    mesh.current.position.y = next_y;

    if (i > 0 && i < 10) {
      material.current.visible = true;
    } else if (i > 10) {
      material.current.visible = false;
      i = -10;
    }
    i++;
  });

  return (
    <mesh ref={mesh}>
      <circleGeometry attach="geometry" args={[0.1, 20]} />
      <meshPhongMaterial ref={material} attach="material" color={"#F20574"} />
    </mesh>
  );
};

export default Circle;
