import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
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
	color:var(--color-grey-0)
}
.text-style-title-1 {
	font-size: 18px;
	font-family: "Inter";
	font-weight: 700;
	font-style: normal;
	line-height: 28px;
	text-decoration: none;
	text-transform: none;
}
.text-style-title-2 {
	font-size: 16px;
	font-family: "Inter";
	font-weight: 700;
	font-style: normal;
	line-height: 26px;
	text-decoration: none;
	text-transform: none;
}
.text-style-title-3 {
	font-size: 14px;
	font-family: "Inter";
	font-weight: 700;
	font-style: normal;
	line-height: 24px;
	text-decoration: none;
	text-transform: none;
}
.text-style-headline-bold {
	font-size: 12px;
	font-family: "Inter";
	font-weight: 700;
	font-style: normal;
	line-height: 18px;
	text-decoration: none;
	text-transform: none;
}
.text-style-headline {
	font-size: 12px;
	font-family: "Inter";
	font-weight: 400;
	font-style: normal;
	line-height: 22px;
	text-decoration: none;
	text-transform: none;
}
.text-style-headline-italic {
	font-size: 12px;
	font-family: "Inter";
	font-weight: 400;
	font-style: italic;
	line-height: 18px;
	text-decoration: none;
	text-transform: none;
}
`