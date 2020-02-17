<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <a href="https://github.com/oniag/gerador-de-tweets" rel="noopener noreferrer" target="_blank">
            <img src="@/assets/img/github-icon.png" class="float-right"/>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped lang="scss">
  header {
    .container-fluid {
      .col-md-12 {
        padding-right: 0;
        img {
          transform: rotate(45deg);
          max-width: 50px;
          width: 50px;
        }
      }
    }
  }
</style>