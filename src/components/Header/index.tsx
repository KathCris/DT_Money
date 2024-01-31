import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '../../styles/img/favicon/favicon.svg'
import { NewTransationsModal } from "../NewTransationsModal";

export function Header () {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="Logo da DT-MONEY" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton> Nova transação </NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransationsModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}