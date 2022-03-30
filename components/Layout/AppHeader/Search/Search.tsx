import { ChangeEvent, useEffect, useState } from "react";
import { SearchInput } from "../../../ui/SearchInput";
import { useSetRecoilState } from "recoil";
import { searchState } from "../../../../recoil/atoms";
import { useDebounce } from "../../../../core/hooks/useDebounce";
import { useRouter } from "next/router";

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