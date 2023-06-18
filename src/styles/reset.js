import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
:root {
	--color-color-primary: #ff577f;
	--color-color-primary-50: #ff427f;
	--color-color-primary-disable: #59323f;
	--color-grey-4: #121214;
	--color-grey-3: #212529;
	--color-grey-2: #343b41;
	--color-grey-1: #868e96;
	--color-grey-0: #f8f9fa;
	--color-sucess: #3fe864;
	--color-negative: #e83f5b;
	--color-padrao:#FFFFFF;

	--bg-color:#000000;
    --font-primary: 'Inter', sans-serif;
}
body{
	background-color:var(--bg-color);
	color:var(--color-grey-0);
    margin: 0 1.2rem;
}
*{
        box-sizing: border-box;
        padding: 0 ;
        margin: 0;
        font-size: 62.5%;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }

    a{
        color: unset;
        text-decoration: none;
    }

    ul, ol{
        list-style: none;
    }

    input{
        border-radius: 0;
        border: none;
        background: transparent;
    }

    img{
        max-width: 100%;
    }

`