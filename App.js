import { StyleSheet, Text, View, Image } from "react-native";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.livro} source={{ uri: props.livro.capa }} />
      <Text style={{ color: "black" }}> {props.livro.titulo} </Text>
      <Text style={{ fontSize: 12 }}> Gênero: {props.livro.genero}</Text>
    </View>
  );
}

export default function App() {
  const livros = [
    {
      capa: "https://img.melhoresfilmes.com.br/unsafe/320x480/https%3A%2F%2Fwww.melhoresfilmes.com.br%2Fstorage%2Fimgs%2Fposters%2F39711.jpg%3Ft%3D20230110104349",
      titulo: 'A Baleia',
      genero: 'Drama',
    },
    {
      capa: "https://img.melhoresfilmes.com.br/unsafe/320x480/https%3A%2F%2Fwww.melhoresfilmes.com.br%2Fstorage%2Fimgs%2Fposters%2F37378.jpg%3Ft%3D20230304142723",
      titulo: 'Top Gun Maverick',
      genero: 'Ação',
    },
    {
      capa: "https://lumiere-a.akamaihd.net/v1/images/encanto_ka_bpo_pay1_ee2c2e0c.jpeg",
      titulo: 'Encanto',
      genero: 'Desenho',
    },
    {
      capa: "https://livretvnoticias.com.br/hf-conteudo/uploads/posts/2022/12/52383_ff1c4447632be7657efe4f06a8b0658c.jpg",
      titulo: 'Terrifer',
      genero: 'Terror',
    },
    {
      capa: "https://bibliotecaucs.files.wordpress.com/2019/06/como-eu-era-antes-de-vocc3aa.jpg",
      titulo: 'Como eu era antes de você',
      genero: 'Romance',
    },
  ];
  return (
    <View>
      <View style={styles.texto}>
      <Text >Olá Querido</Text>
      </View>
      <View style={styles.conteudo}>
        { livros.map(livro => <Card livro={livro} />)}
      </View>
    </View>
  )
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  card: {
   backgroundColor: 'gray',
   width: '40%',
   height: 170,
   borderRadius: 10,
   margin: 20,
    },
  livro: {
    resizeMode: 'stretch',
    width: '100%',
    height: 140,
    borderRadius: 10,
  },
  texto: {
    justifyContent: "center",
    alignItems: 'center',
    fontSize: 100, 
    fontWeigth: 'bold',
    paddingTop: "20%"
  },
});