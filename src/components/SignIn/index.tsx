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
 

    const handleRouteRegister = (event: any) => {
        if (event.id === "cadastro") {
            setRegisterMe(true)
        } else {
            setRegisterMe(false)
        }
    }



    const handleLogin = () => {

    }

    const handleSaveRegister = (event: FormEvent) => {
         
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
                                
                            />
                        </InputText>
                        <InputText>
                            EMAIL
                            <input
                                type="email"
                                placeholder='email@email.com.br'
                                
                            />
                        </InputText>
                        <InputText>
                            SENHA
                            <input
                                type="password"
                                placeholder='●●●●●●●●●●●'
                                
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