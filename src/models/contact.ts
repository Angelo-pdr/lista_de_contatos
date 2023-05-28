class Contact {
  id: number
  name: string
  phone: string
  email: string
  favorites: boolean

  constructor(
    id: number,
    name: string,
    phone: string,
    email: string,
    favorites: boolean
  ) {
    this.id = id
    this.name = name
    this.phone = phone
    this.email = email
    this.favorites = favorites
  }
}

export default Contact
