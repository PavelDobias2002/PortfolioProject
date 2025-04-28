<script>
    export let title = "Card Title";
    export let description = "This is a brief description of the card";

</script>

<!-- Card container -->
<div class = "card">
    <!-- Card img -->
    <img src = "/head.png" alt = "cardImg">

    <!-- Card content -->
    <div class = "content"> 
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
</div>

<style>
    .card
    {
        background: rgb(0, 0, 0);
        border-radius: 10px; /* Rounded corners */
        border: 2px solid #660000;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        overflow: hidden;
        width: 280px;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card > img
    {
        width: 100%; /*responsive width*/
        height: auto;   /*responsive ratio*/
        border-radius: 8px 8px 0 0; /*Round only top corners*/
    }

    .content
    {
        padding: 1.5rem;    /*padding for spacing*/
    }

    .content h2 /*specific styling for headings*/
    {
        font-family: 'Special Gothic Expanded One', sans-serif;
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
    }

    .content p /*specific styling for paragraphs*/
    {
        font-family: 'Special Gothic', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        color: white;
    }

    .content h2::before /*pseudo-element: adds a thin underline before the card title*/
    {
        content: "";
        display: block;
        width: 40%;
        height: 2px;
        background: white;
        margin: 0 auto 10px auto;
        transition: width 0.3s ease-in-out;
    }

    .card:hover .content h2::before /*When card is hovered, expand the decorative effect to 80%*/
    {
        width: 80%;
        transform: translateY(-5px);
    }
</style>