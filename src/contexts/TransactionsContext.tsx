import React, { createContext, useEffect, useState } from "react";

interface Transactions {
  id: number,
  title: string,
  type: "income" | 'outcome',
  category: string,
  price: number,
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transactions[]
}

interface TransactionsContextProps {
  children: React.ReactNode
}


export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider ({children}: TransactionsContextProps) {

  const [transactions, setTransactions] = useState<Transactions[]>([]);

    async function historyTransactions () {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json()
        setTransactions(data)
    }

    useEffect(() => {
        try {
            historyTransactions()
        } catch (error) {
            console.error('Erro na requisição GET:', error);
        }
    }, [])



  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}