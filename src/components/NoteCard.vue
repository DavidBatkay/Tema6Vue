<script setup>
const props = defineProps({
  note: Object
})

const emit = defineEmits(["delete"])
</script>

<template>
  <div
    class="rounded-xl p-4 shadow-sm hover:outline-2 hover:outline-gray-300"
    :class="{
      'bg-violet-200': note.label === 'Important',
      'bg-green-100': note.label === 'Work',
      'bg-blue-200': note.label === 'Personal',
      'bg-orange-100': note.label === 'Social'
    }"
  >
    <div class="mb-2 flex items-center justify-between">
      <div class="justify-left flex">
        <h3 class="font-semibold">{{ note.title }}</h3>
        <span
          class="my-2.5 ml-2 h-2 w-2 rounded-full"
          :class="{
            'bg-blue-600': note.label === 'Important',
            'bg-green-500': note.label === 'Work',
            'bg-blue-900': note.label === 'Personal',
            'bg-orange-500': note.label === 'Social'
          }"
        ></span>
      </div>
    </div>
    <p class="text-sm text-gray-600">{{ note.description }}</p>
    <div class="mt-4 flex items-center justify-between text-gray-600">
      <div class="flex gap-3">
        <button title="Favorite" class="hover:text-yellow-600">
          <i class="bi bi-star"></i>
        </button>
        <button @click="emit('delete', note.id)" title="Delete" class="hover:text-red-600">
          <i class="bi bi-trash"></i>
        </button>
      </div>
      <button title="Expand">
        <i class="bi bi-three-dots-vertical"></i>
      </button>
    </div>
  </div>
</template>
