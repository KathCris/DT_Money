import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./Components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";



export function Transactions () {

    const { transactions } = useContext(TransactionsContext)

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
                                    {priceFormatter.format(transaction.price)}
                                </PriceHighlight>
                            </td>
                            <td>{transaction.category}</td>
                            <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
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