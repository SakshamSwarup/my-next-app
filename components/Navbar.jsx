import Link from 'next/link'
import navbar_module from './navbar.module.css'

const Navbar = () => {
  return (
    <header className={navbar_module.navbar}>
      <p className={navbar_module.navbar__brand}>Next.js</p>

      <ul>
        <li className={navbar_module.navbar__links}>
          <Link href="/">Home🏠</Link>
        </li>
        <li className={navbar_module.navbar__links}>
          <Link href="/about">About😉</Link>
        </li>
        <li className={navbar_module.navbar__links}>
          <Link href="/random">Random👨‍🌾</Link>
        </li>
        <li className={navbar_module.navbar__links}>
          <Link href="/contact">Contact📞</Link>
        </li>
      </ul>
    </header>
  )
}

export default Navbar
