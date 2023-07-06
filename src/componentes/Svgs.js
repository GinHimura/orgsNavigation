import React from 'react';
import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const Gradiente = ({ largura, estilos }) => (
    <Svg width={largura} height={128} viewBox="0 0 360 128" style={estilos.gradiente}>
      <Defs>
        <LinearGradient id="gradiente" x1="180" y1="0" x2="180" y2="128" gradientUnits="userSpaceOnUse">
          <Stop offset="0%" stopOpacity={0.6} />
          <Stop offset="100%" stopOpacity={0} />
        </LinearGradient>
      </Defs>
      <Path d="M0 0H360V116C360 122.627 354.627 128 348 128H12C5.37259 128 0 122.627 0 116V0Z" fill="url(#gradiente)" />
    </Svg>
);

const Voltar = ({ color, style }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={style}>
    <Path fillRule="evenodd" clipRule="evenodd" d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill={color} />
    <Path fillRule="evenodd" clipRule="evenodd" d="M12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L6.41421 12L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289Z" fill={color} />
  </Svg>
);


export { Gradiente, Voltar }