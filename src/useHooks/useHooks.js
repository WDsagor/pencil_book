import { useEffect, useState } from "react";
// import axios from "axios";
// import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const AllItem = () => {
  const [items, setItems] = useState([]);
  const [itemLoading, setItemLoading] = useState(true);
  //     const { isLoading, error, data, isFetching } = useQuery("repoData", () =>axios.get("https://pencilbookserver.up.railway.app/inventory"
  //     ).then((res) => setItems(res.data))
  //   );

  useEffect(() => {
    fetch("https://pencilbookserver.up.railway.app/inventory", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setItemLoading(false);
      });
  }, []);
  return [items, setItems, itemLoading];
};
export default AllItem;
