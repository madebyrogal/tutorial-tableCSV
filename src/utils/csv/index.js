// @flow
import type { ModelTable } from 'model/table'

export function prepareCSVContentFromArray (data: ModelTable): string {
  let csvContent = "data:text/csv;charset=utf-8,"
  
  data.forEach((row) => {
    csvContent += row.join(',') + "\r\n"
  })
  
  return csvContent
}
