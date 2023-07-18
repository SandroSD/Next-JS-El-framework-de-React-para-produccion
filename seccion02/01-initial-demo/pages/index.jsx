import Link from 'next/link';
import MainLayout from '@/components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <h1>Home Page</h1>

      <div className="main">
        <p>Ir al about <Link href="/about">About</Link></p>
      </div>
    </MainLayout>
  )
}
