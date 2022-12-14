import { ChakraProvider } from "@chakra-ui/react";
import { GlobalContext } from './contexts/GlobalContext';
import axios from "axios";
import { useEffect, useState } from "react";
import HomePage from "../src/HomePage/HomePage";



function App() {
  const [users, setUsers] = useState([])



  const getAllUsers = ()=>{
  axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`, { headers: { Authorization: "aureana-santos-ammal" } })
    .then((resposta) => {
      console.log(resposta.data)
      setUsers(resposta.data)
    })
    .catch((error) => {
      console.log(error)
        })
      }
  useEffect(() => {
    getAllUsers()
  }, []);

  const context = { users, setUsers }

  return (

    <ChakraProvider>
      <GlobalContext.Provider value={context} >
        <HomePage />

      </GlobalContext.Provider>
    </ChakraProvider>


  );
}

export default App;
