import { useState, FormEvent, useContext } from 'react';

import { Loading } from '../Loading';
import { addSuccessNotification, addErrorNotification } from '../Alert'

import { User } from 'models/user';


import { AuthContext } from 'context/AuthContext';

import {
    Container,
    Title,
    InputText,
    Footer
} from './style';



interface dadosClientProps {
    name: string,
    email: string,
    password: string
}

export function SignInUp() {
    const [RegisterMe, setRegisterMe] = useState(false);
    const { signIn, signUp } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<dadosClientProps>({
        name: '',
        email: '',
        password: '',
    });

    const handleRouteRegister = (event: any) => {
        if (event.id === "cadastro") {
            setRegisterMe(true)
        } else {
            setRegisterMe(false)
        }
    }

    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();

        setIsLoading(true)

        try {
            await signIn(formData.email, formData.password);
        } catch (error: any) {
            alert(error?.response?.data?.error.message)
        } finally {
            setIsLoading(false)

        }
    }

    const handleSaveRegister = async (event: FormEvent) => {
        event.preventDefault();

        setIsLoading(true)


        const data: User = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
        }

        try {
            await signUp(data);

            addSuccessNotification('User created successfully!');


        } catch (error: any) {
            addErrorNotification(error.response?.data?.error?.message)
        } finally {
            setIsLoading(false)

        }
    }


    return (
        <>
            {!RegisterMe ?
                (
                    <Container onSubmit={handleLogin}>
                        <Title>LOGIN</Title>
                        <InputText>
                            EMAIL
                            <input
                                type="email"
                                placeholder='email@email.com.br'
                                value={formData.email}
                                onChange={({ target }) => {
                                    setFormData({ ...formData, email: target.value })
                                }} />
                        </InputText>
                        <InputText>
                            SENHA
                            <input
                                type="password"
                                placeholder='●●●●●●●●●●●'
                                value={formData.password}
                                onChange={({ target }) => {
                                    setFormData({ ...formData, password: target.value })
                                }} />
                            <button type='button'>Recuperar Senha</button>
                        </InputText>

                        <button>{isLoading ? <Loading type='spin' /> : 'LOGIN'}</button>

                        <Footer>Não tem cadastro? <span onClick={(e) => handleRouteRegister(e.target)} id="cadastro">Cadastra-me</span></Footer>
                    </Container>
                ) : (
                    <Container>
                        <Title>CADASTRO</Title>
                        <InputText>
                            NOME
                            <input
                                type="text"
                                placeholder='nome'
                                onChange={({ target }) => {
                                    setFormData({ ...formData, name: target.value });
                                }}
                            />
                        </InputText>
                        <InputText>
                            EMAIL
                            <input
                                type="email"
                                placeholder='email@email.com.br'
                                onChange={({ target }) => {
                                    setFormData({ ...formData, email: target.value });
                                }}
                            />
                        </InputText>
                        <InputText>
                            SENHA
                            <input
                                type="password"
                                placeholder='●●●●●●●●●●●'
                                onChange={({ target }) => {
                                    setFormData({ ...formData, password: target.value });
                                }}
                            />
                        </InputText>

                        <button type='submit' onClick={handleSaveRegister}>{isLoading ? <Loading type='spin' /> : 'CADASTRAR'}</button>

                        <Footer>Já tem cadastro? <span onClick={(e) => handleRouteRegister(e.target)} id="login">Acesse Login</span></Footer>
                    </Container>
                )
            }
        </>
    )
}