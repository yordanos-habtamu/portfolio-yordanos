import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';

const HeroOrb = (props) => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.2;
            meshRef.current.rotation.x += delta * 0.1;
        }
    });

    return (
        <group {...props} dispose={null}>
            <Float floatIntensity={2} rotationIntensity={1} speed={2}>
                <mesh ref={meshRef} scale={20.5}>
                    <icosahedronGeometry args={[1, 15]} />
                    <meshStandardMaterial
                        color="#2be249ff"
                        emissive="#36d651ff"
                        emissiveIntensity={2}
                        roughness={0.1}
                        metalness={0.5}
                    />
                </mesh>

                <Sparkles
                    count={100}
                    scale={6}
                    size={4}
                    speed={0.4}
                    opacity={0.5}
                    color="#4dee55ff"
                />
            </Float>
        </group>
    );
};

export default HeroOrb;
