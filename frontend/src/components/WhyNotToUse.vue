<template>
  <h2 id="ProfessionalAnalysis">{{ $t('professionalAnalysis.headline') }}</h2>
  <div class="box">
    <p>{{ $t('professionalAnalysis.section1') }}</p>
    <a class="button" href="https://shop.54gradsoftware.de/products/54-grad-analyse" target="_blank" rel="noreferrer">
      {{ $t('professionalAnalysis.button') }}
    </a>
  </div>
  <h2 id="WhyNotToUse">{{ $t('whyNotToUse.headline') }}</h2>
  <div class="box">
    <p>{{ $t('whyNotToUse.box1.section1') }}</p>
    <ul>
      <li>{{ $t('whyNotToUse.box1.section2.1') }}</li>
      <li>{{ $t('whyNotToUse.box1.section2.2') }}</li>
      <li>{{ $t('whyNotToUse.box1.section2.3') }}</li>
      <li>{{ $t('whyNotToUse.box1.section2.4') }}</li>
    </ul>
    <p>{{ $t('whyNotToUse.box1.section3') }}</p>
  </div>
  <h3>{{ $t('whyNotToUse.box2.headline') }}</h3>
  <div class="box">
    <p>
      {{ $t('whyNotToUse.box2.section1.1') }}<a
        href="https://google-webfonts-helper.herokuapp.com/fonts/roboto?subsets=latin" target="_blank" rel="noreferrer">Google Webfonts Helper</a><br>{{ $t('whyNotToUse.box2.section1.2') }}
    </p>
  </div>
  <h3>{{ $t('whyNotToUse.box3.headline') }}</h3>
  <div class="box">
    <p>
      {{ $t('whyNotToUse.box3.section1') }}
      <a href="https://webbkoll.dataskydd.net/en" target="_blank" rel="noreferrer">Webbkoll</a>
    </p>
  </div>
</template>


<style scoped lang="scss">
.box{
  border: 1px #aaa solid;
  border-radius: .5rem;
  padding: 1rem;
}
</style>
