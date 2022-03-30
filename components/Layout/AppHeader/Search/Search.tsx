import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { searchState } from "../../../../recoil/atoms";
import { SearchInput } from "../../../ui/SearchInput";
import { useDebounce } from "../../../../core/hooks/useDebounce";

export const Search = () => {
    const { pathname } = useRouter()

    const [value, setValue]= useState<string>('')
    const  setSearch = useSetRecoilState(searchState)

    const debounceValue = useDebounce<string>(value, 750)

    useEffect(()=>{
        setSearch(debounceValue)
    }, [debounceValue])

    useEffect(()=> {
        setValue('')
    }, [pathname])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return <><SearchInput placeholder='Search' value={value} handleChange={handleChange}/></>
}