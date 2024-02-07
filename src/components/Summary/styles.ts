import styled, { css } from "styled-components";

interface SummaryCardProps {
    variant?: 'green';
}

export const SummaryContainer = styled.section`
    /* width: 100%;
    max-width: 1120px;
    margin: 0 8rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr); */
    
    display: flex;
    width: 100%;
    justify-content: center;

    gap: 2rem;

    margin-top: -5rem;
`

export const SummaryCard = styled.div<SummaryCardProps>`

    width: 20%;


    background:  ${props => props.theme['gray-600']};
    border-radius: 6px;

    padding: 2rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color:  ${props => props.theme['gray-300']};
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }

    ${props => props.variant == 'green' && css`
        background: ${props.theme['green-700']};
    `}
`