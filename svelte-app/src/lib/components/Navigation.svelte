<nav class="nav">
    <ul>
        <li><a href="/" data-text="Home">Home</a></li>
        <li><a href="/" data-text="Gallery">Gallery</a></li>
        <li><a href="/" data-text="Contacts">Contacts</a></li>
    </ul>
</nav>

<!--
<nav class="nav">

    <ul>
        <li><a href="/" data-text="Projects">Projects</a></li>
        <li><a href="/" data-text="Art">Art</a></li>
        <li><a href="/" data-text="Design">Design</a></li>
        <li class="logo-spacer"></li>
        <li class="home-logo"><a href="/"><img src="/pdLogo.jpg" alt="Website Logo"></a></li>
        <li class="logo-spacer2"></li>
        <li><a href="https://github.com/PavelDobias2002"><img src="/cvredbrightsmaller.png" alt="CVicon" /></a></li>
        <li><a href="https://github.com/PavelDobias2002"><img src="/gitredbrightsmall.png" alt="GitHubIcon" /></a></li>
        <li><a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://ie.linkedin.com/in/pavel-dobias-789060292&ved=2ahUKEwjy_8-tl4KMAxWHUUEAHQNCAtoQFnoECBYQAQ&usg=AOvVaw06-nsywOiiTPqT1gHErbOe"><img src="/linkedinredbrightsmall.png" alt="LinkedInIcon" /></a></li>
    </ul>
    
</nav>
-->
<style>

    .nav {
        display: flex;
        width: 100%;
    }


    .home-logo {
        justify-content: center;
        align-items: center;
        
    }

    .home-logo img {
        
        width: 10rem;
        height: 8rem;
        object-fit: contain; /* Ensures the image scales proportionally */
    }

    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
    }

    nav ul li {
        margin: 0 15px;
    }
    
    nav ul li a {
        font-family: var(--font-family-paragraph);
        font-size: 1.5rem;
        font-weight: 400;
        font-style: bold;
        color: white;
    }

</style>
