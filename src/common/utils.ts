import { ref, type Ref } from 'vue'
import { useFetch } from '@vueuse/core'
import type { Genre, Message, User } from '@/common/types'
import { lang as globalLang } from '@/common/lang'
import type { APIResponseError, Hero, Price, Game, Developer, Publisher } from '@/common/types'
import router from '@/router'

export const user = ref<User | null>(null)
export const currentLang = ref<string>('en')
export const lang = ref<Message>(globalLang[currentLang.value])

export const {
  data: heroesDB,
  isFetching: heroesFetching,
  error: heroesError
}: {
  data: Ref<Hero[] | null>
  isFetching: Ref<boolean>
  error: Ref<APIResponseError | null>
} = await useFetch('http://localhost:3000/heroes', { timeout: 1000 }).json()

export const {
  data: pricesDB,
  isFetching: pricesFetching,
  error: pricesError
}: {
  data: Ref<Price[] | null>
  isFetching: Ref<boolean>
  error: Ref<APIResponseError | null>
} = await useFetch('http://localhost:3000/prices', { timeout: 1000 }).json()

export const {
  data: gamesDB,
  isFetching: gamesFetching,
  error: gamesError
}: {
  data: Ref<Game[] | null>
  isFetching: Ref<boolean>
  error: Ref<APIResponseError | null>
} = await useFetch('http://localhost:3000/games', { timeout: 1000 }).json()

export const {
  data: developersDB,
  isFetching: developersFetching,
  error: developersError
}: {
  data: Ref<Developer[] | null>
  isFetching: Ref<boolean>
  error: Ref<APIResponseError | null>
} = await useFetch('http://localhost:3000/developers', { timeout: 1000 }).json()

export const {
  data: publishersDB,
  isFetching: publishersFetching,
  error: publishersError
}: {
  data: Ref<Publisher[] | null>
  isFetching: Ref<boolean>
  error: Ref<APIResponseError | null>
} = await useFetch('http://localhost:3000/publishers', { timeout: 1000 }).json()

export const {
  data: genresDB,
  isFetching: genresFetching,
  error: genresError
}: {
  data: Ref<Genre[] | null>
  isFetching: Ref<boolean>
  error: Ref<APIResponseError | null>
} = await useFetch('http://localhost:3000/genres', { timeout: 1000 }).json()

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
  router.push('/')
}

export const logout = () => {
  user.value = null
}

export const changeLanguage = (newLang: string) => {
  currentLang.value = newLang
  lang.value = globalLang[currentLang.value]
}
