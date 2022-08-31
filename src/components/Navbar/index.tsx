import { NoPhotoUser } from 'Icons';
import { useState, Dispatch, SetStateAction } from 'react';
import Router from 'next/router'

import { useAuth } from '../../context/AuthContext';

import {
    Container,
    ContainerAdminTitle,
    Title,
    ContainerUserLogout,
    User,
    ButtonRoute,
    ModalMenuMobile,
    ButtonLogout,
    IconBurguer,
    ContainerTransparent,
    ExchageDashboard
} from './style';

interface navbarProps {
    page: string;
    setWhichRoute?: Dispatch<SetStateAction<boolean>>;
}

export function Navbar({ page, setWhichRoute }: navbarProps) {
    const [openMenu, setOpenMenu] = useState(false)
    const { logout, user } = useAuth()

    const handleRoute = (key: string) => {
        if (!setWhichRoute) return

        if (key === 'agenda') {
            setWhichRoute(false)
        } else {
            setWhichRoute(true)
        }
    }

    const handleOpenBurguerMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        if (!openMenu) {
            setOpenMenu(true);
        } else {
            setOpenMenu(false);
        }
    }
    console.log(user);


    return (
        <Container>
            <ContainerAdminTitle>
                {/* classname com verificação se está o width está 1100px para sumir ou mostrar */}
                <Title className={`${page === 'admin' ? 'isWidthAjust' : ''}`}>BARBER SHOP</Title>

                {page === 'admin' ? (
                    user?.isAdmin ? <ExchageDashboard onClick={() => Router.push('/home')}></ExchageDashboard> : null
                ) : (
                    user?.isAdmin ? <ExchageDashboard onClick={() => Router.push('/admin')}></ExchageDashboard> : null
                )}

                {/* Quando na /admin ele ativa mostrando navegação da ageenda e cadastro de barbeiro */}
                {page === 'admin' ? (
                    <>
                        {/* classname com verificação se está o width está 1100px para sumir ou mostrar */}
                        <ButtonRoute className={`${page === 'admin' ? 'isRouteWidth' : ''}`} onClick={() => handleRoute('agenda')}>Agenda</ButtonRoute>
                        <ButtonRoute className={`${page === 'admin' ? 'isRouteWidth' : ''}`} onClick={() => handleRoute('barber')}>Cadastrar barbeiro</ButtonRoute>
                    </>
                ) : (
                    <></>
                )}
            </ContainerAdminTitle>

            <ContainerUserLogout>
                {/* classname com verificação se está o width está 1100px para sumir ou mostrar */}
                <User className={`${page === 'admin' ? 'isUserWidth' : ''}`}>
                    <NoPhotoUser />
                    <p className="nomeUsuario">Leandro Lombaldo</p>
                </User>
                {/* classname com verificação se está o width está 1100px para sumir ou mostrar */}
                <ButtonLogout className={`${page === 'admin' ? 'isButtonWidth' : ''}`} onClick={logout}>Sair</ButtonLogout>

                {page === 'admin' ? (
                    <>
                        <IconBurguer onClick={handleOpenBurguerMenu} />

                        <ContainerTransparent className={`${openMenu ? 'open' : ''}`} onClick={handleOpenBurguerMenu}>
                            <ModalMenuMobile className={`${openMenu ? 'open' : ''}`}>
                                <User>
                                    <NoPhotoUser />
                                    <p className="nomeUsuario">Leandro Lombaldo</p>
                                </User>
                                <ButtonRoute onClick={() => handleRoute('agenda')}>Agenda</ButtonRoute>
                                <ButtonRoute onClick={() => handleRoute('barber')}>Cadastrar barbeiro</ButtonRoute>
                                <ButtonLogout onClick={logout} >Sair</ButtonLogout>
                            </ModalMenuMobile>
                        </ContainerTransparent>
                    </>
                ) : (
                    <></>
                )}
            </ContainerUserLogout>
        </Container>
    )
}