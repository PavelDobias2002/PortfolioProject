<script>
    // Import components
    import { Header, Navigation, Footer, Card } from "$lib";
</script>


<!-- Link to global styles -->
<link rel="stylesheet" href="/styles/global.css" />

<!-- Header -->
<Header />

<!-- Page Content -->
<main>
    <slot />
</main>

<!-- Footer -->
<Footer />


<style>
* {
  box-sizing: border-box;
}
    
    main {
        padding: 2rem;
        text-align: center;
    }
    

    .image{
    height: 15em;
      background-color: #dddddd;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #546e7a;
      font-size: 1.2rem;
    }
    
    @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  :global(body) {
    margin: 0;
    min-height: 100vh;
    background: linear-gradient(to bottom, 
        #bdbdbd, /* Beige/cream color at top (brightest) */
        #8f8f8f, /* Light parchment */
        #3a3a3a, /* Tan/light sepia */
    );
    background-size: 200% 200%;
    animation: gradientAnimation 30s ease-in-out infinite;
    color: #000000;
  }

</style>