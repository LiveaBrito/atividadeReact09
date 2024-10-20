function Nivel(props){

    //Usando a função do if ternário em que o  valor de 'props' é usado para decidir qual valor será retornado dentro da tag <Nivel/> no  arquivo App.jsx

    return <h1>{props.nivelUsuario == "iniciante"? "Bem-Vindo, iniciante!" : props.nivelUsuario== "intermediario"? "Você está progredindo" : "Parabéns, especialista!"}</h1>

}

export default Nivel