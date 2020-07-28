import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import RenderCustomComponent from "./RenderCustomComponent";
const App = () => {
  const [tableData, setTableData] = useState();

  useEffect(() => {
    axios.get("http://localhost:3010/shipments").then((res) => {
      if (res.status === 200) {
        console.log(res);
        setTableData(res.data);
      }
    });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Data",
        columns: [
          {
            Header: "Id",
            accessor: "id",
          },
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Cargo",
            accessor: "cargo",
            Cell: ({ cell: { value } }) => (
              <RenderCustomComponent values={value} />
            ),
          },
          {
            Header: "Mode",
            accessor: "mode",
          },
          {
            Header: "Type",
            accessor: "type",
          },
          {
            Header: "Destination",
            accessor: "destination",
          },
          {
            Header: "Origin",
            accessor: "origin",
          },
          {
            Header: "Services",
            accessor: "services",
            Cell: ({ cell: { value } }) => (
              <RenderCustomComponent values={value} />
            ),
          },
          {
            Header: "Total",
            accessor: "total",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "User Id",
            accessor: "userId",
          },
        ],
      },
    ],
    []
  );

  //const data = React.useMemo(() => getData(), []);

  return tableData ? <Table columns={columns} data={tableData} /> : null;
};

export default App;
