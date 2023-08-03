import { GlobalContext } from "./contexts/GlobalContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { HomePage } from "./pages/HomePage/HomePage";
import { ChakraProvider, Flex } from "@chakra-ui/react"


function App() {
  const [users, setUsers] = useState([]);

  const addUsers = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "rafael-machado-barbosa"
      }
    })
      .then((res) => {
        console.log(res.data)
        setUsers(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    addUsers()
  }, []);

  const context = {
    users,
    setUsers,
    addUsers,
  }

  return (
    <ChakraProvider resetCSS>
      <GlobalContext.Provider value={context}>
        <Flex justify={"center"}>
          <HomePage />
        </Flex>
      </GlobalContext.Provider>
    </ChakraProvider>
  );
}

export default App;


