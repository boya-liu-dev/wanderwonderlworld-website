// src/stores/siteContent.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loadContent, saveContent, uploadImage } from '@/firebase'

export const useSiteContent = defineStore('siteContent', () => {
  const data = ref({})
  const loaded = ref(false)
  const loading = ref(false)
  const saving = ref(false)

  async function hydrate(force = false) {
    if (loaded.value && !force) return
    loading.value = true
    try {
      const c = await loadContent()
      // 给一些缺省键，避免前台空指针
      data.value = {
        heroTitleZh: c.heroTitleZh ?? '迪拜私家团',
        heroTitleEn: c.heroTitleEn ?? 'Your Tour Expert in Dubai',
        priceAirportTransfer: typeof c.priceAirportTransfer === 'number' ? c.priceAirportTransfer : 190,
        homeHeroImage: c.homeHeroImage ?? '',
        // 
        ...c
      }
      loaded.value = true
    } finally { loading.value = false }
  }

  async function persist(patch = null) {
    saving.value = true
    try {
      const payload = patch ? patch : data.value
      await saveContent(payload)
      if (patch) Object.assign(data.value, patch)
    } finally { saving.value = false }
  }

  async function uploadAndSetImage(file, key, pathPrefix = 'images/site') {
    if (!file) return
    const url = await uploadImage(file, `${pathPrefix}/${key}_${Date.now()}.jpg`)
    await persist({ [key]: url })
    return url
  }

  return { data, loaded, loading, saving, hydrate, persist, uploadAndSetImage }
})
