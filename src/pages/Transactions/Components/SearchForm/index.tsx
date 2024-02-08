import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const serchaFormSchema = z.object({
  query: z.string()
})

type serchaFormInputsType = z.infer<typeof serchaFormSchema>

export function SearchForm () {

  const { 
    register, 
    handleSubmit,
  } = useForm<serchaFormInputsType>({
    resolver: zodResolver(serchaFormSchema)
  })

  function handleSearch (data: serchaFormInputsType) {
    console.log(data)
  }

  return (
    <SearchFormContainer  onSubmit={handleSubmit(handleSearch)}>
      <input type="text" placeholder="Busque por transações"
      {...register('query')}
      />

      <button type="submit">
        <MagnifyingGlass size={20}/>
         Buscar
      </button>
    </SearchFormContainer>
  )
}