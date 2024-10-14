const heroTemplate = `
<style>

/*/////////////::: Component Styles :::///////////////*/

.Hero__layer {
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
}

.Hero__layer.Layer-no1 {
    background-image: url(https://mntn.krystonschwarze.com/images/HG-p-1080.png);
    top: 0px;
    transition: transform 300ms ease-out;
}

.Hero__layer.Layer-no2 {
    background-image: url(https://mntn.krystonschwarze.com/images/MG-p-1600.png);
    top: 40%;
    transition: transform 300ms ease-out;
}

.Hero__layer.Layer-no3 {
    top: 25.5%;
}

.Hero__content {
    display: grid;
    grid-template-columns: 26% 48% 26%;
}

.Hero__text-block{
    height: fit-content;
    display: grid;
    row-gap: 2rem;
}

.Hero__text-block .Heading--primary {
    font-size: 5rem;
}

/*/////////////::: Guideline Styles :::///////////////*/

.Heading--secondary {
    color: var(--secondary-font-color, #FBD784);
    font-family: "Dosis", sans-serif;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
}

.Heading--secondary::before {
    content: "";
    display: inline-block;
    width: 72px;
    height: 2px;
    margin-right: 1.4rem;
    margin-block: 0.25rem;
    background: var(--secondary-font-color, #FBD784);
}

.Heading--primary {
    color: var(--primary-font-color, #FFF);
    line-height: 1.1;
    font-weight: 500;
    text-transform: capitalize;
}

.margin-reset {
    margin: 0;
}

/*/////////////::: Media Query Styles :::///////////////*/



</style>

<div class="Hero__layer Layer-no1" data-layer-type="parallax" data-layer-depth="1.1"></div>
<div class="Hero__layer Layer-no2" data-layer-type="parallax" data-layer-depth="0.52"></div>

<div class="Hero__layer Layer-no3 Hero__content" data-layer-type="parallax" data-layer-depth="-2.3">
    <div></div>
    <div class="Hero__text-block">
        <h5 class="margin-reset Heading--secondary">A Hiking guide</h5>
        <h1 class="margin-reset Heading--primary">Be prepared for the Mountains and beyond!</h1>
    </div>
    <div></div>
</div>
`;

export default heroTemplate;
