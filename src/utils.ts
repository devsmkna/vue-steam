import { ref } from 'vue'
import type { User } from '@/api/types'

export const user = ref<User | null>(null)

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
