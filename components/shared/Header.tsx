import { siteConfig } from '@/data/config/site.settings';
import { headerNavLinks } from '@/data/config/headerNavLinks';
import Link from './Link';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import SearchButton from '../search/SearchButton';
import ActiveLink from '@/components/shared/ActiveLink';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10 flex-wrap w-full mb-20 lg:mb-32 pt-6 wide-container">
      <div>
        <Link href="/" aria-label={siteConfig.logoTitle}>
          <div className="flex items-center gap-3 justify-between">
            <Image
              src="/static/images/logo.png"
              alt="Pricing Page Generator logo"
              height={74}
              width={74}
              className="group-hover:animate-wiggle relative top-0.5"
            />

            <div className="hidden text-2xl font-semibold sm:flex h-full">
              Pricing Page Generator
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 gap-4 sm:gap-6">
        {headerNavLinks.map((link) => (
          <ActiveLink
            key={link.title}
            href={link.href}
            className="nav-link hidden sm:block"
            activeClassName="nav-link-active"
          >
            <span>{link.title}</span>
          </ActiveLink>
        ))}

        <a
          key="download"
          href="https://shipixen.com"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link hidden sm:block"
        >
          <span className="bg-clip-text bg-gradient-to-r text-transparent from-fuchsia-500 to-cyan-600 dark:from-fuchsia-500 dark:to-cyan-500">
            Beautiful Next.js starters
          </span>
        </a>

        {/* <SearchButton /> */}
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
