import { useState, useEffect } from "react";

const PaginatedComponent = () => {
    
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        setData(jsonData.data);
        setItemsPerPage(jsonData.per_page);
        setTotalPages(Math.ceil(jsonData.total / jsonData.per_page));
      } catch (error) {
        console.error("Error loading Pages", error);
      }
    };

    fetchData();
  }, []);

  const handleNextPage = () => {
    if (currPage < totalPages) {
      setCurrPage(currPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
    }
  };

  const startIdx = (currPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div>
      <h1>Paginated Data</h1>
      <ul>
        {paginatedData.map(item => (
          <li key={item.id}>
            {item.name}: {item.description}
          </li>
        ))}
      </ul>
      <button onClick={handlePrevPage} disabled={currPage === 1}>
        Previous
      </button>
      <button onClick={handleNextPage} disabled={currPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default PaginatedComponent;
