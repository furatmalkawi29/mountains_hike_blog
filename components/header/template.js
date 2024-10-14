const headerTemplate = `
<style>

/*/////////////::: Component Styles :::///////////////*/

.reset {
	margin: 0;
	padding: 0;
}
.Header_Container{
    width: 100%;
position: absolute;
    z-index: 1;
    padding: 3.75rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
}

.Header_Nav ul{
display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
]padding: 0;
margin: 0;

}

.Header_Container a{
display: inline-block;
text-decoration: none;
color: var(--primary-font-color, #FFF);
font-family: "Dosis", sans-serif;
font-size: 16px;
font-weight: 700;
}

.Header_Container  a:hover{

color: var(--secondary-font-color, #fbd784);
    transition: color 400ms ease;
transition: color 400ms ease;
    }
    
    .Nav__Item{
        padding-inline: 1.25rem;
    }
    .Nav__Item:hover a{
        color: var(--secondary-font-color, #fbd784);
            transition: color 400ms ease;
    transform: translateY(-4px);
    transition: transform 400ms ease, color 400ms ease;
}

/*/////////////::: Guideline Styles :::///////////////*/



/*/////////////::: Media Query Styles :::///////////////*/



</style>

<header class="reset Header_Container">
<div class="Header__Logo">
    <a href="/" title="Home">
      <img src="/path/to/logo.png" alt="Company Logo">
    </a>
  </div>

  <nav class="Header_Nav" aria-label="Primary navigation">
    <ul>
      <li class="Nav__Item"><a href="#" title="Equipment">Equipment</a></li>
      <li class="Nav__Item"><a href="#" title="About us">About us</a></li>
      <li class="Nav__Item"><a href="#" title="Visit our Blog">Blog</a></li>
    </ul>
  </nav>

  <div class="cta">
    <a href="#" class="button">Account</a>
  </div>
</header>
`;

export default headerTemplate;
