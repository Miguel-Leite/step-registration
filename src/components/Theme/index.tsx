import * as C from './styles'
import { ReactNode } from 'react';
import { Header } from '../Header/index';
import { SidebarItem } from '../SidebarItem';
import { useForm } from '../../contexts/FormContext';

type Props = {
    children: ReactNode
}

export const Theme = ( {children}: Props) => {
    const {state} = useForm()

    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>

                        <SidebarItem
                            title='Pessoal'
                            description='Se identifique'
                            icon='profile'
                            path='/'
                            active={state.currentStep === 1}
                        />

                        <SidebarItem
                            title='Pessoal'
                            description='Seu nivel'
                            icon='book'
                            path='/step2'
                            active={state.currentStep === 2}
                        />

                        <SidebarItem
                            title='Contactos'
                            description='Como te achar'
                            icon='mail'
                            path='/step3'
                            active={state.currentStep === 3}
                        />

                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}