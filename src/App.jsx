import { useTable, useSortBy, usePagination } from 'react-table'


const data = [
  {
    id: 1,
    Product: "Tshirt",
    Price: 230,
    Quantity: 12,
  },
  {
    id: 2,
    Product: "Tshirt",
    Price: 630,
    Quantity: 52,
  },
  {
    id: 3,
    Product: "Tshirt",
    Price: 2320,
    Quantity: 121,
  }, {
    id: 4,
    Product: "Tshirt",
    Price: 30,
    Quantity: 2,
  },
  {
    id: 5,
    Product: "Tshirt",
    Price: 2130,
    Quantity: 102,
  },  {
    id: 6,
    Product: "Tshirt",
    Price: 2130,
    Quantity: 102,
  },
  {
    id: 7,
    Product: "Tshirt",
    Price: 2130,
    Quantity: 102,
  },
  {
    id: 8,
    Product: "Tshirt",
    Price: 2130,
    Quantity: 102,
  },
  {
    id: 9,
    Product: "Tshirt",
    Price: 2130,
    Quantity: 102,
  },
  {
    id: 10,
    Product: "Tshirt",
    Price: 2130,
    Quantity: 102,
  },
  {
    id: 11,
    Product: "Tshirt",
    Price: 2130,
    Quantity: 102,
  },
  {
    id: 12,
    Product: "Tshirt",
    Price: 2130,
    Quantity: 102,
  }
]

const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Product",
    accessor: "Product",
  },
  {
    Header: "Price",
    accessor: "Price",
  },
  {
    Header: "Quantity",
    accessor: "Quantity",
  },
]

function App() {

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, nextPage, previousPage, canPreviousPage, canNextPage, state:{pageIndex}, pageCount, gotoPage } = useTable({
    columns,
    data,
    initialState: {pageSize: 5}
  }, useSortBy,usePagination
  )

    // Custom function to render page numbers
// Custom function to render page numbers
// Custom function to render page numbers
const renderPageNumbers = () => {
  const pages = [];

  // Always add the first page
  pages.push(
    <button
      key={0}
      onClick={() => gotoPage(0)}
      style={{
        fontWeight: pageIndex === 0 ? 'bold' : 'normal',
        color: pageIndex === 0 ? 'blue' : 'black',
      }}
    >
      1
    </button>
  );

  // Determine start and end range for intermediate pages
  let startPage = Math.max(pageIndex - 1, 1);
  let endPage = Math.min(pageIndex + 1, pageCount - 2);

  // Optionally, add ellipsis or a specific button for skipping
  if (startPage > 1) {
    pages.push(<span key="left-ellipsis">...</span>);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => gotoPage(i)}
        style={{
          fontWeight: pageIndex === i ? 'bold' : 'normal',
          color: pageIndex === i ? 'blue' : 'black',
        }}
      >
        {i + 1}
      </button>
    );
  }

  // Optionally, add ellipsis or a specific button for skipping
  if (endPage < pageCount - 2) {
    pages.push(<span key="right-ellipsis">...</span>);
  }

  // Always add the last page
  if (pageCount > 1) {
    pages.push(
      <button
        key={pageCount - 1}
        onClick={() => gotoPage(pageCount - 1)}
        style={{
          fontWeight: pageIndex === pageCount - 1 ? 'bold' : 'normal',
          color: pageIndex === pageCount - 1 ? 'blue' : 'black',
        }}
      >
        {pageCount}
      </button>
    );
  }

  return pages;
};



  return (
    <>
      <div className='container'>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((hg, id) => (
              <tr key={id} {...hg.getHeaderGroupProps()}>
                {hg.headers.map((column, id) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())} key={id}>{column.render("Header")}
                  {column.isSorted && (
                    <span>{column.isSortedDesc ? "D" : "A"}</span>
                  )}
                  </th>
                ))}
              </tr>
            ))}
            {/* <tr>
                  <th></th>
               </tr> */}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, id) => {
              prepareRow(row)

              return (
                <tr key={id} {...row.getRowProps()}>
                  {row.cells.map((cell, id) => {
                    return <td key={id} {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className='btn-container'>
          <button disabled={!canPreviousPage} onClick={previousPage}>Prev</button>
          <span>
          {renderPageNumbers()}
          </span>
          <button disabled={!canNextPage} onClick={nextPage}>Next</button>
        </div>
      </div>
    </>
  )
}

export default App
