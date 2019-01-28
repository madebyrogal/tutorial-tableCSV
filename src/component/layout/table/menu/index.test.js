import { TableMenu } from './index'
import { IconAddRowAbove } from '../../icon/addRowAbove'
import { IconAddRowBelow } from '../../icon/addRowBelow'
import { IconAddColumnLeft } from '../../icon/addColumnLeft'
import { IconAddColumnRight } from '../../icon/addColumnRight'
import { IconDeleteColumn } from '../../icon/deleteColumn'
import { IconDeleteRow } from '../../icon/deleteRowBelow'

describe('Table Menu', () => {
  let props
  beforeEach(() => {
    props = {
      selectedRow: 2,
      selectedColumn: 2,
      data: [
        [1,2,3]
      ],
      addRowAbove: jest.fn(),
      addRowBelow: jest.fn(),
      addColumnOnLeft: jest.fn(),
      addColumnOnRight: jest.fn(),
      deleteRow: jest.fn(),
      deleteColumn: jest.fn(),
    }
  })
  
  it('Should render without crash', () => {
    const component = shallow(<TableMenu {...props} />)
    expect(component).toBeTruthy()
  })
  
  it('Should handle add row above', () => {
    const component = shallow(<TableMenu {...props} />)
    component.find(IconAddRowAbove).simulate('click')
    
    expect(props.addRowAbove).toBeCalled()
  })
  
  it('Should handle add row below', () => {
    const component = shallow(<TableMenu {...props} />)
    component.find(IconAddRowBelow).simulate('click')
    
    expect(props.addRowBelow).toBeCalled()
  })
  
  it('Should handle add column on left', () => {
    const component = shallow(<TableMenu {...props} />)
    component.find(IconAddColumnLeft).simulate('click')
    
    expect(props.addColumnOnLeft).toBeCalled()
  })
  
  it('Should handle add column on right', () => {
    const component = shallow(<TableMenu {...props} />)
    component.find(IconAddColumnRight).simulate('click')
    
    expect(props.addColumnOnRight).toBeCalled()
  })
  
  it('Should handle delete column', () => {
    const component = shallow(<TableMenu {...props} />)
    component.find(IconDeleteColumn).simulate('click')
    
    expect(props.deleteColumn).toBeCalled()
  })
  
  it('Should handle delete row', () => {
    const component = shallow(<TableMenu {...props} />)
    component.find(IconDeleteRow).simulate('click')
    
    expect(props.deleteRow).toBeCalled()
  })
})
