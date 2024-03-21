# Vue-Steam

Vue Project for Steve Jobs Academy Course 21 Exam. In this project I try to recreate Steam website.

# Components

Header

- logo
- menu
  - negozio
  - comunità
  - profilo
  - chat
  - assistenza
- CTA
  - installa steam
  - visione famiglia
  - notifiche
  - profilo
    - nome
    - prezzo
    - avatar

NEGOZIO

Navbar

- Il tuo negozio (dropdown) + avatar
- novità e tendenze (dropdown)
- categorie (dropdown)
- negozio dei punti
- notizie
- laboratori
- searchbar
- CTA
  - lista dei desideri

HeroBanner

- children (video/image)

PriceBanner

- price
- discount
- discount percentage

GameCardFeatured

- media
- PriceBanner
  :hover
- media
- title
- review
- categories
- CTA (aggiungi al carrello)
- PriceBanner

GameCardCarousel

- list of GameCardFeatured

GameCard

- media
- PriceBanner
  :hover
- media
  :tooltip
- title
- releasedDate
- description
- review
- platform
- tags
- friends

Category

- media
- title

Footer
- TBD


PROFILE

AvatarIcon
- media
- frame

ProfileInfo
- username
- name
- place
- info
- ProfileLevel
- CTA (modifica profilo)

ProfileLevel
- level

ProfileBadge
- media
- title

ArchievementIcon
- media

ArchievementsProgressBar
- nb. of archievements
- total archievements
- list of ArchiementIcon

ProfileGameInfo
- media
- title
- hour of play
- last play
- ArchiementsProgressBar

Comments
- TBD

ProfileMenu
- status
- list of ProfileBadge
- menu
    - games
    - inventario
    - screenshot
    - video
    - oggetti workshop
    - recensioni
    - guide
    - immagini
- list of FriendItem

FriendItem
- media
- username
- name
- status
- level

Footer