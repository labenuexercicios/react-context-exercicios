import Cards from "../components/Cards";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";


const HomePage=()=>{
 
    const context= useContext(GlobalContext)
    const {users} = context

 return(
     <>
  {users.map((user)=>{
    return <Cards user={user}
    key={user.id}
    />
   
  })}
   </>
 );
}
export default HomePage;