import { PeopleLayout } from '@/components/PeopleLayout'
import Daniel from '@/images/photos/Daniel.jpg'

const person = {
  name: 'Daniel Jenkins',
  role: 'Board Member',
  imageUrl: Daniel,
  bio: 'My name is Daniel Jenkins, I am an artist, musician and a punk rock advocate that has performed various roles in the mental health field for well over a decade. I grew up in a family rife with substance abuse, physical/mental abuse and gang violence. I was houseless for a number of years, spent some time locked up and survived my own addictions and mental health. My goal is to make daily amends by sharing my privilege and experience with others in hopes to motivate them and show them that they can.',
  link: 'DanielJenkins',
  slug: 'DanielJenkins',
}

function DanielJenkins() {
  return <PeopleLayout person={person} />
}

export default DanielJenkins
