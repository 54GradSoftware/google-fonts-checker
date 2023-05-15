<script setup>
import { ref } from 'vue';
import { supabase } from '../lib/supabase'
import ThrobberLoading from '@/components/ThrobberLoading.vue';

const email = ref(null)
const loading = ref(false)
const showErrorMessage = ref(false)
const showSuccessMessage = ref(false)

const supabaseSignUp = async () => {
  try {
    loading.value = true
    showErrorMessage.value = false
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
      options: {
        emailRedirectTo: (window.location.hostname === 'localhost' ? 'http://localhost:8080/de-DE/success': 'https://google-fonts-checker.54gradsoftware.de/de-DE/success')
      }
    })
    if (error) throw error
    showSuccessMessage.value = true
  } catch (error) {
    if (error instanceof Error) {
      showErrorMessage.value = true
    }
  } finally {
    loading.value = false
  }
}
</script>
<template>
      <section v-if="supabase" id="MoreInformation">
      <h3>Du willst mehr testen? Jetzt kostenlos auf dem laufenden bleiben</h3>
      Wir arbeiten an einer neuen Version des Google Fonts Checkers und wollen noch mehr testen. Melde dich jetzt an, um auf dem Laufenden zu bleiben.
      <div v-if="showSuccessMessage" class="alert success" role="alert">
        Die Registrierung hat funktioniert. Jetzt musst du nur noch deine E-Mail-Adresse bestätigen.
      </div>
      <div v-else>
        <div class="center-flex" v-if="loading">
          <ThrobberLoading/>
        </div>
        <form @submit.prevent="supabaseSignUp()" v-else>
          <label class="visually-hidden" for="emailInput">E-Mail-Adresse</label>
          <input v-model="email" type="email" id="emailInput" placeholder="deineEMail@adresse.de" />
          <button type="submit" :disabled="loading">Speichern</button>
        </form>
      </div>
      Du hast konkrete Wünsche, Ideen oder Feedback? Schreib uns eine <a href="mailto:kontakt+gfc@54gradsoftware.de">Email</a>!
      <div v-if="showErrorMessage" class="alert error" role="alert">
        Ein Fehler ist aufgetreten. Bitte versuche es noch einmal. Wenn der Fehler erneut auftritt, schicke uns eine E-Mail an kontakt@54gradsoftware.de.
      </div>
    </section>
</template>


<style scoped lang="scss">
.box {
  border: 1px #aaa solid;
  border-radius: .5rem;
  padding: 1rem;
}

input {
  padding: 1rem;
  border: 2px #aaa solid;
  border-radius: .5rem 0 0 .5rem;
  flex-grow: 1;
  min-width: 300px;
}

button {
  padding: 1rem;
  background-color: #0E57AA;
  border: 1px #0E57AA solid;
  color: #fff;
  border-radius: 0 .5rem .5rem 0;
  flex-grow: 1;
  max-width: 8rem;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
#MoreInformation{
  text-align: center;
}
.center-flex{
  display: flex;
  justify-content: center;
}
.alert{
  padding: 20px;
  color: white;
  &.error{
    background-color: #f44336;
  }
  &.success{
    background-color: #04AA6D;
  }
}
</style>