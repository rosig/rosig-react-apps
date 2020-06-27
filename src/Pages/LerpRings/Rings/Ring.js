import React, { useRef, useMemo } from "react";

import { useFrame, useThree } from "react-three-fiber";

import lerp from "lerp"; /*Linear interpolation*/

const Ring = ({ args, color, mouse, t }) => {
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

  let t_aux = 0;

  useFrame(() => {
    if (mesh.current.position.x !== next_x) {
      mesh.current.position.x = lerp(mesh.current.position.x, next_x, t_aux);
      mesh.current.position.y = lerp(mesh.current.position.y, next_y, t_aux);
      t_aux += t;
    }
    mesh.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <ringGeometry attach="geometry" args={args} />
      <meshPhongMaterial attach="material" color={color} />
    </mesh>
  );
};

export default Ring;
