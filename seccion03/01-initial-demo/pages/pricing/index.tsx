import Link from 'next/link';
import MainLayout from '../../components/layouts/MainLayout'

export default function Pricing() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>

      <div className="main">
        <p>Ir al home <Link href="/home">Home</Link></p>
      </div>
    </MainLayout>
  )
}
