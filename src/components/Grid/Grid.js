import "./Grid.css";

function  Grid({ data }) {
  return (
    <table className="gridTable table-group-divider table-bordered">
      <thead>
        <tr>
          {data && data?.header?.map((colName) => <th key={colName.header}>{colName.header}</th>)}
          {data && data?.actions?.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data?.rowData?.map((row, index) => (
          <tr key={index}>
            {data?.header?.map((colName) => {
              if (
                colName.accessor === "films" ||
                colName.accessor === "residents" ||
                colName.dataType === "object"
              ) {
                return <td key={colName.header}>{row[colName.accessor].length}</td>;
              }
              return (
                //right now all data in string when we get type = number it automatically align right
                <td className={colName.dataType === "number" ? "text-end" : ""} key={colName.header}>
                  {row[colName.accessor]}
                </td>
              );
            })}
            {!!data?.actions?.length && (
              <td className="gridActions">
                {data?.actions?.map(({ label, action },index) => (
                  <button className="btn btn-secondary m-1" onClick={() => action(row)} key={index}>
                    {label}
                  </button>
                ))}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Grid;
