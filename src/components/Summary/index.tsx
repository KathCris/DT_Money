import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary () {
    const hookSummary = useSummary()

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entrada</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>

                <strong>
                {priceFormatter.format(hookSummary.income)}
                </strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>

                <strong>
                {priceFormatter.format(hookSummary.outcome)}
                </strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#ffff" />
                </header>

                <strong>
                {priceFormatter.format(hookSummary.total)}
                </strong>
            </SummaryCard>
        </SummaryContainer>
    )
}