<script>
  import { onMount } from 'svelte';
  import { Card } from '$lib';
  import { scale } from 'svelte/transition';

  onMount(() => {
    console.log("Home Page Loaded");
  });

  // import base to prefix local paths
  import { base } from '$app/paths';

  let showGallery = false;
  let activeCategory = 'All'; // Track the active category

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

  let allItems = [
    {
      id: 1,
      image: `${base}/head.png`,
      title: 'Head',
      content: 'This is Head created in Krita',
      software: 'Krita',
      style: 'Digital Art',
      date: 'X',
    },
    {
      id: 2,
      image: `${base}/dog.jpg`,
      title: 'Dog',
      content: 'What the dog doin Lorem Ipsum papipirum inomine e patri',
      software: 'None',
      style: 'Game Design',
      date: '29/04/2025'
    },
    {
      id: 3,
      image: `${base}/bluestripes.png`,
      title: 'Logo',
      content: 'These are my logos',
      software: 'Photoshop',
      style: 'digital art',
      date: 'X'
    },
    {
      id: 4,
      image: `${base}/logo.png`,
      title: 'Head',
      content: 'This is Head created in Krita',
      software: 'Krita',
      style: 'digital art',
      date: 'X'
    }
    ,
    {
      id: 5,
      image: `${base}/pavel-dobias-spritesheet-sleepingwiththefishes.jpg`,
      title: 'Head',
      content: 'This is Head created in Krita',
      software: 'Krita',
      style: 'digital art',
      date: 'X'
    }
  ];

  let items = [...allItems];

  // Function to handle category filter selection
  function filterByCategory(style) {
    activeCategory = style;
    
    if (style === 'All') {
      items = [...allItems]; // Show all items
    } else {
      // Filter items based on style (case-insensitive comparison)
      items = allItems.filter(item => 
        item.style.toLowerCase() === style.toLowerCase()
      );
    }
  }

</script>

<div class="section-header">
        
  <div class="logo">
      <img src="/logoRed-Black.png" alt="Logo" />
  </div>

  <h1>Welcome to my portfolio gallery</h1>
  <p>My name is Pavel Dobias, I am an artist, designer, game designer/developer and much more.<br> To learn more check out my <b>contacts:</b></p>
  
</div>

<ul>
  <li><a href="https://github.com/PavelDobias2002"><img src="/cvredbrightsmaller.png" alt="CVicon" /></a></li>
  <li><a href="https://github.com/PavelDobias2002"><img src="/gitredbrightsmall.png" alt="GitHubIcon" /></a></li>
  <li><a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://ie.linkedin.com/in/pavel-dobias-789060292&ved=2ahUKEwjy_8-tl4KMAxWHUUEAHQNCAtoQFnoECBYQAQ&usg=AOvVaw06-nsywOiiTPqT1gHErbOe"><img src="/linkedinredbrightsmall.png" alt="LinkedInIcon" /></a></li>
</ul>

<!-- Scroll indicator arrow -->
<div class="scroll-arrow-container">
  <div class="scroll-arrow">
    <span>Scroll Down</span>
    ↓
  </div>
</div>

<!-- Category filters -->
<div class="reveal">
<div class="category-filters">
  <button 
    class={activeCategory === 'All' ? 'active' : ''} 
    on:click={() => filterByCategory('All')}
  >All</button>
  <button 
    class={activeCategory === 'Digital Art' ? 'active' : ''} 
    on:click={() => filterByCategory('Digital Art')}
  >Digital Art</button>
  <button 
    class={activeCategory === 'Traditional Art' ? 'active' : ''} 
    on:click={() => filterByCategory('Traditional Art')}
  >Traditional Art</button>
  <button 
    class={activeCategory === 'Game Design' ? 'active' : ''} 
    on:click={() => filterByCategory('Game Design')}
  >Game Design</button>
</div>
</div>

{#if showGallery}
<div class="reveal">
<div class="gallery">

  {#if items.length === 0}
    <div class="no-items-message">
      <p>No items found in the "{activeCategory}" category.</p>
    </div>
  {/if}

  {#each items as item (item.id)}
    <div class="specific-item">

      <div class="image">
        <img src={item.image} alt = "image">
      </div>

      <div class="content">
        <h3 class="item-heading">{item.title}</h3>
        <p>
          {item.content}
        </p>
      </div>

      <div class="info">
        <p><b>Software:</b> {item.software}</p>
        <p><b>Style:</b> {item.style}</p>
        <p><b>Date:</b> {item.date}</p>
      </div>

    </div>
  {/each}

</div>
</div>
{/if}

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
    transition: transform 0.3s ease;
  }
  
  .logo img:hover {
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

.category-filters 
    {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .category-filters button {
  background: none;
  border: 1px solid #505050;
  padding: 0.5rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--font-family-heading);
}

.category-filters button:hover {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--background-color);
}

/* Active button styles */
.category-filters button.active {
  background-color: var(--primary-color);
  color: #fff;
  border-color: var(--primary-color);
}

  .no-items-message {
  text-align: center;
  width: 100%;
  padding: 2rem;
  font-family: var(--font-family-paragraph);
  font-size: 1.2rem;
  color: var(--primary-color);
}

  .gallery /* Flexbox for Dynamic Layout */
  {
    display: flex;
    flex-wrap: wrap;
  
    gap: 1.5rem;
    justify-content: center;
    margin-top: 2rem;
    
  }

  .specific-item
{ /*grid system for the news articles*/
    display: grid;
    grid-template-columns: 2fr;
    gap: 1rem;
    border: 2px solid var(--primary-color);
    border-radius: 25px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    
}


.image img{
    display: inline-block;
    border: 2px solid rgba(62, 62, 62, 0.3);
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    max-width: 50rem;
    margin: 1rem 1rem 0 1rem;
  }
.content h3{
  font-family: var(--font-family-heading);
  font-size: 2.5rem;
}

.content{
  font-family: var(--font-family-paragraph);
  text-align: left;
  margin-left: 1rem;
  margin-right: 1rem;
}

.info{
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 3.5rem;
  border-top: 2px solid rgba(62, 62, 62, 0.3);
  padding: 1rem;
  font-family: var(--font-family-paragraph);
}



  /* Scroll arrow styles */
  .scroll-arrow-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 12.5rem;
    width: 100%;
  }
  
  .scroll-arrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    color: var(--primary-color);
  }
  
  .scroll-arrow span {
    margin-bottom: 0.5rem;
    font-family: var(--font-family-paragraph);
  }
  

</style>
