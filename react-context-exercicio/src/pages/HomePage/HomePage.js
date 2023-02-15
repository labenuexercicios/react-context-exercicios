import { useContext } from "react"
import Card from "../../components/Card"
import { GlobalContext } from "../../contexts/GlobalContext"
import { Flex } from "@chakra-ui/react"

export const HomePage = () => {
    const context = useContext(GlobalContext);
    const { users } = context;

    return (
        <Flex gap={"16px"} wrap={"wrap"} justify={"center"}>

            {users.map((user) => {
            return <Card key={user.id} user={user} />})}
            {/* <Card/> */}

        </Flex>
    )
}