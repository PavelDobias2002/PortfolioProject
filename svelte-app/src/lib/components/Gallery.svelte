<script>
    import { onMount } from 'svelte';
      // import base to prefix local paths
    import { base } from '$app/paths';
    import { allItems } from '$lib/data/galleryData.js';

    let items = [...allItems];

  let activeCategory = 'All'; // Track the active category

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

  <!-- Category filters -->
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

<div class="gallery">

    {#if items.length === 0}
      <div class="no-items-message">
        <p>No items found in the "{activeCategory}" category.</p>
      </div>
    {/if}
  
    {#each items as item (item.id)}
      <div class="specific-item">
  
        <div class="image">
          <a href={`/projects/${item.id}`}>
            <img  src={item.image} alt = "image">
        </a>
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

  <style>
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
  font-size: 1.5rem;
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
  </style>