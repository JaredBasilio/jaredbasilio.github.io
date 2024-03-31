import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import photo from './../../public/jared.jpeg'
import gh from './../../public/github.svg'
import li from './../../public/linked_in.svg'

export default function Home() {
  return (
    <main className="flex h-screen justify-center items-center">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="w-3/4">
        <Image 
          src={photo}
          className="rounded-lg w-1/3 float-left m-5"
          alt="Photo of Jared"
        />
        <div>
          <h1 className="text-3xl font-extrabold pb-2 items-center">
              {'sup, i\'m jared'}
          </h1>
          <p>
            {
              'I\'m currently completing my BA in Computer Science and Data Science at UC Berkeley and am \
              interested in the intersection between design and technology. \
              Currently, I am developing ways to learn about the human decision process in common work scenarios. \
              My previous experience involves building products at Uber that assist the marketer experience.'
            }
            <br /><br />
            {
            'Beyond engineering, I enjoy all things fitness, basketball related content \
            (playing is a different story...), motion graphics, and tetris above other games lol.'
            }
          </p>
          <div className="flex">
            <Link href="https://github.com/JaredBasilio">
              <Image 
                src={gh}             
                style={{
                  marginRight: '0.5em'
                }}
                width={40}
                height={40}
                alt="github"/>
            </ Link>
            <Link href="https://www.linkedin.com/in/jaredandrewbasilio/">
              <Image 
                src={li} 
                width={40}
                height={40}
                alt="linkedin"/>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
