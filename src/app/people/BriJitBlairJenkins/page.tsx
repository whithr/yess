import { PeopleLayout } from '@/components/PeopleLayout'
import Brijit from '@/images/photos/Brijit.jpg'

const person = {
  name: 'BriJit Blair-Jenkins',
  role: 'Board Member',
  imageUrl: Brijit,
  bio: "Hello there, my name is BriJit Blair-Jenkins, I am a punk rocker with a passion for social work. I am credentialed as an alcohol and drug counselor, and mental health specialist. I'm an advocate for at-risk youth, and I professionally support vulnerable populations in Eugene. I am dedicated to educating our community about harm reduction, behavioral health, and addictions resources. I organize large scale resource fairs and punk shows, bringing local providers directly to populations who need them. I have a history of being a homeless teenager, and got pregnant while living in a tent at age 17. I hope to motivate others with my lived experience; and help build something great for underprivileged individuals in our community.",
  link: 'BriJitBlairJenkins',
  slug: 'BriJitBlairJenkins',
}

function BriJitBlairJenkins() {
  return <PeopleLayout person={person} />
}

export default BriJitBlairJenkins
