import { ChangeEvent } from "react";
import styled from "styled-components";
import Search from '../../assets/icons/search.svg'

interface Props {
    placeholder: string,
    value: string,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({placeholder, value, handleChange}: Props) => {
    return <SearchWrapper>
        <SearchIcon/>
        <Input  placeholder={placeholder} value={value} onChange={handleChange}/>
    </SearchWrapper>
}

const SearchWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`

const SearchIcon = styled(Search)`
  width: 10.95px;
  height: 11.28px;
  left: 8px;
  position: absolute;

`

const Input = styled.input`
  border: none;
  outline: none;
  padding-left: 24px;
  font-size: 12px;
  height: 30px;
  width: 162px;
  color: white;
  background: #191818;
  border-radius: 5px;

  ::placeholder {
    color: #686868;
  }
`