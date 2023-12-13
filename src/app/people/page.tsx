import { type Metadata } from 'next'
import Image from 'next/image'
import { SimpleLayout } from '@/components/SimpleLayout'
import { SocialLink } from '@/components/SocialLink'
import { LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'
import profile1 from '@/images/photos/profile-1.jpg'
import profile2 from '@/images/photos/profile-2.jpg'
import profile3 from '@/images/photos/profile-3.jpg'

const people = [
  {
    name: 'Jane Doe',
    role: 'Role',
    imageUrl: profile3,
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'John Doe',
    role: 'Role',
    imageUrl: profile1,
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Jazz Doe',
    role: 'Role',
    imageUrl: profile2,
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]

export const metadata: Metadata = {
  title: 'Our team',
  description:
    'We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for the youth of Eugene, Oregon.',
}

export default function People() {
  return (
    <SimpleLayout
      title="Our team"
      intro="We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for the youth of Eugene, Oregon."
    >
      <ul
        role="list"
        className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3"
      >
        {people.map((person) => (
          <li
            key={person.name}
            className="flex flex-col gap-10 pt-12 sm:flex-row"
          >
            <Image
              className="aspect-[4/5] h-auto w-auto flex-none rounded-2xl object-cover"
              src={person.imageUrl}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              width={220}
            />
            <div className="max-w-xl flex-auto">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-zinc-800 dark:text-zinc-100">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {person.role}
              </p>
              <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {person.bio}
              </p>
              <ul role="list" className="flex gap-x-6">
                <li className="mt-2 flex gap-4">
                  <SocialLink
                    href="https://twitter.com"
                    aria-label="Follow on Twitter"
                    icon={TwitterIcon}
                  />
                  <SocialLink
                    href="https://linkedin.com"
                    aria-label="Connect on LinkedIn"
                    icon={LinkedInIcon}
                  />
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </SimpleLayout>
  )
}
