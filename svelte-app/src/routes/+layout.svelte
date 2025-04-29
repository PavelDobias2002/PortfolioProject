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

</style>