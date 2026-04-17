<script lang="ts">
    let { background, title, subtitle, cta, link } = $props();
</script>

<section class="heading" style="--hero-bg: url('{background}')">
    <div>
        <h1 class="glowing-text">{title}</h1>
        <h2>{subtitle}</h2>
    </div>
</section>
<style>
.heading{
  height: 100vh;
  width: 100%;
  background-image: var(--hero-bg);
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0px 0px 200px 150px var(--bg);
  padding: 3%;
  display: flex;
  justify-content: start;
  align-items: end;
}
</style>