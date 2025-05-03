<script>
    // Import components
    import { Header, Navigation, Footer } from "$lib";
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
    

</style>