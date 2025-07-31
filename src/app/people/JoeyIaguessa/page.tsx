import { PeopleLayout } from '@/components/PeopleLayout'
import Joey from '@/images/photos/Joey.jpg'

const person = {
  name: 'Joey Iaguessa',
  role: 'Board Member',
  imageUrl: Joey,
  bio: 'My name is Joey Iaguessa and I am a skateboarder from Springfield, Missouri. As a former youth instructor at Queen City Rock Camp teaching piano, I have seen firsthand how creative communities can inspire growth, confidence, and connection. I have been skateboarding for over 15 years, and I am passionate about the power of skateboarding to transform lives. I believe that skateboarding builds not only self-perseverance but also deep, lasting friendships through shared challenges and support. Now as part of YESS, I am excited to help create a safe, welcoming space where kids can explore new passions and discover the strength of community.',
  link: 'JoeyIaguessa',
  slug: 'JoeyIaguessa',
}

function JoeyIaguessa() {
  return <PeopleLayout person={person} />
}

export default JoeyIaguessa