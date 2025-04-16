<script>
  // Import any components or data you need
  // const designProjects = [...]; // Add your projects data here
</script>

<section class="design-portfolio">
  <div class="section-header">
    <h1>My Designs</h1>
    <p>Creative design work across various mediums and styles</p>
  </div>

  <div class="category-filters">
    <button class="active">All</button>
    <button>Personall</button>
    <button>Commercial</button>
  </div>

  <div class="grid">
    <!-- Design items will be populated here -->
    <div class="design-item">
      <div class="image-placeholder">
        <p>Head</p>
        <img src="/head.png" alt="Design 1" />
      </div>
      <div class="overlay">
        <h3>Design Project</h3>
        <p>Type: UI/UX</p>
      </div>
      <div class="work-caption">
        <h3>Mountain Vista</h3>
        <p>Nature</p>
      </div>
    </div>

    <div class="item">
      <div class="image-placeholder">
        <p>Head</p>
        <img src="/design/head.png" alt="Design 1" />
      </div>
      <div class="overlay">
        <h3>Design Project</h3>
        <p>Type: UI/UX</p>
      </div>
    </div>

    <div class="item">
      <div class="image-placeholder">
        <p>Head</p>
        <img src="/design/head.png" alt="Design 1" />
      </div>
      <div class="overlay">
        <h3>Design Project</h3>
        <p>Type: UI/UX</p>
      </div>
    </div>
    <div class="item">
      <div class="image-placeholder">
        <p>Head</p>
        <img src="/design/head.png" alt="Design 1" />
      </div>
      <div class="overlay">
        <h3>Design Project</h3>
        <p>Type: UI/UX</p>
      </div>
    </div>

  </div>
</section>

<style>
  /* Scoped styles for design section */
  .design-portfolio { 
    padding: 1rem;
    max-width: 75%;
    margin: 0 auto;
    background-color: #000000;
  }

  .section-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .section-header h1 {
    font-size: 2.5rem;
    color: #d3d3d3;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .section-header p {
    font-size: 1.2rem;
    color: #666;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 15em;
    gap: 1rem;
  }

  .item {
    position: relative;
    overflow: hidden;
    border-radius: 5px;
  }

  .item.large {
    grid-column: span 2;
    grid-row: span 2;
  }

  .category-filters {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .category-filters button {
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

  .image-placeholder {
    height: 100%;
    width: 100%;
    background-color: #f0f5f9;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #5a6774;
    font-size: 1.2rem;
    transition: transform 0.4s ease;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    color: white;
    padding: 1.5rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }

  .item:hover .overlay {
    transform: translateY(0);
  }

  .item:hover .image-placeholder {
    transform: scale(1.05);
  }

  .overlay h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.4rem;
  }

  .overlay p {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.9;
  }

  /* Responsive adjustments */
  @media (max-width: 900px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
      grid-auto-rows: 200px;
    }

    .item.large {
      grid-column: auto;
      grid-row: auto;
    }

    .section-header h1 {
      font-size: 2rem;
    }
  }
</style>

