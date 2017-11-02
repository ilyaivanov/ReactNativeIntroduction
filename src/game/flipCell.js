export default (rows, rowIndex, columnIndex) => {
  const newRows = rows.map(row => row.slice()).slice();

  newRows[rowIndex][columnIndex] = newRows[rowIndex][columnIndex] ? 0 : 1;

  if (rowIndex > 0)
    newRows[rowIndex - 1][columnIndex] = newRows[rowIndex - 1][columnIndex] ? 0 : 1;

  if (columnIndex > 0)
    newRows[rowIndex][columnIndex - 1] = newRows[rowIndex][columnIndex - 1] ? 0 : 1;

  if (columnIndex < newRows[rowIndex].length - 1)
    newRows[rowIndex][columnIndex + 1] = newRows[rowIndex][columnIndex + 1] ? 0 : 1;

  if (rowIndex < newRows.length - 1)
    newRows[rowIndex + 1][columnIndex] = newRows[rowIndex + 1][columnIndex] ? 0 : 1;
  return newRows;
}