import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";


const newTransactionFormSchema = z.object({
  title: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type newTransactionFormInputsType = z.infer<typeof newTransactionFormSchema>


export function NewTransationsModal () {
  const {
    control,
    register, 
    handleSubmit,
  } = useForm<newTransactionFormInputsType>({
    resolver: zodResolver(newTransactionFormSchema)
  })

  function handleNewTransaction (data: newTransactionFormInputsType) {
    console.log(data)
  }

    return (

      <Dialog.Portal>
          <Overlay />

          <Content>
              <Dialog.Title>Nova transação</Dialog.Title>

              <CloseButton>
                <X size={20} />
              </CloseButton>

              <form onSubmit={handleSubmit(handleNewTransaction)}>
                <input type="text" placeholder='Descrição' required {...register('title')} />
                <input type="number" placeholder='Preço' required {...register('price', {valueAsNumber:true})} />
                <input type="text" placeholder='Categoria' required {...register('category')} />

                <Controller 
                  control={control}
                  name='type'
                  render={({field}) => {
                    return (
                      <TransactionType onValueChange={field.onChange} value={field.value}>
                        <TransactionTypeButton variant='income' value='income'>
                          <ArrowCircleUp size={24} />
                          Entrada
                        </TransactionTypeButton>

                        <TransactionTypeButton variant='outcome' value='outcome'>
                          <ArrowCircleDown size={24} />
                          Saída
                        </TransactionTypeButton>
                    </TransactionType>
                    )
                  }}
                />


                <button type='submit'>
                  Cadastrar
                </button>
              </form>

          </Content>
      </Dialog.Portal>
    )
}