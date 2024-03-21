export type APIResponse = {
  games: Game[]
  developers: Developer[]
  publishers: Publisher[]
  genres: Genre[]
}

export type Game = {
  id: number
  title: string
  genres: number[]
  publisher: number
  description: string
  developer: number
  coverImage: string
}

export type Developer = {
  id: number
  name: string
}

export type Publisher = {
  id: number
  name: string
}

export type Genre = {
  id: number
  name: string
}

export type User = {
  username: string
  avatar: string
  frame: string
  status: string
  lastSeen: string
  games: number
  name: string
  wallet: number
  level: number
  place: string
  currency: string
}
