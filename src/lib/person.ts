import { StaticImageData } from 'next/image'

interface Person {
  name: string
  role: string
  imageUrl: StaticImageData
  bio: string
  link: string
}

export interface PersonWithSlug extends Person {
  slug: string
}
