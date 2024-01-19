import { PeopleLayout } from '@/components/PeopleLayout'
import Hunter from '@/images/photos/Hunter.jpg'

const person = {
  name: 'Hunter Nelms',
  role: 'Board Member',
  imageUrl: Hunter,
  bio: 'Hunter Nelms is a formerly incarcerated person in long term recovery. He has since then become a CADC 2 and CRM 2, working as a alcohol and drug counselor, and most recently as a Administrative Peer Supervisor at a nonprofit recovery center he is also a founding board member of. He lives in the same neighborhood as Y.E.S.S. and is passionate about this project.',
  link: 'HunterNelms',
  slug: 'HunterNelms',
}

function HunterNelms() {
  return <PeopleLayout person={person} />
}

export default HunterNelms
