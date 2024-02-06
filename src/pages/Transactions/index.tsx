import { useState } from "react";
import { useEffect } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./Components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transactions {
    id: number,
    title: string,
    type: "income" | 'outcome',
    category: string,
    price: number,
    createdAt: string
}

export function Transactions () {

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
        <div>
            <Header />
            <Summary />


        <TransactionsContainer>
            <SearchForm />
            <TransactionsTable>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr>
                            <td width='50%'>{transaction.title}</td>
                            <td>  
                                <PriceHighlight variant={transaction.type}>
                                    R${transaction.price}
                                </PriceHighlight>
                            </td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>
                    ))}
                    {/* <tr>
                        <td width='50%'> Desenvolvimento de site</td>
                        <td>
                            <PriceHighlight variant="outcome">
                                R$ 12.000
                            </PriceHighlight>
                        </td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr> */}
                </tbody>
            </TransactionsTable>
        </TransactionsContainer>
        </div>
    )
}