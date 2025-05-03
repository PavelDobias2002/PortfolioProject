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

<style>
  .item-details {
    display: grid;
    /*grid-template-columns: repeat(2, 0.5fr); /* 2 columns of equal width */
    grid-template-rows: repeat(3, auto); /* 2 rows with height based on content */
    gap: 1rem; /* Add spacing between grid items */
    padding: 2rem;
    margin: 0 0 5rem 5rem;
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
    border-bottom: 5px solid var(--primary-color); /* Add a border under the paragraph */

  }

  .item-details p {
    font-family: var(--font-family-paragraph);
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  .item-details p.description {
    border-bottom: 2px solid #ccc; /* Add a border under the paragraph */
    padding-bottom: 0.5rem; /* Add some spacing between the text and the border */
    margin-bottom: 1rem; /* Add spacing below the paragraph */
  }

  .content{
    grid-area: 2 / 2;
    text-align: left;
    margin: 0 0 1rem 1rem;
  }



  .not-found {
    text-align: center;
    padding: 2rem;
    color: var(--primary-color);
  }
</style>