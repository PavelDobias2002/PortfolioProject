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

  <h1>Welcome to my portfolio gallery</h1>
  <p>My name is Pavel Dobias, I am an artist, designer, game designer/developer and much more.<br> To learn more check out my <b>contacts:</b></p>
  
</div>

<ul>
  <li><a href="https://github.com/PavelDobias2002"><img src="/cvredbrightsmaller.png" alt="CVicon" /></a></li>
  <li><a href="https://github.com/PavelDobias2002"><img src="/gitredbrightsmall.png" alt="GitHubIcon" /></a></li>
  <li><a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://ie.linkedin.com/in/pavel-dobias-789060292&ved=2ahUKEwjy_8-tl4KMAxWHUUEAHQNCAtoQFnoECBYQAQ&usg=AOvVaw06-nsywOiiTPqT1gHErbOe"><img src="/linkedinredbrightsmall.png" alt="LinkedInIcon" /></a></li>
</ul>

<!-- Gallery 
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
-->
<style>

  .section-header{
        text-align: center;
        margin-bottom: 2rem;
        margin-top: 2rem;
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
