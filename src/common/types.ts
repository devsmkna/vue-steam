export type APIResponse = {
  hero: Hero[]
  price: Price[]
  games: Game[]
  developers: Developer[]
  publishers: Publisher[]
  genres: Genre[]
}

export type APIResponseError = {
  __v_isShallow: boolean
  __v_isRef: boolean
  _rawValue: string | null
  _value: string | null
}

export type Hero = {
  id: number
  gameId: number
  description: string
}

export type Price = {
  gameId: number
  price: number
  discountPercentage: number
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

export type Navigator = {
  store: string
  profile: string
  support: string
  chat: string
  community: string
  about: string
}

export type Message = {
  global: {
    install: string
    language: string
    login: string
    logout: string
    nogame: string
  }
  navigator: Navigator
  languages: {
    [key: string]: string
  }
  card: {
    free: string
    hero: {
      default: string
      [key: string]: string
    }
  }
  bread: {
    root: string
  }
  login: {
    username: string
    password: string
    button: string
  }
  game: {
    publisher: string
    developer: string
    buy: string
    play: string
  }
}
