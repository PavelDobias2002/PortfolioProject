<section class="homepage-portfolio">

    <div class="section-header">
        
        <div class="image">
            <img src="/logo.png" alt="Logo" />
        </div>
        
      </div>

    <div class="grid">
        <div class="card">
            <div class="image">
                <img src="/head.png" alt="Logo" />
                <a href="/projects">Projects</a>
            </div>
        </div>

        <div class="card">
            <div class="image">
                <img src="/head.png" alt="Logo" />
                <a href="/design">Design</a>
            </div>
        </div>

        <div class="card">
            <div class="image">
                <img src="/head.png" alt="Logo" />
                <a href="/artwork">Art</a>
            </div>
        </div>
    </div>

</section>

<style>
    .homepage-portfolio{
        padding: 2rem;
        max-width: 75%;
        margin: 0 auto;
    }

    .section-header{
        text-align: center;
        margin-bottom: 2rem;
    }

    .section-header h1 {
      font-size: 2.5rem;
      color: #b3b3b3;
      margin-bottom: 0.5rem;
    }
  
    .section-header p {
      font-size: 1.2rem;
      color: #7f8c8d;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
    }
  
    .card {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background-color: #fff;
    }
  
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }

    .image{
    max-height: 20em;
      background-color: #000000;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #546e7a;
      font-size: 1.2rem;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
      }
  
      .section-header h1 {
        font-size: 2rem;
      }
    }
  
    @media (max-width: 480px) {
      .homepage-portfolio {
        padding: 1rem;
      }
  
      .grid {
        grid-template-columns: 1fr;
      }
    }
</style>