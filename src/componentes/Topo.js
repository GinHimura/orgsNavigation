import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import Texto from './Texto';

import topo from '../assets/topo.png';
import { useNavigation } from '@react-navigation/native';
import { Gradiente, Voltar } from './Svgs';

const largura = Dimensions.get('screen').width;
const ALTURA_PADRAO = 270;

export default function Topo({ titulo, imagem = topo, altura = ALTURA_PADRAO, gradiente = true }) {
  const navigation = useNavigation();
  const estilos = funcaoEstilos(altura);

  return (
    <View style={estilos.container}>
      {!!gradiente === true && <Gradiente largura={largura} estilos={estilos} />}
      <Image source={imagem} style={estilos.topo} />
      <Texto style={estilos.titulo}>{titulo}</Texto>
      <TouchableOpacity onPress={() => { navigation.goBack() }} style={estilos.botaoVoltar}>
        <Voltar color="#F1CC2B" style={estilos.voltar} />
      </TouchableOpacity>
    </View>
  );
}

const funcaoEstilos = (altura) => StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: altura,
  },
  topo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: altura,
  },
  gradiente: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 128,
  },
  titulo: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: '#F1CC2B',
    fontWeight: 'bold',
    padding: 16,
    textShadowColor: 'black',  
    textShadowOffset: { width: 1, height: 1 },  
    textShadowRadius: 3,  
  },
  botaoVoltar: {
    position: 'absolute',
    padding: 17,
  },
  voltar: {
    width: 24,
    height: 24, 
  },
});
