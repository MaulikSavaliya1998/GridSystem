export const generateCustomTable = (data, getFilmsData, getResidentsData, showDetails, level) => {
  if (data.length) {
    let columns = []
    for (const [key, value] of Object.entries(data[0])) {
      if (key !== "created" && key !== "edited" && key !== "url") {
        columns.push({
          header: key,
          accessor: key,
          dataType: typeof value,
        })
      }
    }
    const tempData = {
      header: columns,
      rowData: data,
      actions: [
        {
          label: "Go to Films",
          action: (row) => {
            if (row.films) {
              getFilmsData(row.films)
            }
          },
        },
        {
          label: "Go to Residents",
          action: (row) => {
            if (row.residents) {
              getResidentsData(row.residents)
            }
          },
        },
        {
          label: "Show Details",
          action: (row) => {
            showDetails(row)
          },
        },
      ],
    }
    const actionLevelTwo = {
      header: columns,
      rowData: data,
      actions: [
        {
          label: "Show Details",
          action: (row) => {
            showDetails(row)
          },
        },
      ],
    }

    const tableState = []
    if(level === 'Level2') {
      tableState?.push(actionLevelTwo) 
    } else {
      tableState?.push(tempData)
    }
    return tableState
  }
}
