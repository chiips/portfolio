<template>

  <div class="home">
  <div class="columns">
    <div class="column">
      <PetterComp/>
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
import PetterComp from '@/components/PetterComp.vue'
import SpellCasterComp from '@/components/SpellCasterComp.vue'
import PasswordGeneratorComp from '@/components/PasswordGeneratorComp.vue'
import PortfolioComp from '@/components/PortfolioComp.vue'

@Component({
  components: {
    PetterComp,
    SpellCasterComp,
    PasswordGeneratorComp,
    PortfolioComp
  }
})
export default class Home extends Vue {}
</script>
