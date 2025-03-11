<script>
    // Import components
    
</script>


<!-- Link to global styles -->
<link rel="stylesheet" href="/styles/global.css" />

<!-- Header -->
<header>
 
  <nav>
        <ul>
            <li><a href="/design">Design</a></li>
            <li><a href="/artwork">Art</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
</header>

<!-- Page Content -->
<main>
    <slot />
</main>

<!-- Footer -->
<footer>
    <p>&copy; 2025 My Svelte App. All rights reserved.</p>
</footer>


<style>
    
    header {
        background-color: #660000;
        padding: 2rem;
        text-align: center;
    }
    
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


    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
    }
    
    nav ul li {
        margin: 0 25px;
    }
    
    nav ul li a {
        font-family: 'Pixelify Sans';
        font-size: large;
        text-decoration: none;
        color: white;
        font-weight: bold;
    }
    
    main {
        padding: 2rem;
        text-align: center;
    }
    
    footer {
        background-color: #343a40;
        color: white;
        text-align: center;
        padding: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>