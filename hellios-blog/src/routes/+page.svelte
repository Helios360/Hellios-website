<script lang="ts">
    import type { PageProps } from "./$types";
    let { data }: PageProps = $props();
</script>
<section class="heading">
    <div>
        <h1 class="glowing-text">HELLIOS</h1>
        <h2>Follow me on my journey to freedom with CS :D !</h2>
    </div>
</section>
<div class="main">
<section class="about-me">
    <div></div>
    <div>
        <h2 class="glowing-text2">About me</h2> 
        <p>
            I am not going to reveal everything about myself cause I'm paranoid but 
            I'm willing to be friendly for the lols of letting you use my tools 
            (please I don't want to work for nothing) because I like sharing you know like... humans, good 
            humans... anyway, I'm more into complicated projects like NLS and I LOVE open-source because 
            I can't trust third parties (f my parano) as long as it's running on my machine only I'm good, 
            I use AI for answers sometimes because it would dumb not to use
            it if the concurency does and thanks to our lord and savior llama and deepseek, we can run them 
            locally which super duper cool in my opinion... anyway here is this blog, hope you'll like it :3
        </p>
    </div>
</section>
<section class="about-me2">
    <div>
        <h2 class="glowing-text2">About me again...</h2>
        <div class="socials">
            <a href="https://github.com/Helios360">
                <p>Helios360</p>
                <svg fill="white" width="80" height="80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m3.163 21.783h-.093a.5.5 0 0 1-.382-.14.5.5 0 0 1-.14-.372v-1.406q.01-.701.01-1.416a3.7 3.7 0 0 0-.151-1.028 1.83 1.83 0 0 0-.542-.875 8 8 0 0 0 2.038-.471 4.05 4.05 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.8 6.8 0 0 0 .3-2.13 4.1 4.1 0 0 0-.26-1.476 3.9 3.9 0 0 0-.795-1.284 2.8 2.8 0 0 0 .162-.582q.05-.3.05-.604 0-.392-.09-.773a5 5 0 0 0-.221-.763.3.3 0 0 0-.111-.02h-.11q-.346.004-.674.111a5 5 0 0 0-.703.26 7 7 0 0 0-.661.343q-.322.191-.573.362a9.6 9.6 0 0 0-5.143 0 14 14 0 0 0-.572-.362 6 6 0 0 0-.672-.342 4.5 4.5 0 0 0-.705-.261 2.2 2.2 0 0 0-.662-.111h-.11a.3.3 0 0 0-.11.02 6 6 0 0 0-.23.763q-.08.382-.081.773 0 .304.051.604t.16.582A3.9 3.9 0 0 0 5.702 10a4.1 4.1 0 0 0-.263 1.476 6.9 6.9 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.8 1.8 0 0 0-.452.633 3 3 0 0 0-.2.744 2.75 2.75 0 0 1-1.175.27 1.8 1.8 0 0 1-1.065-.3 2.9 2.9 0 0 1-.752-.824 3 3 0 0 0-.292-.382 2.7 2.7 0 0 0-.372-.343 1.8 1.8 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101q-.06.002-.12.01a.7.7 0 0 0-.162.02.4.4 0 0 0-.13.06.12.12 0 0 0-.06.1.33.33 0 0 0 .14.242q.14.111.232.171l.03.021q.2.155.382.333.169.148.3.33.136.178.231.381.11.2.231.463c.188.474.522.875.954 1.145.453.243.961.364 1.476.351q.262 0 .522-.03.258-.041.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0z"/>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/elias-treguier-5234b7242/">
                <p>I'd like to make a matrix server tho</p>
            </a>
        </div>
    </div>
    <div></div>
</section>
<section class="post-contain">
    {#each data.posts as post}
    <a href="/blog/{post.slug}"> 
        <span>
            <img src="{post.caption}" alt="windows 10">
            <h2 class="glowing-text2">{post.title}</h2>
        </span>
        <p>{post.excerpt}</p>
        <p>{post.date}</p>
    </a>
    {/each}
</section>
</div>