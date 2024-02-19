import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useSummary () {

  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

    const infoSummary = transactions.reduce(
            // Aqui vem dos paramentros, o primeiro é o acumulador e o segundo é o item do seu array pai
            (acc, transaction) => {
                // Aqui vem a logica do seu recuder
                if(transaction.type == 'income') {
                    acc.income += transaction.price
                    acc.total += transaction.price
                } else {
                    acc.outcome += transaction.price
                    acc.total -= transaction.price
                }
    
                // Importante retornar o seu acumulador
                return acc
            }, 
            {
                // Aqui terá os valores de saida da conta do reducer
                income: 0,
                outcome: 0,
                total: 0
            }
        )
    
    // const infoSummary = useMemo(() => {
    //     transactions.reduce(
    //         // Aqui vem dos paramentros, o primeiro é o acumulador e o segundo é o item do seu array pai
    //         (acc, transaction) => {
    //             // Aqui vem a logica do seu recuder
    //             if(transaction.type == 'income') {
    //                 acc.income += transaction.price
    //                 acc.total += transaction.price
    //             } else {
    //                 acc.outcome += transaction.price
    //                 acc.total -= transaction.price
    //             }
    
    //             // Importante retornar o seu acumulador
    //             return acc
    //         }, 
    //         {
    //             // Aqui terá os valores de saida da conta do reducer
    //             income: 0,
    //             outcome: 0,
    //             total: 0
    //         }
    //     )
    // }, [transactions])
  
    return infoSummary
}