import { useState } from 'react';

import { SemFotoUser } from 'Icons';

import {
    Container,
    ContainerAdminTitle,
    Title,
    ContainerUserLogout,
    User,
    ButtonRoute
} from './style';

interface navbarProps {
    page: string;
    setWhichRoute: React.Dispatch<React.SetStateAction<string>>;
}

export function Navbar({ page, setWhichRoute }: navbarProps) {    
    return (
        <Container>
            <ContainerAdminTitle>
                <Title>BARBER SHOP</Title>

                {/* Quando na /admin ele ativa mostrando navegação da ageenda e cadastro de barbeiro */}
                {page === 'admin' ? (
                    <>
                        <ButtonRoute id="agenda" onClick={({target}:any) => setWhichRoute(target.id)}>Agenda</ButtonRoute>
                        <ButtonRoute id="cadastBarber" onClick={({target}:any) => setWhichRoute(target.id)}>Cadastrar barbeiro</ButtonRoute>
                    </>
                ) : (
                    <></>
                )}
            </ContainerAdminTitle>
            <ContainerUserLogout>
                <User>
                    <SemFotoUser />
                    <p className="nomeUsuario">Leandro Lombaldo</p>
                </User>
                <button>Sair</button>
            </ContainerUserLogout>
        </Container>
    )
}