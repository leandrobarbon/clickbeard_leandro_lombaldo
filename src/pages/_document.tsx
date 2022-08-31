import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head> 
                <link rel="icon" href="/poste-de-barbeiro.ico" />
                <meta name="language" content="pt-BR" />
                <meta name="description" content="Barber Shop é um local especializado em barba, corte com máquina, corte com tesoura, sobrancelha" />
                <meta name="author" content="Leandro Lombaldo" />
                <meta name="keywords" content="barba, corte com máquina, corte com tesoura, sobrancelha"></meta>
                <meta property="og:type" content="page" />
                <meta property="og:site_name" content="Barber Shop" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:description" content="Barber Shop é um local especializado em barba, corte com máquina, corte com tesoura, sobrancelha" />
                <link rel="apple-touch-icon" href="/poste-de-barbeiro.ico"></link>
                <meta name="theme-color" content="#2A2550"></meta>


                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+HK:wght@700&family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}