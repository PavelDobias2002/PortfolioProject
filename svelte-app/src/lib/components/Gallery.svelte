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
      class={activeCategory === 'Game Development' ? 'active' : ''} 
      on:click={() => filterByCategory('Game Development')}
    >Game Development</button>
    <button 
      class={activeCategory === 'Digital Art' ? 'active' : ''} 
      on:click={() => filterByCategory('Digital Art')}
    >Digital Art</button>
    <button 
      class={activeCategory === 'Animation' ? 'active' : ''} 
      on:click={() => filterByCategory('Animation')}
    >Animation</button>
    <button 
      class={activeCategory === 'Traditional Art' ? 'active' : ''} 
      on:click={() => filterByCategory('Traditional Art')}
    >Traditional Art</button>
    
    
  </div>

<div id="gallery">

    {#if items.length === 0}
      <div class="no-items-message">
        <p>No items found in the "{activeCategory}" category.</p>
      </div>
    {/if}
  
    {#each items as item (item.id)}
      <div class="specific-item">
  
        <div class="image">
          <a href={`${base}/projects/${item.id}`}>
            <img src={item.image} alt={item.title}>
        </a>
        </div>
  
        <div class="content">
          <a href={`${base}/projects/${item.id}`}>
          <h3 class="item-heading">{item.title}</h3>
          </a>
          <p>
            {item.content}
          </p>
        </div>
  
        <div class="info">
          <p><b>Software/Tools:</b> {item.software}</p>
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

  #gallery /* Flexbox for Dynamic Layout */
  {
    display: flex;
    flex-wrap: wrap;
  
    gap: 1.5rem;
    justify-content: center;
    margin: 2rem 2rem;
    margin-bottom: 5rem;
    
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


.image {
    overflow: hidden;
    padding: 1rem 1rem 0 1rem;
  }
  
.image img{
    display: inline-block;
    border: 2px solid rgba(62, 62, 62, 0.3);
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    max-width: 50rem;
    width: auto;
    height: auto;
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
  color: var(--text-color);
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

/* Responsive styles for tablet */
@media (max-width: 992px) {
    #gallery {
      margin: 2rem 1rem;
    }
    
    .specific-item {
      width: 85%;
    }
    
    .image img {
      max-width: 100%;
    }
    
    .content h3 {
      font-size: 2rem;
    }
  }

  /* Responsive styles for mobile */
  @media (max-width: 768px) {
    .category-filters {
      flex-wrap: wrap;
      gap: 0.7rem;
    }
    
    #gallery {
      margin: 1.5rem 0.5rem;
    }
    
    .specific-item {
      width: 100%;
      max-width: 100%;
    }
    
    .image {
      padding: 0.8rem 0.8rem 0 0.8rem;
    }
    
    .content h3 {
      font-size: 1.8rem;
    }
    
    .content {
      font-size: 1.2rem;
    }
    
    .info {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }

  /* Small mobile styles */
  @media (max-width: 480px) {
    .category-filters button {
      padding: 0.4rem 0.8rem;
      font-size: 0.8rem;
    }
    
    .content h3 {
      font-size: 1.5rem;
    }

    .image {
      padding: 0.5rem 0.5rem 0 0.5rem;
    }
    
    .content {
      font-size: 1rem;
    }
    
    .info {
      flex-direction: column;
      align-items: center;
    }
  }

  </style>