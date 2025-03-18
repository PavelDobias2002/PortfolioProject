<script>
  import { onMount } from 'svelte';
  import { Card } from '$lib';

  onMount(() => {
    console.log("Home Page Loaded");
  });
</script>

<div class="section-header">
        
  <div class="image">
      <img src="/logo.png" alt="Logo" />
  </div>

  <h1>Welcome to my piece of the internet</h1>
  <p>My name is Pavel Dobias, I am an aspiring artist and designer etc.</p>
  
</div>

<!-- Gallery -->
<div class = "gallery">
  <a href = "/projects">
    <Card title = "Projects" description = "This is the first card." />
  </a>
  <a href = "/design">
    <Card title = "Design" description = "This is the first card." />
  </a>
  <a href = "/artwork">
    <Card title = "Art" description = "This is the first card." />
  </a>
</div>

<style>

  .section-header{
        text-align: center;
        margin-bottom: 2rem;
    }

    .section-header h1 {
      font-size: 2.5rem;
      color: #b3b3b3;
      margin-bottom: 0.5rem;
    }
  
    .section-header p {
      font-size: 1.2rem;
      color: #7f8c8d;
    }

  .gallery /* Flexbox for Dynamic Layout */
  {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 2rem;
  }

  .gallery::before /* Pseudo Element: Add decorative lines before gallery */
  {
    content: "Featured Cards";
    font-size: 1.5rem;
    font-weight: bold;
  }

  .gallery::after /* Pseudo Element: Add Decorative lines after gallery */
  {
    content: "";
    width: 60%;
    height: 3px;
    background: linear-gradient(to right, #660000, transparent);
    margin: 2rem auto 0 auto;
  }

    /* Highlight the first and last child in the gallery */
    :global(.gallery > .card:first-child) {
        border: 3px solid gold; /* Emphasize the first card */
    }

    :global(.gallery > .card:last-child) {
        border: 3px solid crimson; /* Emphasize the last card */
    }

    /* Apply a different background color to even-numbered cards */
    :global(.gallery > .card:nth-child(even)) {
        background-color: #000000;
    }

    /* Apply a hover effect: spotlight effect on the hovered card */
    :global(.gallery > .card:hover) {
        transform: scale(1.1); /* Scale up the hovered card */
        z-index: 2; /* Bring it to the front */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.gallery > .card:hover ~ .card) {
        transform: scale(0.9); /* Reduce size of adjacent cards */
        opacity: 0.8; /* Slightly fade them */
    }

    :global(.gallery > .card:hover + .card) /* Reduce the size of adjacent siblings when a card is hovered */
    {
      transform: scale(0.95);
      opacity: 0.9;
    }

    :global(.gallery > .card:nth-child(3n)) /* Apply special styling yo every third card */
    {
      border-left: 5px solid #660000;
    }

    :global(.gallery > .vard:not(:first-child):not(:last-child))  /*Excludes the first and last card from being affected by other child stylings*/
    {
      border-radius: 18px; /*Softens the edges for middle cards*/
    }

</style>

<!-- 
  <section class="homepage-portfolio">

    <div class="section-header">
        
        <div class="image">
            <img src="/logo.png" alt="Logo" />
        </div>
        
      </div>

    <div class="grid">
        <div class="card">
            <div class="image">
                <img src="/head.png" alt="Logo" />
                <a href="/projects">Projects</a>
            </div>
        </div>

        <div class="card">
            <div class="image">
                <img src="/head.png" alt="Logo" />
                <a href="/design">Design</a>
            </div>
        </div>

        <div class="card">
            <div class="image">
                <img src="/head.png" alt="Logo" />
                <a href="/artwork">Art</a>
            </div>
        </div>
    </div>

</section>

<style>
    .homepage-portfolio{
        padding: 2rem;
        max-width: 75%;
        margin: 0 auto;
    }

    .section-header{
        text-align: center;
        margin-bottom: 2rem;
    }

    .section-header h1 {
      font-size: 2.5rem;
      color: #b3b3b3;
      margin-bottom: 0.5rem;
    }
  
    .section-header p {
      font-size: 1.2rem;
      color: #7f8c8d;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
    }
  
    .card {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background-color: #fff;
    }
  
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }

    .image{
    max-height: 20em;
      background-color: #000000;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #546e7a;
      font-size: 1.2rem;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
      }
  
      .section-header h1 {
        font-size: 2rem;
      }
    }
  
    @media (max-width: 480px) {
      .homepage-portfolio {
        padding: 1rem;
      }
  
      .grid {
        grid-template-columns: 1fr;
      }
    }
</style>
-->