import Image from 'next/image'
import clsx from 'clsx'

// import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
// import {
//   InstagramIcon,
//   LinkedInIcon,
//   TwitterIcon,
// } from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import yessLogoWhite from '@/images/yessLogoWhite.svg'
import yessLogoBlack from '@/images/yessLogoBlack.svg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { SocialLink } from '@/components/SocialLink'
import { InstagramIcon } from '@/components/SocialIcons'
// import { SocialLink } from '@/components/SocialLink'
// import { Donate } from '@/components/Donate'

// function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//       {...props}
//     >
//       <path
//         d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
//         className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
//       />
//       <path
//         d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
//         className="stroke-zinc-400 dark:stroke-zinc-500"
//       />
//     </svg>
//   )
// }

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

// function Newsletter() {
//   return (
//     <form
//       action="/thank-you"
//       className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
//     >
//       <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
//         <MailIcon className="h-6 w-6 flex-none" />
//         <span className="ml-3">Stay up to date</span>
//       </h2>
//       <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
//         Get notified when we publish something new, and unsubscribe at any time.
//       </p>
//       <div className="mt-6 flex">
//         <input
//           type="email"
//           placeholder="Email address"
//           aria-label="Email address"
//           required
//           className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10 sm:text-sm"
//         />
//         <Button type="submit" className="ml-4 flex-none">
//           Join
//         </Button>
//       </div>
//     </form>
//   )
// }

function Photos() {
  const rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    '-rotate-2',
    'rotate-2',
  ]

  return (
    <div className="mt-5 sm:mt-10">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image2, image1, image3, image5, image4].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  const articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-20">
        <div className="max-w-4xl">
          <div className="flex-start mb-2 flex">
            <Image
              src={yessLogoWhite}
              alt="Logo for YESS"
              className="hidden w-80 dark:block"
            />
            <Image
              src={yessLogoBlack}
              alt="Logo for YESS"
              className="block w-80 dark:hidden"
            />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Youth Empowered Spreading Success
          </h1>
          <p className="mt-3 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
            A non-profit organization dedicated to fostering a nurturing and
            secure environment for the next generations, where they can explore
            their potential and develop essential life skills. Our mission is to
            provide youths and young adults with a sense of belonging and equip
            them with the tools necessary for success in life.
          </p>
          <div className="mt-6 flex gap-6">
            {/* <SocialLink
              href="https://www.instagram.com/yess.eugene/"
              icon={InstagramIcon}
              className="mt-4"
            /> */}
            {/* <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            /> */}
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto flex w-full max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex w-full flex-col gap-16">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/wuwRrYLoF_0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/zUDMdCJaZG4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/weNs1y4iwgs"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))} */}
          </div>
          {/* <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Donate />
          </div> */}
        </div>
      </Container>
    </>
  )
}
