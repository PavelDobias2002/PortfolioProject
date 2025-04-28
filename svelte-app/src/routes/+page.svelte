<script>
  import { onMount } from 'svelte';
  import { Card } from '$lib';

  onMount(() => {
    console.log("Home Page Loaded");
  });
</script>

<div class="section-header">
        
  <div class="image">
      <img src="/logoSimple.png" alt="Logo" />
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
      font-family: 'Special Gothic Expanded One', sans-serif;
      font-size: 2.5rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
    }
  
    .section-header p {
      font-family: 'Special Gothic', sans-serif;
      font-size: 1.5rem;
    }

    .image {
    display: inline-block;
    margin-bottom: 1rem;
  }
  
  .image img {
    transition: transform 0.3s ease;
  }
  
  .image img:hover {
    transform: translateY(-10px);
  }

  .gallery /* Flexbox for Dynamic Layout */
  {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 2rem;
  }

    

</style>
