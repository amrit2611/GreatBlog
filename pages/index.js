import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const posts = [
  { title: 'React Testing', excerpt: 'Learn React Testing'},
  { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind'},
];

export default function Home() {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>GreatBlog</title>
        <meta name="description" content="A Full Stack Blog Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-gray-400">
        {posts.map((post, index) => (
          <div className='lg:col-span-8 col-span-1'>
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div>
      
      <div className='lg:col-span-4 col-span-1'>
        <div className='lg:sticky relative top-8'>
          
        </div>
      </div>
    </div>
  )
}
