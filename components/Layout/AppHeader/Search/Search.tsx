import { ChangeEvent, useState } from "react";
import { SearchInput } from "../../../ui/SearchInput";

export const Search = () => {
    const [value, setValue] = useState('')

    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        console.log(e.target.value)}
    return <><SearchInput placeholder='Search' value={value} handleChange={handleChange}/></>
}