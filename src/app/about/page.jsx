import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
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

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Omar Ghanaim, a full stack developer and CTO living in Germany. I specialize in building custom Shopify stores and web applications, helping businesses grow through innovative solutions.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Omar Ghanaim. I live in Germany, where I develop the future of
            eCommerce.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve always had a passion for technology and solving complex
              problems. My journey into software development started over 3
              years ago, and today, I’m the CTO of Marvya, an eCommerce agency
              focused on building exceptional Shopify stores for businesses of
              all sizes.
            </p>
            <p>
              My expertise spans full stack development, where I’ve built and
              optimized numerous online shops and web applications that have
              significantly contributed to the success of my clients. Through my
              leadership at Marvya, I’ve helped create innovative solutions that
              drive revenue and growth in the eCommerce space.
            </p>
            <p>
              But there’s more to me than just code. I’m an avid reader,
              constantly searching for ways to improve not only the processes at
              work but also my own personal development. Whether it’s exploring
              the latest in tech or diving into business strategies, I’m always
              looking for the next challenge.
            </p>
            <p>
              When I’m not working, you can find me either at the gym
              maintaining my fitness routine or on spontaneous trips with my
              friends. I’m also a huge fan of card games—poker especially.
              Gaming used to be a major part of my life, and while I don’t play
              as much now, I still enjoy the occasional round of strategic play.
            </p>
            <p>
              Now, I’m offering my experience and skills as a freelancer,
              helping businesses around the world build custom web applications,
              Shopify stores, and more. Let’s work together to create something
              incredible.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/GitItOmar"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/omar-ghanaim-a4b78a239"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:ghanaim512@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              ghanaim512@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
