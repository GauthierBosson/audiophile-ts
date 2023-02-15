import Link from "next/link";
import Logo from "./Logo";
import Cart from "./Cart";

function Navbar() {
  return (
    <nav className="container absolute inset-0">
      <div className="flex h-[96px] items-center justify-between border-b border-b-white/20">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="flex ">
          <li className="mr-[34px]">
            <Link href="#">Home</Link>
          </li>
          <li className="mr-[34px]">
            <Link href="#">Headphones</Link>
          </li>
          <li className="mr-[34px]">
            <Link href="#">Speakers</Link>
          </li>
          <li>
            <Link href="#">Earphones</Link>
          </li>
        </ul>
        <button>
          <Cart />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
