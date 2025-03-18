<script>
  import { onMount } from 'svelte';
  import { Card } from '$lib';

  onMount(() => {
    console.log("Home Page Loaded");
  });
</script>

    <div class="section-header">
      <h1>Projects</h1>
      <p>Showcase of my projects, combining art, design and coding</p>
    </div>

      <!-- Category filters -->
  <div class="category-filters">
    <button class="active">All</button>
    <button>Personall</button>
    <button>Commercial</button>
  </div>
  
  <!-- Gallery -->
  <div class = "gallery">
    <a href = "/projects/+pageBuzzz.svelte">
      <Card title = "Buzzz vs The Harvesters" description = "A game created for Games Fleadh 2025, using Raylib Software Library, winning an award for Best Original Assets." />
    </a>
    <a href = "/design">
      <Card title = "Sleeping with The Fishes" description = "A game created for Global Game Jam 2025 using Unity." />
    </a>
    <a href = "/artwork">
      <Card title = "Bio-Farmer" description = "Webgame created in VS Code, using html, css and js." />
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

    .category-filters 
    {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .category-filters button 
  {
    background: none;
    border: 1px solid #505050;
    color: #e0e0e0;
    padding: 0.5rem 1.2rem;
    border-radius: 25px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .category-filters button.active,
  .category-filters button:hover {
    background-color: #ffffff;
    color: #121212;
    border-color: #ffffff;
  }
  
</style>