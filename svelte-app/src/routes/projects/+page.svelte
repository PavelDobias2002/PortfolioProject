<script>
  // Import any components or data you need
  // const photoCategories = [...]; // Add your photo categories here
</script>

  <section class="projects-portfolio">
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
  
    <div class="project-grid">
      <!-- Project cards will be populated here -->
      <div class="project-card">
        <div class="image-placeholder">
          <p>Project Image 1</p>
          <!-- <img src="/webdev/project1.jpg" alt="Project 1" /> -->
        </div>
        <div class="project-info">
          <h3>Buzzz VS The Harvesters</h3>
          <p>A game created for Games Fleadh 2025, using Raylib Software Library, winning an award for Best Original Assets</p>
        </div>
      </div>
  
      <div class="project-card">
        <div class="image-placeholder">
          <p>Project Image 2</p>
          <!-- <img src="/webdev/project2.jpg" alt="Project 2" /> -->
        </div>
        <div class="project-info">
          <h3>Sleeping with The Fishes</h3>
          <p>A game created for Global Game Jam 2025 using Unity</p>
        </div>
      </div>
  
      <div class="project-card">
        <div class="image-placeholder">
          <p>Project Image 3</p>
          <!-- <img src="/webdev/project3.jpg" alt="Project 3" /> -->
        </div>
        <div class="project-info">
          <h3>Bio-Farmer</h3>
          <p>Webgame created in VS Code, using html, css and js.</p>
        </div>
      </div>
  
      <div class="project-card">
        <div class="image-placeholder">
          <p>Project Image 4</p>
          <!-- <img src="/webdev/project4.jpg" alt="Project 4" /> -->
        </div>
        <div class="project-info">
          <h3>Project Title</h3>
          <p>Short description of the project and technologies used</p>
        </div>
      </div>
    </div>
  </section>
  
  <style>
    /* Scoped styles for webdev section */
    .projects-portfolio {
      padding: 2rem;
      max-width: 75%;
      margin: 0 auto;
    }
  
    .section-header {
      text-align: center;
      margin-bottom: 2rem;
    }
  
    .section-header h1 {
      font-size: 2.5rem;
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }
  
    .section-header p {
      font-size: 1.2rem;
      color: #7f8c8d;
    }
  
    .project-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
    }
  
    .project-card {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background-color: #fff;
    }
  
    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
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
      height: 200px;
      background-color: #e0f2f1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #546e7a;
      font-size: 1.2rem;
    }
  
    .project-info {
      padding: 1.5rem;
    }
  
    .project-info h3 {
      margin: 0 0 0.5rem 0;
      color: #2c3e50;
      font-size: 1.4rem;
    }
  
    .project-info p {
      margin: 0;
      color: #7f8c8d;
      font-size: 1rem;
      line-height: 1.5;
    }
  
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .project-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
      }
  
      .section-header h1 {
        font-size: 2rem;
      }
    }
  
    @media (max-width: 480px) {
      .projects-portfolio {
        padding: 1rem;
      }
  
      .project-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>