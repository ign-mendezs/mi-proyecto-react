import Link from 'next/link';

function NavItem({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="hover:bg-green-800 px-4 py-2 rounded transition"
      >
        {children}
      </Link>
    </li>
  );
}

export default NavItem;
