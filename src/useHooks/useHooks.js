import  { useEffect, useState } from "react";
// import axios from "axios";
// import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const AllItem = () => {
    const [items, setItems] = useState([]);
    const [itemLoading, setItemLoading ] = useState(true)
//     const { isLoading, error, data, isFetching } = useQuery("repoData", () =>axios.get("https://stark-dusk-04607.herokuapp.com/inventory"
//     ).then((res) => setItems(res.data))
//   );

    useEffect ( () => {
        fetch("https://stark-dusk-04607.herokuapp.com/inventory")
        .then(res => res.json())
        .then(data => {
            setItems(data)
            setItemLoading(false)
        });
    }, [])
    return [items, setItems, itemLoading];
}
export default AllItem;