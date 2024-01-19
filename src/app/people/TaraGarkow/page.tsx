import { PeopleLayout } from '@/components/PeopleLayout'
import Tara from '@/images/photos/Tara.jpg'

const person = {
  name: 'Tara Grakow',
  role: 'Board Secretary / Vice Chair',
  imageUrl: Tara,
  bio: 'Tara (she/her) has lived in Eugene most of her life and is always looking for ways to give back to her community. She has many years of volunteer and professional experience helping folks overcome barriers to housing, mental health care, and other needs to survive and thrive. She believes safety is a basic human right and that safe spaces build community and promote mental health. Tara is excited to join Y.E.S.S.’s mission to create an inclusive, safe space for young people in our community that will improve outcomes and increase opportunities for success.',
  link: 'TaraGrakow',
  slug: 'TaraGrakow',
}

function TaraGrakow() {
  return <PeopleLayout person={person} />
}

export default TaraGrakow
