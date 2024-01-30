import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoImg from '../../styles/img/favicon/favicon.svg'

export function Header () {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="Logo da DT-MONEY" />

                <NewTransactionButton> Nova transação </NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}