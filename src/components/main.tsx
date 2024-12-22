import { useEffect, useState } from "react"
import Menubar from "./Menubar"
import Home from "./Home"
import Footer from "./Footer"
import Navbar from "../layout/Header"



function Main () {

    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    },[])

    return(
        <>
        <Navbar setSearch={setSearch}/>
        <Menubar />
        <Home prod={products} search={search}/>
        <Footer />
        </>
    )
}

export default Main