import { PeopleLayout } from '@/components/PeopleLayout'
import Chet from '@/images/photos/Chet.jpg'

const person = {
  name: 'Chet Reeves',
  role: 'Founder / Board Chair',
  imageUrl: Chet,
  bio: 'My name is Chet Reeves and I am the founder of Y.E.S.S and Dead Bishops Charity Chess Club. Coming from a broken home, I realize the importance of having positive role models.  I’m a life long skater and living proof of the impact that skating and the skate community can have on a young person’s life.  Skating connects people from many different socio-economic backgrounds and teaches that even if you fall, you can pick yourself back up and accomplish anything.  My passion is to make this dream become a reality, one that will leave a positive impact on the coming generations',
  link: 'ChetReeves',
  slug: 'ChetReeves',
}

function ChetReeves() {
  return <PeopleLayout person={person} />
}

export default ChetReeves
