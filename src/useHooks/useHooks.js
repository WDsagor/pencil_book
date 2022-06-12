import  { useEffect, useState } from "react";
// import axios from "axios";
// import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const AllItem = () => {
    const [items, setItems] = useState([]);
//     const { isLoading, error, data, isFetching } = useQuery("repoData", () =>axios.get("https://stark-dusk-04607.herokuapp.com/inventory"
//     ).then((res) => setItems(res.data))
//   );

    useEffect ( () => {
        fetch("https://stark-dusk-04607.herokuapp.com/inventory")
        .then(res => res.json())
        .then(data => setItems(data));
    }, [])
    return [items, setItems];
}
export default AllItem;