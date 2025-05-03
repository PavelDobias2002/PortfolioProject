<script>
    // Import components
    import { Header, Navigation, Footer } from "$lib";
    import { base } from '$app/paths';
</script>


<!-- Link to global styles -->
<link rel="stylesheet" href="{base}/styles/global.css" />

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