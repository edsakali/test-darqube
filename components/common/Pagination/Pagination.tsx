import { ReactNode } from "react";
import Pagination, { PaginationProps } from 'rc-pagination'
import styled from "styled-components";


interface Props extends PaginationProps {
    totalElements: number
}

export const PaginationComponent = ({totalElements, ...props}: Props) => {
    const paginationButtonRender = (_page: number, type: string, element: ReactNode): ReactNode => {
        if (type === 'prev') return <PaginationBtn title="prev">Previous</PaginationBtn>
        if (type === 'next') return <PaginationBtn title="next">next</PaginationBtn>
        return element
    }

    const renderTotal = (total: number, range: [number, number]): ReactNode => (
        <PaginationLeft>
            {range[0]} - {range[1]} <span style={{marginLeft: '6px', opacity: '0.25'}}>out of {total}</span>
        </PaginationLeft>
    )

    return (
        <RcPagination
            {...props}
            total={totalElements}
            showTotal={renderTotal}
            className="modified-pagination"
            itemRender={paginationButtonRender}
        />
    )
}

const RcPagination = styled(Pagination)`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  position: relative;
`

const PaginationLeft = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 12px;
  color: white;
  positon: absolute;
  left: 0;
`

const PaginationBtn = styled.button`
  width: 116px;
  height: 25px;
  text-transform: uppercase;
  font-size: 10px;
  color: white;
  font-weight: bold;
  background: #3C3C3C;
  border-radius: 60px;
  border: none;
  
  :hover {
    opacity: .6;
  }
`

