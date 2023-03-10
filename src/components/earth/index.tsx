/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { TextureLoader } from 'three';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

import EarthDayMap from '../../assets/cloud.jpg';
import EarthNormalMap from '../../assets/normal_map.jpeg';
import EarthSpecularMap from '../../assets/map.jpeg';
import EarthCloudsMap from '../../assets/earth_clouds_resized.jpg';

const Earth = () => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap],
  );

  const earthRef: any = useRef();
  const cloudsRef: any = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <pointLight color="f6f3ea" position={[2, 0, 5]} intensity={1.2} />
      <Stars
        radius={150}
        depth={60}
        count={8000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          opacity={0.4}
          depthWrite={false}
          transparent={true}
          map={cloudsMap}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        {/* <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        /> */}
      </mesh>
    </>
  );
};

export default Earth;
