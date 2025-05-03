<script>
  import { page } from '$app/stores';
  import { allItems } from '$lib/data/galleryData.js';
  
  // Get the ID from the URL parameter
  $: id = $page.params.id;
  
  // Find the item in the galleryData based on ID
  // Use string comparison to ensure proper matching
  $: item = allItems.find(i => String(i.id) === String(id));
  
  // Log for debugging
  $: console.log('ID from URL:', id);
  $: console.log('Found item:', item);
</script>



<div class="item-details">
  {#if item}
    <h1>{item.title}</h1>
    {#if item.image}
      <img src={item.image} alt={item.title} />
    {/if}
    <div class="content">
    <p class="description">{item.description}</p>
    
    {#if item.software}
      <p><b>Software:</b> {item.software}</p>
    {/if}
    {#if item.style}
      <p><b>Style:</b> {item.style}</p>
    {/if}
    {#if item.date}
      <p><b>Date:</b> {item.date}</p>
    {/if}
    </div>
  
  {:else}
    <div class="not-found">
      <h1>Item Not Found</h1>
      <p>The item you are looking for does not exist.</p>
    </div>
  {/if}
</div>

<a href="/#gallery" class="back-arrow" aria-label="Return to homepage">
  <span class="arrow">←</span> Back to Gallery
</a>

<style>
  .item-details {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Default: 2 columns */
    grid-template-rows: auto auto; 
    gap: 1rem;
    padding: 2rem;
    margin: 0 5rem 0 5rem;
    justify-content: center;
  }

  .item-details img {
    grid-area: 2 / 1;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .item-details h1 {
    grid-area: 1 / 1 / 2 / 3; 
    text-align: left;
    font-family: var(--font-family-heading);
    font-size: 2.5rem;
    margin: 0.5rem 0;
    border-bottom: 5px solid var(--primary-color);
  }

  .item-details p {
    font-family: var(--font-family-paragraph);
    color: var(--text-color);
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  .item-details p.description {
    border-bottom: 2px solid #ccc;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }

  .content {
    grid-area: 2 / 2;
    text-align: left;
    margin: 0 0 1rem 1rem;
  }

  /* Responsive styles for tablet */
  @media (max-width: 992px) {
    .item-details {
      margin: 0 2rem;
      padding: 1.5rem;
    }
    
    .item-details h1 {
      font-size: 2rem;
    }
  }

  /* Responsive styles for mobile */
  @media (max-width: 768px) {
    .item-details {
      grid-template-columns: 1fr; /* Single column on mobile */
      margin: 0 1rem;
      padding: 1rem;
    }

    .item-details img {
      grid-area: 2 / 1;
    }

    .content {
      grid-area: 3 / 1; /* Move content below image on mobile */
      margin: 1rem 0 0 0;
    }

    .item-details h1 {
      grid-area: 1 / 1;
      font-size: 1.8rem;
    }

    .item-details p {
      font-size: 1rem;
    }
  }



  .not-found {
    text-align: center;
    padding: 2rem;
    color: var(--primary-color);
  }


  .back-arrow {
    display: inline-flex;
    align-items: center;
    margin: 1rem 0 2rem 5rem;
    font-family: var(--font-family-paragraph);
    text-decoration: none;
    color: var(--primary-color);
    font-size: 1.2rem;
    transition: transform 0.2s ease-in-out;
  }

  .back-arrow:hover {
    transform: translateX(-5px);
  }

  .arrow {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  /* Responsive styles for back arrow */
  @media (max-width: 992px) {
    .back-arrow {
      margin: 1rem 0 2rem 2rem;
    }
  }

  @media (max-width: 768px) {
    .back-arrow {
      margin: 1rem 0 1.5rem 1rem;
      font-size: 1.1rem;
    }
    
    .arrow {
      font-size: 1.3rem;
    }
  }
</style>