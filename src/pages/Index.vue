<template>
  <Layout>
    <ClientOnly>
      <header>header</header>
      <full-page ref="fullpage" id="fullpage">
        <div class="section">First section ...</div>
        <div class="section">
          <div class="slide">Slide 1</div>
          <div class="slide">Slide 2</div>
          <div class="slide">Slide 3</div>
          <div class="slide">Slide 4</div>
        </div>
      </full-page>
    </ClientOnly>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>
