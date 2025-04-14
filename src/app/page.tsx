import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'

import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import yessLogoWhite from '@/images/yessLogoWhite.svg'
import yessLogoBlack from '@/images/yessLogoBlack.svg'
import { Button } from '@/components/Button'

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
  // const articles = (await getAllArticles()).slice(0, 4)

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
          <div className="mt-4 flex gap-2">
            <Button
              href="https://donorbox.org/help-us-buy-the-land?default_interval=o"
              variant="primary"
            >
              Donate now
            </Button>

            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSd-PuHD4QOK0iiZ9bb-dZQNON9Ll3oJar7mfcMw_q0U23kZ7Q/viewform?usp=header"
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply to be a board member!
            </Button>
          </div>
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
            <div className="aspect-h-9 aspect-w-16">
              <iframe
                src="https://www.youtube.com/embed/wuwRrYLoF_0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-h-9 aspect-w-16">
              <iframe
                src="https://www.youtube.com/embed/zUDMdCJaZG4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-h-9 aspect-w-16">
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
