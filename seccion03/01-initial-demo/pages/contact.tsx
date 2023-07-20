import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';

export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <div className="main">
        <p>Ir al home <Link href="/">Home</Link></p>
      </div>
    </MainLayout>
  )
}
