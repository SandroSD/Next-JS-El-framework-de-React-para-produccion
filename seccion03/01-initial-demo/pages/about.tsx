import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';
import DarkLayout from '../components/layouts/DarkLayout';

export default function About() {
  return (
    <>
      <h1>About Page</h1>

      <div className="main">
        <p>Ir al home <Link href="/">Home</Link></p>
      </div>
    </>
  )
}

About.getLayout = function getLayout(page: JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}