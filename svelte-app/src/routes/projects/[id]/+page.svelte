<script>
  import { page } from '$app/stores';
  import { allItems } from '$lib/data/galleryData.js';
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  
  // Get the ID from the URL parameter
  $: id = $page.params.id;
  
  // Find the item in the galleryData based on ID
  // Use string comparison to ensure proper matching
  $: item = allItems.find(i => String(i.id) === String(id));
  
  // Image carousel state
  let currentImageIndex = 0;
  
  // Get all available images for the item
  $: images = item ? 
      [item.image, item.image2, item.image3, item.image4, item.image5]
      .filter(img => img) : []; // Filter out undefined/null images
  
  // Navigation functions
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  
  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  }
  
  // Log for debugging
  $: console.log('ID from URL:', id);
  $: console.log('Found item:', item);
  $: console.log('Available images:', images);
</script>



<div class="item-details">
  {#if item}
    <h1>{item.title}</h1>
    <div class="carousel">
      {#if images.length > 0}
        <div class="carousel-container">
          <img 
            transition:fade={{ duration: 300 }}
            class="carousel-image" 
            src="{base}{images[currentImageIndex]}"
            alt={`${item.title} - Image ${currentImageIndex + 1}`} 
          />
          
          <!-- Image Counter -->
          <div class="image-counter">
            {currentImageIndex + 1} / {images.length}
          </div>
          
          <!-- Navigation Buttons -->
          {#if images.length > 1}
            <button class="carousel-btn prev-btn" on:click={prevImage}>
              <span>←</span>
            </button>
            <button class="carousel-btn next-btn" on:click={nextImage}>
              <span>→</span>
            </button>
          {/if}
        </div>
      {/if}
    </div>
    <div class="content">
    <p class="description">{item.content}<br><br><b>Description: </b> {item.description}</p>
    
    
    {#if item.software}
      <p><b>Software:</b> {item.software}</p>
    {/if}
    {#if item.style}
      <p><b>Style:</b> {item.style}</p>
    {/if}
    {#if item.date}
      <p><b>Date:</b> {item.date}</p>
    {/if}
    {#if item.link}
      <p><a href={item.link} target="_blank" rel="noopener noreferrer"><b>Game Link</b></a></p>
    {/if}
    </div>
  
  {:else}
    <div class="not-found">
      <h1>Item Not Found</h1>
      <p>The item you are looking for does not exist.</p>
    </div>
  {/if}
</div>

<a href="{base}/" class="back-arrow" aria-label="Return to homepage">
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

  .carousel {
    grid-area: 2 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
  }

  .carousel-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-image {
    max-width: 40rem;
    height: auto;
    border-radius: 10px;
    object-fit: contain;
  }

  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    font-family: var(--font-family-paragraph);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s, background-color 0.3s;
    z-index: 5;
  }

  .carousel-btn:hover {
    opacity: 1;
    background-color: var(--primary-color);
  }

  .prev-btn {
    left: 10px;
  }

  .next-btn {
    right: 10px;
  }

  .image-counter {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.8rem;
    font-family: var(--font-family-paragraph);
    z-index: 5;
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
    font-size: 1.5rem;
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
      margin: 0 1rem;
      padding: 1rem;
    }

    .carousel {
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
    
    .carousel-btn {
      width: 35px;
      height: 35px;
      font-size: 1.2rem;
    }
  }



  .not-found {
    text-align: center;
    padding: 2rem;
    color: var(--primary-color);
  }


  .back-arrow {
    display: flex;
    align-items: left;
    margin: 1rem 0 2rem 5rem;
    font-family: var(--font-family-paragraph);
    text-decoration: none;
    color: var(--primary-color);
    font-size: 1.5rem;
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