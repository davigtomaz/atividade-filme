import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";


function Card(props) {
  const RemoveButton = ({ onPress,}) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text>Remover</Text>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.card}>
      <Image style={styles.filme} source={{ uri: props.filme.capa }} />
      <Text style={{ color: "black" }}> {props.filme.titulo} </Text>
      <Text style={{ fontSize: 12 }}> Gênero: {props.filme.genero}</Text>
      <RemoveButton onPress={props.removerID}/>
    </View>
  );
}

export default function App() {
  const Filmes = [
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
      capa: "https://bibliotecaucs.files.wordpress.com/2019/06/como-eu-era-antes-de-vocc3aa.jpg",
      titulo: "Como eu era antes de você",
      genero: "Romance",
    },
    { 
      id: '6',
      capa: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThhjAv6Y9BKKrJyczESuQQwW7MSBJbWuWtUiN3e5MgEv5op-ZF",
      titulo: "A Queda",
      genero: "Suspense",
    },
  ];

  function removerID(id){
    const index = Filmes.indexOf( id === id);
    if (index !== -1){
      Filmes.splice(index, 1);
    }
    // return Filmes;
  }

   // funcao para remover da lista....
  // find no lista pelo ID
  // splice para remover o elemento

  return (
    <View>
      <View style={styles.texto}>
        <Text>Os Melhores Filmes da Atualidade</Text>
      </View>
      <View style={styles.conteudo}>
        {Filmes.map((filme) => (
          <Card filme={filme} removerID={() => removerID(filme.id)}/>
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
    backgroundColor: "gray",
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
    fontSize: 100,
    fontWeigth: "bold",
    paddingTop: "20%",
  },
});
