import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
import { useState } from "react";


function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.filme} source={{ uri: props.filme.capa }} />
      <Text style={{ color: "white" }}> {props.filme.titulo} </Text>
      <Text style={{ fontSize: 12, color: 'white' }}> Gênero: {props.filme.genero}</Text>
      <Button title="Remover" onPress={props.onPress} />
    </View>
  );
}

export default function App() {


  const [Filmes, setFilmes] = useState([
    {
      id: '1',
      capa: "https://img.melhoresfilmes.com.br/unsafe/320x480/https%3A%2F%2Fwww.melhoresfilmes.com.br%2Fstorage%2Fimgs%2Fposters%2F39711.jpg%3Ft%3D20230110104349",
      titulo: "A Baleia",
      genero: "Drama",
    },
    {
      id: '2',
      capa: "https://img.melhoresfilmes.com.br/unsafe/320x480/https%3A%2F%2Fwww.melhoresfilmes.com.br%2Fstorage%2Fimgs%2Fposters%2F37378.jpg%3Ft%3D20230304142723",
      titulo: "Top Gun Maverick",
      genero: "Ação",
    },
    {
      id: '3',
      capa: "https://lumiere-a.akamaihd.net/v1/images/encanto_ka_bpo_pay1_ee2c2e0c.jpeg",
      titulo: "Encanto",
      genero: "Desenho",
    },
    {
      id: '4',
      capa: "https://livretvnoticias.com.br/hf-conteudo/uploads/posts/2022/12/52383_ff1c4447632be7657efe4f06a8b0658c.jpg",
      titulo: "Terrifer",
      genero: "Terror",
    },
    {
      id: '5',
      capa: "https://cdnim.prd.cineticket.com.br/asset/movie/7934/creed-iii-poster-desktop-4872c.jpg",
      titulo: "Creed III",
      genero: "Luta",
    },
    {
      id: '6',
      capa: "https://cdnim.prd.cineticket.com.br/asset/movie/7971/panico-vi-poster-desktop-4947c.jpg",
      titulo: "Pânico VI",
      genero: "Suspense",
    },
  ]);

  function deleteObject(id) {
    setFilmes(Filmes => Filmes.filter(filme => filme.id !== id));
  }

  return (
    <View>
      <View style={styles.texto}>
        <Text>Os Melhores Filmes da Atualidade</Text>
      </View>
      <View style={styles.conteudo}>
        {Filmes.map((filme) => (
          <Card filme={filme} onPress={() => {
            deleteObject(filme.id)
          }} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0",
    alignItems: "center",
    paddingTop: 20,
    justifyContent: "center",
  },
  conteudo: {
    flex: 1,
    backgroundColor: "#ccc",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  card: {
    backgroundColor: "#0284c7",
    width: "40%",
    height: 200,
    borderRadius: 10,
    margin: 20,
  },
  filme: {
    resizeMode: "stretch",
    width: "100%",
    height: 140,
    borderRadius: 10,
  },
  texto: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "20%",
  },
});
