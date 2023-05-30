class ContactProps {
  id: string
  name: string
  phone: string
  email: string
  favorite: boolean
  constructor(
    id: string,
    name: string,
    phone: string,
    email: string,
    favorite: boolean
  ) {
    this.id = id
    this.name = name
    this.phone = phone
    this.email = email
    this.favorite = favorite
  }
}

export default ContactProps
