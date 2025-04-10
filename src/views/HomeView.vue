<script setup>
import { ref } from "vue"
import Sidebar from "../components/Sidebar.vue"
import NoteForm from "../components/NoteForm.vue"
import MainContent from "../components/MainContent.vue"

const showForm = ref(false)

const openForm = () => {
  showForm.value = true
}

const closeForm = () => {
  showForm.value = false
}
</script>

<template>
  <div class="bg-gray-100">
    <div class="flex w-full gap-6 pt-8">
      <Sidebar @showForm="openForm" />

      <div class="flex-1 overflow-hidden rounded-xl bg-white">
        <MainContent />
      </div>
    </div>
    <NoteForm v-if="showForm" @close="closeForm" />
  </div>
</template>
