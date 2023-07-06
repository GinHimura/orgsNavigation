import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Produtor from './componentes/Produtor';
import Topo from './componentes/Topo';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';
import LottieView from 'lottie-react-native'

export default function Produtores({ melhoresProdutores }) {
  const navigation = useNavigation();
  const route = useRoute();
  const [exibeMensagem, setExibeMensagem] = useState();

  
  const lista = useProdutores(melhoresProdutores);
  const { tituloProdutores, mensagemCompra } = useTextos();
  
  const nomeCompra = route.params?.compra.nome;
  const timestampCompra = route.params?.compra.timestamp;
  const mensagemCompleta = mensagemCompra?.replace('$NOME,', nomeCompra);

  const animation = useRef(null);

  useEffect(() => {
    setExibeMensagem(!!nomeCompra)
    let timeout;

    if (nomeCompra) {
      timeout = setTimeout(() => {
        setExibeMensagem(false);
      }, 3900);
    }

    return () => clearTimeout(timeout);
  }, [timestampCompra]);
  
  const TopoLista = () => {
    return <>
      <Topo melhoresProdutores={ melhoresProdutores } />
      { exibeMensagem 
      && <Text style={ estilos.compra }>{ mensagemCompleta }</Text>}
      { exibeMensagem && <LottieView
      source={require('../../assets/banana_compra.json')} 
      style={estilos.animacao}
      ref={animation}
      autoPlay={true}
      />}
      <Text style={ estilos.titulo }>{ tituloProdutores }</Text>
    </>
  }

  return <>
  <FlatList 
    data={lista}
    renderItem={
      ({ item }) => <Produtor 
        {...item} 
        aoPressionar={() => {
          navigation.navigate('Produtor', item);
        }} />
    }
    keyExtractor={({ nome }) => nome}
    ListHeaderComponent={TopoLista}
    style={estilos.lista} />
</>
}


const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  compra: {
    backgroundColor: '#F1CC2B',
    padding: 16,
    color: '#000000',
    fontSize: 16,
    lineHeight: 26
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
  animacao: {
    position:'relative', 
    height:250, 
    marginHorizontal: 43
  },
})