import './style.css'

document.querySelector('#app').innerHTML = `
<header class="site-header"><a class="mark" href="#top">YN<span>.</span></a><nav><a href="#work">Work</a><a href="#about">About</a><a class="nav-contact" href="mailto:hello@example.com">Let's talk <span>&#8599;</span></a></nav></header>
<main id="top">
  <section class="hero"><p class="eyebrow">Designer &amp; developer / Based in your city</p><h1>I make digital<br><em>things matter.</em></h1><div class="hero-foot"><p>Thoughtful interfaces, expressive brands, and useful products for people with something to say.</p><a class="arrow-link" href="#work">See selected work <span>&#8595;</span></a></div></section>
  <section id="work" class="work-section"><div class="section-heading"><p class="eyebrow">01 / Selected work</p><h2>A few things I have<br><em>helped bring to life.</em></h2></div><div class="project-grid">
    <article class="project project-large"><div class="project-art art-coral"><span>01</span><strong>Northstar</strong></div><div class="project-meta"><h3>Northstar Journal</h3><p>Editorial platform / Product design</p><a href="#contact">View project &#8599;</a></div></article>
    <article class="project"><div class="project-art art-blue"><span>02</span><strong>Common<br>Ground</strong></div><div class="project-meta"><h3>Common Ground</h3><p>Community app / Art direction</p><a href="#contact">View project &#8599;</a></div></article>
    <article class="project"><div class="project-art art-yellow"><span>03</span><strong>Field<br>Notes</strong></div><div class="project-meta"><h3>Field Notes</h3><p>Identity system / Web design</p><a href="#contact">View project &#8599;</a></div></article>
  </div></section>
  <section id="about" class="about-section"><p class="eyebrow">02 / A little about me</p><div><h2>The best work lives<br>between <em>curiosity</em><br>and clarity.</h2><p class="about-copy">I am Your Name, a multidisciplinary designer and developer who turns complex ideas into clear, memorable experiences. I care about the details, the big picture, and making work that earns its place in the world.</p><div class="skills"><span>Brand identity</span><span>Web design</span><span>Creative development</span><span>Strategy</span></div></div></section>
  <section id="contact" class="contact-section"><p class="eyebrow">03 / Start a conversation</p><h2>Have a good idea?<br><em>Let's make it real.</em></h2><a class="contact-email" href="mailto:hello@example.com">hello@example.com <span>&#8599;</span></a></section>
</main><footer><span>Your Name &copy; 2026</span><div><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub &#8599;</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn &#8599;</a></div></footer>`
