import Image from 'next/image'
import Link from 'next/link'
import Logo from './kanzuCode.jpg'

const navBar = () => {
  return (
    <nav>
      <Image src={Logo} alt='Logo' width={70} quality={100} placeholder='blur' />
      <h2>KanzuCode Helpdesk</h2>
      <Link href='/'>Dashboard</Link>
      <Link href='/tickets'>Tickets</Link>
    </nav>
  )
}

export default navBar
