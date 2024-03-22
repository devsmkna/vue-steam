import { ref } from 'vue'
import { useFetch } from '@vueuse/core'
import type { Message, User } from '@/common/types'
import { lang as globalLang } from '@/common/lang'

export const user = ref<User | null>(null)
export const currentLang = ref<string>('en')
export const lang = ref<Message>(globalLang[currentLang.value])

export const { data: hero, error: heroError } = useFetch('http://localhost:3000/hero').get().json()
export const { data: price, error: priceError } = useFetch('http://localhost:3000/price')
  .get()
  .json()
export const { data: games, error: gamesError } = useFetch('http://localhost:3000/games')
  .get()
  .json()
export const { data: developers, error: developersError } = useFetch(
  'http://localhost:3000/developers'
)
  .get()
  .json()
export const { data: publishers, error: publishersError } = useFetch(
  'http://localhost:3000/publishers'
)
  .get()
  .json()
export const { data: genres, error: genresError } = useFetch('http://localhost:3000/genres')
  .get()
  .json()

export const login = () => {
  user.value = {
    username: 'exmachnadeus',
    avatar:
      'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1276790/ce86cb00f0a516fe1d51018476773eefd3041b43.gif',
    frame:
      'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1091500/97dea7758a862879fabbcdc9f80673dd662219ac.png',
    status: 'online',
    lastSeen: '2 days ago',
    games: 0,
    name: 'Davide Visco',
    wallet: 0.06,
    level: 7,
    place: 'Catania, Italy',
    currency: '€'
  }
}

export const logout = () => {
  user.value = null
}

export const changeLanguage = (newLang: string) => {
  currentLang.value = newLang
  lang.value = globalLang[currentLang.value]
}
