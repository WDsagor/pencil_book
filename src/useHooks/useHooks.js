import  { useEffect, useState } from "react";

const AllItem = () => {
    const [items, setItems] = useState([]);

    useEffect ( () => {
        fetch("https://stark-dusk-04607.herokuapp.com/inventory")
        .then(res => res.json())
        .then(data => setItems(data));
    }, [])
    return [items, setItems];
}
export default AllItem;