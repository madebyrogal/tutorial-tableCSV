import type { ModelTable } from 'model/table'
import { prepareCSVContentFromArray } from './index'

describe('Utils csv', () => {
  const csvContentStart = 'data:text/csv;charset=utf-8,'
  const table: ModelTable = [
    [1,2,3]
  ]
  
  it('Should contain csv start content', () => {
    const result = prepareCSVContentFromArray(table)
    
    expect(result).toMatch(csvContentStart)
  })
  
  it('Should prepare a valid content', () => {
    let csvContent = csvContentStart
    table.forEach((row) => {
      csvContent += row.join(',') + "\r\n"
    })
  
    const result = prepareCSVContentFromArray(table)
  
    expect(result).toMatch(csvContent)
  })
})
