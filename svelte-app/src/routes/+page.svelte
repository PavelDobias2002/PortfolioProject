<script>
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  import Gallery from '$lib/components/Gallery.svelte';
  import { base } from '$app/paths';


  onMount(() => {
    console.log("Home Page Loaded");
  });
//
  let showGallery = true;

  // Update showGallery based on scroll position
  const handleScroll = () => {
    showGallery = window.scrollY > 50;
  };

  // Add scroll event listener
  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

</script>

<div class="section-header">
        
  <div class="logo">
      <img src="{base}/logoRed-Black.png" alt="Logo" />
  </div>

  <h1>Welcome to my portfolio gallery</h1>
  <p>My name is <b>Pavel Dobias</b>, I am an artist, designer, game designer/developer looking to learn new things.<br> And to learn more about me check out my <b>contacts:</b><br>
    <b>Email:</b> dobias.parez@gmail.com <br> <b>Phone:</b> +420 724 259 929/+353 87 487 8524
  </p>
  
</div>

<ul>
  <li><a href="{base}/CV"><img src="{base}/cvredbrightsmaller.png" alt="CVicon" /></a></li>
  <li><a href="https://github.com/PavelDobias2002" target="_blank" rel="noopener noreferrer"><img src="{base}/github-logo-logo.webp" alt="GitHubIcon" /></a></li>
  <li><a href="https://www.linkedin.com/in/pavel-dobias-789060292/" target="_blank" rel="noopener noreferrer"><img src="{base}/LinkedInLogo.webp" alt="LinkedInIcon" /></a></li>
  <li><a href="https://codeberg.org/PavelDobias" target="_blank" rel="noopener noreferrer"><img src="{base}/codeberglogo.webp" alt="CodebergIcon" /></a></li>
</ul>



<!-- Scroll indicator arrow -->
<div class="scroll-arrow-container">
  <div class="scroll-arrow">
    <span>Scroll Down</span>
    ↓
  </div>
</div>



  <Gallery />



<style>

  /* Ensure the body or main container has enough height */
  :global(body) {
    min-height: 200vh; /* Makes the page twice the height of the viewport */
    margin: 0;
  }

  .section-header{
        text-align: center;
        margin-bottom: 2rem;
        margin-top: 2rem;
    }

    .section-header h1 {
      font-family: var(--font-family-heading);
      font-size: 2.5rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
    }
  
    .section-header p {
      font-family: var(--font-family-paragraph);
      font-size: 1.5rem;
    }

    .logo {
    display: inline-block;
    margin-bottom: 1rem;
  }
  
  .logo img {
    max-width: 100%;
    width: 100%;
    height: auto;
    transition: transform 0.3s ease, width 0.3s ease;
  }
  
  .logo img:hover {
    transform: translateY(-10px);
  }

  ul img{
    display: inline-block;
    max-width: 5rem;
    width: 100%;
    height: auto;
  }

  ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul li {
        margin: 0 15px;
        transition: transform 0.3s ease;
    }
    

    ul li:hover{
      transform: translateY(-5px);
    }

    .reveal 
{
    opacity: 0;
    transform: translateY(20px);
    animation: revealContent 1s forwards ease-out;
}
@keyframes revealContent
{
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

  /* Scroll arrow styles */
  .scroll-arrow-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 5rem;
    width: 100%;
  }
  
  .scroll-arrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    color: var(--primary-color);
    animation: bounce 2s infinite;
  }
  
  .scroll-arrow span {
    margin-bottom: 0.5rem;
    font-family: var(--font-family-paragraph);
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-5px);
    }
    60% {
        transform: translateY(-2.5px);
    }
}
  

  /* Responsive styles for tablets */
  @media (max-width: 992px) {
    .section-header h1 {
      font-size: 2rem;
    }

    .section-header p {
      font-size: 1.3rem;
    }

    .logo img {
      max-width: 75%;
    }

    .scroll-arrow {
      font-size: 1.3rem;
    }
  }

  /* Responsive styles for mobile */
  @media (max-width: 768px) {
    .section-header h1 {
      font-size: 1.6rem;
      padding: 0 1rem;
    }

    .section-header p {
      font-size: 1.1rem;
      padding: 0 1rem;
    }

    .logo img {
      max-width: 75%;
    }

    ul li {
      margin: 0 10px;
    }

    .scroll-arrow-container {
      margin-bottom: 8rem;
    }

    .scroll-arrow {
      font-size: 1.2rem;
    }
  }

  /* Extra small screens */
  @media (max-width: 480px) {
    .section-header h1 {
      font-size: 1.4rem;
    }

    .section-header p {
      font-size: 1rem;
    }

    .logo img {
      max-width: 180px;
    }

    ul {
      flex-wrap: wrap;
      gap: 1rem;
    }

    ul li {
      margin: 0 8px;
    }
  }

</style>
