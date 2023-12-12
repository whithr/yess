import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { InstagramIcon, TwitterIcon } from '@/components/SocialIcons'
import yessRendering from '@/images/yess-rendering.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: 'Youth Empowered Spreading Success',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={yessRendering}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className=" rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Youth Empowered Spreading Success
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              "Youth Empowered Spreading Success" (YESS) is a non-profit
              organization dedicated to fostering a nurturing and secure
              environment for children, where they can explore their potential
              and develop essential life skills. Our mission is to provide
              children with a sense of belonging and equip them with the tools
              necessary for success in life.
            </p>
            <p>
              To achieve our mission, YESS offers a variety of engaging
              after-school and weekend programs, tailored to the diverse
              interests of our community's youth. One of our key offerings is an
              indoor skatepark, designed to provide a safe and accessible space
              for young skateboard enthusiasts. This indoor skatepark
              complements our other activities, which include dance classes, a
              music room for budding musicians, and a recreational room with
              pool tables, board games, and chess lessons, promoting social
              interaction and critical thinking skills.
            </p>
            <p>
              While the indoor skatepark is a significant component of our
              facility, YESS remains committed to providing a comprehensive
              range of activities to cater to the varying interests and needs of
              our community's children. We believe that by offering diverse
              opportunities for personal growth in a safe space, we can empower
              them to build a bright future for themselves and their
              communities. Our commitment to inclusivity and our extensive range
              of activities make YESS a unique and valuable resource for the
              families we serve.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="mailto:youthempoweredspreadingsuccess@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              youthempoweredspreadingsuccess@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
