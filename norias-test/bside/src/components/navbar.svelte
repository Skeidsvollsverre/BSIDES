<script>
function show(){
    console.log('clicked');
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.classList.toggle('open');
    }
    const navigation = document.querySelector('.navigation');
    if (navigation) {
        navigation.classList.toggle('active');
    }
}



</script>

<div class="navbar">
<div class="navigation">
<button class="hamburger"
 on:click={show}
 aria-label="Toggle menu">
    <div class="bar1 bar"></div>
    <div class="bar2 bar"></div>
    <div class="bar3 bar"></div>
</button>
<ul>
    <li>Menu Item 1</li>
    <li>Menu Item 2</li>
    <li>Menu Item 3</li>
</ul>
</div>

    <div class="links">
        <div class="link"><img src="/star.svg" alt=""> <div class="line"></div></div>
        <div class="link"><img src="/star.svg" alt=""> <div class="line"></div></div>
        <div class="link"><img src="/star.svg" alt=""> <div class="line"></div></div>
        <div class="link"><img src="/star.svg" alt=""> <div class="line"></div></div>
    </div>
</div>

<style>
 


    .links img:hover{
        background-color: transparent, white;
        transform: scale(1.2);
        transition: 0.5s;
        border-radius: 7px 7px;
    }
    .link img {
        color: white;
      
    }
    .navbar {
        height: 100vh;
        width: 80px;
        
    }


    .links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        color: white;

    }
    .navigation{
        position: fixed;
        right: -500px;
        width: 350px;
        height: 100%;
        background-color: #000;
        transition: .5s;
    }
    .navigation ul li{
        color: #fff;
        text-align: right;
        text-transform: uppercase;
        font-size: 1.5em;
        padding: 20px 30px;
        border-bottom: 1pt solid #252525;
    }
    .hamburger, .bar{
        position: fixed;
    }
    .hamburger{
        display: block;
        top: 5%;
        left: 95%;
        width: 30px;
        height: 30px;
        transform: translateY(-50%);
        border: 0;
        background-color: 0 0;
    }
    .bar{
        top: 3px;
        background: #000;
        width: 100%;
        height: 4px;
        transition: all .3s ease-in;
    }
    .bar2{
        top: 11px;
    }
    .bar3{
        top: 19px;
    }
    :global(.navigation.active){
        right: 0;
    }
    :global(.hamburger.open) .bar1{
        background-color: #fff;
        transform: rotate(45deg) translate(6px, 5px);
    }
    :global(.hamburger.open) .bar2{
        background-color: transparent;
    }
        :global(.hamburger.open) .bar3{
            background-color: #fff;
            transform: rotate(-45deg) translate(6px, -5px);
        }
    </style>
