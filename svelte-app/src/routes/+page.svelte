<script>
  import Gallery from '$lib/components/Gallery.svelte';
  import { base } from '$app/paths';
</script>

<div class="home-layout">
  <aside class="profile-panel">
    <!-- <div class="logo">
      <img src="{base}/logoRed-Black.png" alt="Pavel Dobias logo" />
    </div> -->

    <h1>Pavel Dobias</h1>
    <p class="intro">Artist, designer, and game designer/developer looking to learn new things.</p>

    <div class="contact-details">
      <h2>Contact</h2>
      <p><b>Email</b><br /><a href="mailto:dobias.parez@gmail.com">dobias.parez@gmail.com</a></p>
      <p><b>Phone</b><br /><a href="tel:+420724259929">+420 724 259 929</a><br /><a href="tel:+353874878524">+353 87 487 8524</a></p>
    </div>

    <nav aria-label="Profile links">
      <ul class="social-links">
        <li><a href="{base}/CV" aria-label="View CV"><img src="{base}/cvredbrightsmaller.png" alt="" /></a></li>
        <li><a href="https://github.com/PavelDobias2002" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><img src="{base}/github-logo-logo.webp" alt="" /></a></li>
        <li><a href="https://www.linkedin.com/in/pavel-dobias-789060292/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src="{base}/LinkedInLogo.webp" alt="" /></a></li>
        <li><a href="https://codeberg.org/PavelDobias" target="_blank" rel="noopener noreferrer" aria-label="Codeberg"><img src="{base}/codeberglogo.webp" alt="" /></a></li>
      </ul>
    </nav>
  </aside>

  <section class="gallery-panel" aria-label="Portfolio gallery">
    <!-- <div class="scroll-arrow-container" aria-hidden="true">
      <div class="scroll-arrow">
        <span>Scroll to explore</span>
        ↓
      </div>
    </div> -->
    <Gallery />
  </section>
</div>



<style>
  .home-layout {
    display: grid;
    grid-template-columns: minmax(250px, 0.34fr) minmax(0, 1fr);
    align-items: start;
    gap: clamp(2rem, 5vw, 5rem);
    max-width: 1600px;
    margin: 0 auto;
    text-align: left;
  }

  .profile-panel {
    position: sticky;
    top: 2rem;
    min-width: 0;
    height: calc(100vh - 4rem);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .logo {
    width: min(100%, 240px);
    margin-bottom: 1.5rem;
  }

  .logo img {
    display: block;
    width: 100%;
    height: auto;
  }

  .profile-panel h1 {
    font-family: var(--font-family-heading);
    font-size: clamp(1.8rem, 2.5vw, 2.5rem);
    font-weight: 400;
  }

  .intro,
  .contact-details {
    font-family: var(--font-family-paragraph);
    font-size: 1.1rem;
    line-height: 1.5;
  }

  .contact-details {
    margin-top: 1rem;
  }

  .contact-details h2 {
    font-family: var(--font-family-heading);
    font-size: 1.2rem;
    font-weight: 400;
  }

  .contact-details a {
    overflow-wrap: anywhere;
  }

  .social-links {
    display: flex;
    align-items: center;
    gap: 1rem;
    list-style: none;
    margin-top: 1.5rem;
  }

  .social-links a {
    display: block;
  }

  .social-links img {
    display: block;
    width: 2.75rem;
    height: 2.75rem;
    object-fit: contain;
  }

  .gallery-panel {
    min-width: 0;
  }

  .scroll-arrow-container {
    display: flex;
    justify-content: center;
    margin: 1rem 0 2rem;
    width: 100%;
  }

  .scroll-arrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
    color: var(--primary-color);
    animation: bounce 2s infinite;
  }

  .scroll-arrow span {
    margin-bottom: 0.5rem;
    font-family: var(--font-family-paragraph);
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-5px); }
    60% { transform: translateY(-2.5px); }
  }

  @media (max-width: 900px) {
    .home-layout {
      grid-template-columns: minmax(210px, 0.35fr) minmax(0, 1fr);
      gap: 1.5rem;
    }

    .logo {
      width: min(100%, 190px);
    }

    .intro,
    .contact-details {
      font-size: 1rem;
    }

    .social-links {
      gap: 0.65rem;
    }

    .social-links img {
      width: 2.25rem;
      height: 2.25rem;
    }
  }

  @media (max-width: 700px) {
    .home-layout {
      display: block;
    }

    .profile-panel {
      position: static;
      height: auto;
      display: block;
      text-align: center;
      margin: 0 auto 2rem;
      max-width: 34rem;
    }

    .logo {
      width: min(45vw, 180px);
      margin: 0 auto 1rem;
    }

    .profile-panel h1 {
      font-size: 1.6rem;
    }

    .contact-details {
      margin-top: 1rem;
    }

    .social-links {
      justify-content: center;
    }

    .scroll-arrow-container {
      margin: 1rem 0 1.5rem;
    }
  }
</style>
