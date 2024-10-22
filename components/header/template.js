const headerTemplate = `
<style>

  /*/////////////::: Component Styles :::///////////////*/

  .reset {
    margin: 0;
    padding: 0;
  }

  .Header_Container {
    width: 100%;
    position: absolute;
    z-index: 1;
    padding: 3.3rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }

  .Header_Nav ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .Header_Container a {
    display: inline-block;
    text-decoration: none;
    color: var(--primary-font-color, #FFF);
    font-family: "Dosis", sans-serif;
    font-size: 16px;
    font-weight: 700;
  }

  .Header_Container a:hover {
    color: var(--secondary-font-color, #fbd784);
    transition: color 400ms ease;
  }

  .Nav__Item {
    padding-inline: 1.6rem;
  }

  .Nav__Item:hover a {
    color: var(--secondary-font-color, #fbd784);
    transition: color 400ms ease;
    transform: translateY(-4px);
    transition: transform 400ms ease, color 400ms ease;
  }

  .Header_Actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  /*/////////////::: Guideline Styles :::///////////////*/

  /*/////////////::: Media Query Styles :::///////////////*/

</style>


<header class="reset Header_Container">
<div class="Header__Logo">
    <a href="/" title="Home">
      <img src="https://mntn.krystonschwarze.com/images/Logo.svg" alt="Company Logo">
    </a>
  </div>

  <nav class="Header_Nav" aria-label="Primary navigation">
    <ul>
      <li class="Nav__Item"><a href="#" title="Equipment">Equipment</a></li>
      <li class="Nav__Item"><a href="#" title="About us">About us</a></li>
      <li class="Nav__Item"><a href="#" title="Visit our Blog">Blog</a></li>
    </ul>
  </nav>

  <div class="Header_Actions">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14ZM12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" fill="currentColor"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9261 20.0557C20.397 18.235 22 15.3047 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.3047 3.60301 18.235 6.07388 20.0557C6.11934 20.0892 6.16509 20.1223 6.21112 20.1551C6.65997 20.4742 7.1363 20.7573 7.63587 21C8.95464 21.6407 10.4354 22 12 22C13.5646 22 15.0454 21.6407 16.3641 21C16.3909 20.987 16.4177 20.9738 16.4443 20.9606C16.9657 20.7015 17.4613 20.3982 17.9261 20.0557ZM17.2287 18.055C18.926 16.588 20 14.4194 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 14.4194 5.07401 16.588 6.77128 18.055C7.80066 16.2313 9.75654 15 12 15C14.2435 15 16.1993 16.2313 17.2287 18.055ZM15.5567 19.1679C14.8921 17.8803 13.5488 17 12 17C10.4512 17 9.10792 17.8803 8.44332 19.1679C9.51467 19.7005 10.7224 20 12 20C13.2776 20 14.4853 19.7005 15.5567 19.1679Z" fill="currentColor"></path>
</svg>
    <a href="#" class="button">Account</a>
  </div>
</header>
`;
//put account svg icon in file
export default headerTemplate;
