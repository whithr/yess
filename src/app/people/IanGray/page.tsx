import { PeopleLayout } from '@/components/PeopleLayout'
import Ian from '@/images/photos/Ian.jpg'

const person = {
  name: 'Ian Gray',
  role: 'Treasurer',
  imageUrl: Ian,
  bio: 'My name is Ian Gray.  I’m a father to Declan and Milo and I grew up in Eugene.  As a parent, I’ve realized how important it is for kids to have a structure and safe places to go to after school.  We are fortunate to have many outdoor skate parks in the Eugene/Springfield area but we don’t have any indoor skate parks or places to kids to go when it’s cold and raining.  WJ Skate Park is a great addition to the community but at times can be unsafe for kids.  That’s why we need a safe place for kids that is free and will have a positive impact on them and society.',
  link: 'IanGray',
  slug: 'IanGray',
}

function IanGray() {
  return <PeopleLayout person={person} />
}

export default IanGray
