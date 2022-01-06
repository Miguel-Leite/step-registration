import { Link, useHistory } from 'react-router-dom'
import * as C from './styles'
import { FormActions, useForm } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption/index';

const FormStep2 = () => {

    const history = useHistory()
    const {state, dispatch} = useForm()

    useEffect(() => {
        if (state.name === ''){
            history.push('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    },[])

    const handdleNextStep = () => {
        if (state.name !== ''){
            history.push('/step3')
            return
        }
        alert('preencha os dados!')
    }
    
    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1> {state.name}, o que melhor descreve você? </h1> 
                <p>Escolha a opção que melhor condiz com seu estado actual, profissionalmente.</p>
                
                <hr />
                
                <SelectOption 
                    title="Sou iniciante"
                    description="Comecei a programar ha menos de 2 anos."
                    icon=""
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption 
                    title="Sou programador"
                    description="Ja programo ha 2 anos ou mais."
                    icon=""
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />
                <Link to='/' className='backButton'>Voltar</Link>
                <button onClick={handdleNextStep}> Proximo </button>
            </C.Container>
        </Theme>
    )
} 

export default FormStep2;