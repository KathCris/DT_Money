import React, { useEffect, useState } from "react";
import { api } from "../libs/axios";
import { createContext } from "use-context-selector";

interface Transactions {
  id: number,
  title: string,
  type: "income" | 'outcome',
  category: string,
  price: number,
  createdAt: string
}

interface creatNewTransationType {
  title: string,
  type: 'income' | 'outcome',
  category: string,
  price: number,
  createdAt: Date,
}

interface TransactionsContextType {
  transactions: Transactions[]
  fetchHistoryTransactions: (query?: string) => Promise<void>
  creatNewTransation: (data: creatNewTransationType) => Promise<void>
 }

interface TransactionsContextProps {
  children: React.ReactNode
}




export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider ({children}: TransactionsContextProps) {

  const [transactions, setTransactions] = useState<Transactions[]>([]);

    async function fetchHistoryTransactions (query?: string) {
        const response = await api.get('/transactions', {
          params: {
            title: query
          }
        })

        setTransactions(response.data)
    }


    async function creatNewTransation (data: creatNewTransationType) {
      const response = await api.post('/transactions', {
            title: data.title,
            type: data.type,
            category: data.category,
            price: data.price,
            createdAt: new Date()
      })

      setTransactions(state => [...state ,response.data])
    }

    useEffect(() => {
        try {
          fetchHistoryTransactions()
        } catch (error) {
            console.error('Erro na requisição GET:', error);
        }
    }, [])



  return (
    <TransactionsContext.Provider 
      value={{ 
        transactions,
        fetchHistoryTransactions,
        creatNewTransation
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}