
import { useContext } from "react"
import Nav2 from "./Nav2"
import { ThemeDataContext } from "../context/ThemeContext"

const Navbar = () => {

 const data =  useContext(ThemeDataContext)
 console.log(data);
 



  return (
    <div className=" flex items-center justify-between">
        <h2>{data}</h2>
        <Nav2/>
    </div>
  )
}

export default Navbar