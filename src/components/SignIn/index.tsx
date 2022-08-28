import { useState, useEffect, FormEvent } from 'react';
import {
    Container,
    Title,
    InputText,
    Footer
} from './style';


interface dadosClientProps {
    nome: string,
    email: string,
    senha: string
}

export function SignIn() {
    const [RegisterMe, setRegisterMe] = useState(false);
    const [registed, setRegistrated] = useState([])
    const [dadosClient, setDadosClient] = useState<dadosClientProps>({
        nome: '',
        email: '',
        senha: ''
    })

    const [dadosAdmin, setDadosAdmin] = useState<dadosClientProps>({
        nome: 'Admin',
        email: 'admin@admin.com.br',
        senha: 'admin@123'
    })

    const handleRouteRegister = (event: any) => {
        if (event.id === "cadastro") {
            setRegisterMe(true)
        } else {
            setRegisterMe(false)
        }
    }

    console.log(dadosClient);


    const handleLogin = () => {

    }

    useEffect(() => {
        localStorage.setItem('@admin', JSON.stringify(dadosAdmin));
    }, [])

    const handleSaveRegister = (event: FormEvent) => {
        event.preventDefault();

        localStorage.setItem('@registed', JSON.stringify(dadosClient));

        let arrLocalRegisted = JSON.parse(localStorage.getItem())
     
    }


    return (
        <>
            {!RegisterMe ?
                (
                    <Container onSubmit={handleLogin}>
                        <Title>LOGIN</Title>
                        <InputText>
                            EMAIL
                            <input type="email" placeholder='email@email.com.br' />
                        </InputText>
                        <InputText>
                            SENHA
                            <input type="password" placeholder='●●●●●●●●●●●' />
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
                                    setDadosClient({
                                        ...dadosClient,
                                        nome: target.value,
                                    });
                                }}
                            />
                        </InputText>
                        <InputText>
                            EMAIL
                            <input
                                type="email"
                                placeholder='email@email.com.br'
                                onChange={({ target }) => {
                                    setDadosClient({
                                        ...dadosClient,
                                        email: target.value,
                                    });
                                }}
                            />
                        </InputText>
                        <InputText>
                            SENHA
                            <input
                                type="password"
                                placeholder='●●●●●●●●●●●'
                                onChange={({ target }) => {
                                    setDadosClient({
                                        ...dadosClient,
                                        senha: target.value,
                                    });
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