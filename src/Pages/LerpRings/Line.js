import React, { useMemo } from "react";

import * as THREE from "three";

import { useFrame, useThree } from "react-three-fiber";

const Line = ({ mouse }) => {
  const { viewport } = useThree();

  const startP = useMemo(() => new THREE.Vector3(0, 0, 0), []);
  const target = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  const next_x = useMemo(() => mouse.x * (viewport.width / 2), [
    mouse.x,
    viewport.width,
  ]);

  const next_y = useMemo(() => mouse.y * (viewport.height / 2), [
    mouse.y,
    viewport.height,
  ]);

  useFrame(() => {
    if (next_x !== target.x) {
      target.x = next_x;
      target.y = next_y;
    }
    // console.log(target);
  });

  return (
    <line>
      <geometry attach="geometry" vertices={[startP, target]} onUpdate={self => (self.verticesNeedUpdate = true)} />
      <lineBasicMaterial attach="material" color="#F20574" />
    </line>
  );
};

export default Line;
