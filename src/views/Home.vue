<template>

  <div class="home">
    <h1 class="is-size-2">Projects</h1>
    <br>
  <div class="columns">
    <div class="column">
      <PetterComp/>
    </div>
    <div class="column">
      <DashboardComp/>
    </div>
    <div class="column">
      <SpellCasterComp/>
    </div>
  </div>

    <div class="columns">
      <div class="column">
        <PasswordGeneratorComp/>
      </div>
      <div class="column">
        <PortfolioComp/>
      </div>
    </div>
</div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DashboardComp from '@/components/DashboardComp.vue'
import PetterComp from '@/components/PetterComp.vue'
import SpellCasterComp from '@/components/SpellCasterComp.vue'
import PasswordGeneratorComp from '@/components/PasswordGeneratorComp.vue'
import PortfolioComp from '@/components/PortfolioComp.vue'

@Component({
  components: {
    PetterComp,
    SpellCasterComp,
    DashboardComp,
    PasswordGeneratorComp,
    PortfolioComp
  }
})
export default class Home extends Vue {}
</script>
