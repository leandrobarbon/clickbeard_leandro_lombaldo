import { useState, FormEvent, useContext } from 'react';

import { User } from 'models/user';


import {
    Container,
    Title,
    InputText,
    Footer
} from './style';
import { AuthContext } from 'context/AuthContext';


interface dadosClientProps {
    name: string,
    email: string,
    password: string
}

export function SignInUp() {
    const [RegisterMe, setRegisterMe] = useState(false);
    const { signIn, signUp } = useContext(AuthContext)
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

        try {
            await signIn(formData.email, formData.password);
        } catch (error: any) {
            alert(error?.response?.data?.error.message)
        }
    }

    const handleSaveRegister = async (event: FormEvent) => {
        event.preventDefault();


        const data: User = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
        }

        try {
            await signUp(data);

            alert('User created successfully!');
        } catch (error: any) {
            alert(error.response?.data?.error?.message)
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
                            <button>Recuperar Senha</button>
                        </InputText>

                        <button>LOGIN</button>

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

                        <button type='submit' onClick={handleSaveRegister}>CADASTRAR</button>

                        <Footer>Já tem cadastro? <span onClick={(e) => handleRouteRegister(e.target)} id="login">Acesse Login</span></Footer>
                    </Container>
                )
            }
        </>
    )
}