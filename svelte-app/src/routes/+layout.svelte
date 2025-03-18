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
    
    @font-face {
    font-family: 'Pixelify Sans';
    font-style: normal;
    font-weight: 400;
    font-display: block;
    src: url(https://design.penpot.app/assets/by-id/69c8f311-224c-4f5f-bd76-3927ee1f3017) format('woff');
  }



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
    
</style>