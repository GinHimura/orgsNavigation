import bananinha from '../assets/produtores/bananinha.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

import aspargos from '../assets/verduras/Aspargos.png';
import tomate from '../assets/verduras/Tomate.png';
import brocolis from '../assets/verduras/Brócolis.png';
import batata from '../assets/verduras/Batata.png';
import banana_nanica from '../assets/verduras/banana_nanica.png'
import pepino from '../assets/verduras/Pepino.png';
import abobora from '../assets/verduras/Abóbora.png';
import cenoura from '../assets/verduras/Cenouras.png';
import cenoura2 from '../assets/verduras/Cenouras2.png';
import verduras from '../assets/verduras/Verduras.png';
import bolonanica from '../assets/verduras/bolonanica.png';
import banana_prata from '../assets/verduras/banana_prata.png';
import smoothienanica from '../assets/verduras/smoothienanica.png';
import banana_maca from '../assets/verduras/Banana_Maca.png';
import sorvete_banana from '../assets/verduras/sorvete_banana.png';
import banana_terra from '../assets/verduras/banana_terra.png';
import banana_frita from '../assets/verduras/banana_frita.png';

const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = {
  lista: [
    {
      nome: "Bananinha Enterprise",
      imagem: bananinha,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: "Banana Nanica",
            descricao: "Uma cesta com as bananas mais queridinhas do pedaço! As bananas nanicas são pequenas, mas cheias de sabor e diversão. Perfeitas para lanches e receitas deliciosas!",
            preco: "R$ 20,00",
            imagem: banana_nanica
          },
          itens: [
            {
              nome: "Banana Nanica",
              imagem: banana_nanica,
            },
            {
              nome: "Bolo de Banana Nanica",
              imagem: bolonanica,
            },
          ]
        },
        {
          detalhes: {
            nome: "Banana Prata",
            descricao: "Uma cesta com bananas pratas brilhantes e irresistíveis! As bananas pratas são famosas pela sua textura macia e sabor adocicado. Ideal para fazer vitaminas e sobremesas deliciosas!",
            preco: "R$ 25,00",

            imagem: banana_prata
          },
          itens: [
            {
              nome: "Banana Prata",
              imagem: banana_prata,
            },
            {
              nome: "Smoothie de Banana",
              imagem: smoothienanica,
            },
          ]
        },
        {
          detalhes: {
            nome: "Banana Maçã",
            descricao: "Uma cesta com as bananas mais charmosas e crocantes! As bananas maçã têm uma textura firme e um sabor levemente ácido, semelhante ao da maçã. Perfeitas para comer in natura ou adicionar em saladas!",
            preco: "R$ 30,00",

            imagem: banana_maca
          },
          itens: [
            {
              nome: "Banana Maçã",
              imagem: banana_maca,
            },
            {
              nome: "Sorvete de Banana",
              imagem: sorvete_banana,
            },
          ]
        },
        {
          detalhes: {
            nome: "Banana da Terra",
            descricao: "Uma cesta com as bananas mais rústicas e saborosas! As bananas da terra são ideais para preparar pratos tradicionais e receitas típicas. Sua textura firme e sabor marcante vão encantar seu paladar!",
            preco: "R$ 35,00",

            imagem: banana_terra
          },
          itens: [
            {
              nome: "Banana da Terra",
              imagem: banana_terra,
            },
            {
              nome: "Banana Frita",
              imagem: banana_frita,
            },
          ]
        }
      ]
    },
    {
      nome: "Bananinha Salad",
      imagem: salad,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: "Salada completa",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",

            imagem: verduras
          },
          itens: [
            {
              nome: "Tomate",
              imagem: tomate,
            },
            {
              nome: "Brócolis",
              imagem: brocolis,
            },
            {
              nome: "Pepino",
              imagem: pepino,
            },
          ]
        },
        {
          detalhes: {
            nome: "Tomate e pepino",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",

            imagem: tomate
          },
          itens: [
            {
              nome: "Tomate",
              imagem: tomate,
            },
            {
              nome: "Pepino",
              imagem: pepino,
            },
          ]
        }
      ]
    },
    {
      nome: "Banana Farm",
      imagem: jennyJack,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: "Muita Batata",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",

            imagem: batata
          },
          itens: [
            {
              nome: "Batata",
              imagem: batata,
            },
          ]
        },
        {
          detalhes: {
            nome: "Tomate e Brócolis",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",

            imagem: brocolis
          },
          itens: [
            {
              nome: "Tomate",
              imagem: tomate,
            },
            {
              nome: "Brócolis",
              imagem: brocolis,
            },
          ]
        }
      ]
    },
    {
      nome: "Banana Tagrine",
      imagem: grow,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: "Abobora e Aspargos",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",

            imagem: aspargos
          },
          itens: [
            {
              nome: "Abóbora",
              imagem: abobora,
            },
            {
              nome: "Aspargos",
              imagem: aspargos,
            }
          ]
        },
        {
          detalhes: {
            nome: "Tomate e Abobora",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",

            imagem: abobora
          },
          itens: [
            {
              nome: "Tomate",
              imagem: tomate,
            },
            {
              nome: "Abóbora",
              imagem: abobora,
            }
          ]
        }
      ]
    },
    {
      nome: "Bananatree",
      imagem: potager,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: "Pepinos",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",

            imagem: pepino
          },
          itens: [
            {
              nome: "Pepino",
              imagem: pepino,
            },
          ]
        },
        {
          detalhes: {
            nome: "Brócolis, Aspargos e Cenoura",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",

            imagem: cenoura2
          },
          itens: [
            {
              nome: "Brócolis",
              imagem: brocolis,
            },
            {
              nome: "Aspargos",
              imagem: aspargos,
            },
            {
              nome: "Cenoura",
              imagem: cenoura,
            }
          ]
        }
      ]
    }
  ]
};

export default produtores;