'use client'

import Image from 'next/image'
import { SimpleLayout } from '@/components/SimpleLayout'
import Chet from '@/images/photos/Chet.jpg'
import Brijit from '@/images/photos/Brijit.jpg'
import Daniel from '@/images/photos/Daniel.jpg'
import Hunter from '@/images/photos/Hunter.jpg'
import Ian from '@/images/photos/Ian.jpg'
import Tara from '@/images/photos/Tara.jpg'
import Link from 'next/link'
import { Button } from '@/components/Button'

const people = [
  {
    name: 'Chet Reeves',
    role: 'Founder / Board Chair',
    imageUrl: Chet,
    bio: 'My name is Chet Reeves and I am the founder of Y.E.S.S and Dead Bishops Charity Chess Club. I currently work at Tactics Skateshop.  Coming from a broken home, I realize the importance of having positive role models.  I’m a life long skater and living proof of the impact that skating and the skate community can have on a young person’s life.  Skating connects people from many different socio-economic backgrounds and teaches that even if you fall, you can pick yourself back up and accomplish anything.  My passion is to make this dream become a reality, one that will leave a positive impact on the coming generations',
    link: 'ChetReeves',
  },
  {
    name: 'Tara Garkow',
    role: 'Board Secretary / Vice Chair',
    imageUrl: Tara,
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
    link: 'TaraGarkow',
  },
  {
    name: 'Ian Gray',
    role: 'Treasurer',
    imageUrl: Ian,
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
    link: 'IanGray',
  },
  {
    name: 'BriJit Blair-Jenkins',
    role: 'Board Member',
    imageUrl: Brijit,
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
    link: 'BriJitBlairJenkins',
  },
  {
    name: 'Daniel Jenkins',
    role: 'Board Member',
    imageUrl: Daniel,
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
    link: 'DanielJenkins',
  },
  {
    name: 'Hunter Nelms',
    role: 'Board Member',
    imageUrl: Hunter,
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
    link: 'HunterNelms',
  },
]

export default function People() {
  return (
    <SimpleLayout
      title="Our team"
      intro="We are passionate about what we do and dedicated to delivering the best results for the youth of Eugene, Oregon."
    >
      <div className="">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-2 lg:px-2">
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-2 gap-y-16 sm:grid-cols-2 md:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <Link href={`/people/${person.link}`} key={`link-${person.name}`}>
                <li
                  key={person.name}
                  className="rounded-xl p-3 shadow-md transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-xl dark:bg-zinc-800/50"
                >
                  <Image
                    className="aspect-[3/2] w-full rounded-2xl object-cover"
                    src={person.imageUrl}
                    alt=""
                  />
                  <h3 className="mt-4 text-lg font-semibold leading-8 tracking-tight text-zinc-800 dark:text-zinc-100">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    {person.role}
                  </p>
                </li>
              </Link>
            ))}
          </ul>
          <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLSd-PuHD4QOK0iiZ9bb-dZQNON9Ll3oJar7mfcMw_q0U23kZ7Q/viewform?usp=header"
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-[300px]"
          >
            Apply to be a board member!
          </Button>
        </div>
      </div>
    </SimpleLayout>
  )
}
