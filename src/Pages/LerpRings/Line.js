import React, { useMemo, useRef } from "react";

import * as THREE from "three";

import { useFrame, useThree } from "react-three-fiber";

const Line = ({ mouse }) => {
	const { viewport } = useThree();
	const lineRef = useRef();

	const startP = useMemo(() => new THREE.Vector3(0, 0, 0), []);
	const target = useMemo(() => new THREE.Vector3(0, 0, 0), []);

	const next_x = useMemo(
		() => mouse.x * (viewport.width / 2),
		[mouse.x, viewport.width]
	);

	const next_y = useMemo(
		() => mouse.y * (viewport.height / 2),
		[mouse.y, viewport.height]
	);

	const lineGeometry = new THREE.BufferGeometry().setFromPoints([
		startP,
		target,
	]);

	useFrame(() => {
		if (next_x !== target.x) {
			target.x = next_x;
			target.y = next_y;
		}

		lineGeometry.setFromPoints([startP, target]);
	});

	return (
		<line>
			<line geometry={lineGeometry} ref={lineRef}>
				<lineBasicMaterial attach="material" color="#F20574" />
			</line>
		</line>
	);
};

export default Line;
