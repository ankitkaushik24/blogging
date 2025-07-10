import Image from "next/image";
import Link from "next/link";
import OmnissaLogo from "./omnissa-logo";

export default function Footer() {
  return (
    <footer className="footer-gradient-bar w-full text-foreground pb-0">
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-8 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Left: Logo, Social, Address */}
        <div className="flex flex-col items-start md:items-start">
          <div className="flex flex-col items-start w-full">
            <OmnissaLogo width={220} height={44} className="text-white" />
            <div className="flex gap-4 mt-11 mb-9">
              <Link
                href="https://www.linkedin.com/company/omnissa/"
                aria-label="LinkedIn"
                className="rounded-full bg-primary w-11 h-11 flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg"
                target="_blank"
              >
                <Image
                  src="/blogging/assets/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={23}
                  className="w-5 h-5"
                />
              </Link>
              <Link
                href="https://www.facebook.com/WeAreOmnissa"
                aria-label="Facebook"
                className="rounded-full bg-primary w-11 h-11 flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg"
                target="_blank"
              >
                <Image
                  src="/blogging/assets/icons/facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </Link>
              <Link
                href="https://www.youtube.com/@WeAreOmnissa"
                aria-label="YouTube"
                className="rounded-full bg-primary w-11 h-11 flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg"
                target="_blank"
              >
                <Image
                  src="/blogging/assets/icons/youtube.svg"
                  alt="YouTube"
                  width={24}
                  height={17}
                  className="w-5 h-5"
                />
              </Link>
              <Link
                href="https://twitter.com/WeAreOmnissa"
                aria-label="X"
                className="rounded-full bg-primary w-11 h-11 flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg"
                target="_blank"
              >
                <Image
                  src="/blogging/assets/icons/x.svg"
                  alt="X"
                  width={17}
                  height={17}
                  className="w-5 h-5"
                />
              </Link>
            </div>
          </div>
          <div className="text-border leading-[22px] text-[18px] font-extralight">
            <div>© 2025 Omnissa, LLC</div>
            <div>590 E Middlefield Road,</div>
            <div>Mountain View CA 94043</div>
            <div>All Rights Reserved.</div>
          </div>
        </div>
        {/* Center: Offerings & Resources */}
        <div>
          <div className="text-[22px] font-normal text-white mb-4">
            Offerings
          </div>
          <ul className="space-y-2 text-base text-border font-light">
            <li>
              <Link
                href="https://www.omnissa.com/platform/"
                className="hover:underline"
              >
                Omnissa platform
              </Link>
            </li>
            <li>
              <Link
                href="https://www.omnissa.com/products/#platform-services"
                className="hover:underline"
              >
                Platform services
              </Link>
            </li>
            <li>
              <Link
                href="https://www.omnissa.com/products/"
                className="hover:underline"
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[22px] font-normal text-white mb-4">
            Resources
          </div>
          <ul className="space-y-2 text-base text-border font-light">
            <li>
              <Link
                href="https://www.omnissa.com/insights/#Blog"
                className="hover:underline"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="https://www.omnissa.com/partners/"
                className="hover:underline"
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                href="https://www.omnissa.com/omnissa-security-response/"
                className="hover:underline"
              >
                Security response
              </Link>
            </li>
            <li>
              <Link
                href="https://www.omnissa.com/trust-center/"
                className="hover:underline"
              >
                Trust center
              </Link>
            </li>
            <li>
              <Link
                href="https://www.omnissa.com/user-portal/"
                className="hover:underline"
              >
                User portal
              </Link>
            </li>
            <li>
              <Link
                href="https://www.omnissa.com/glossary/"
                className="hover:underline"
              >
                Glossary
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[22px] font-normal text-white mb-4">Company</div>
          <ul className="space-y-2 text-base text-border font-light">
            <li>
              <Link
                href="https://www.omnissa.com/about-us/"
                className="hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="https://www.omnissa.com/insights/#News"
                className="hover:underline"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="https://www.omnissa.com/careers/"
                className="hover:underline"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="https://www.omnissa.com/contact-us/"
                className="hover:underline"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="w-full bg-[#23294a] text-border text-center py-6 font-extralight border-t border-[#23294a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-2 md:gap-3">
          <Link
            href="https://www.omnissa.com/trust-center/"
            className="hover:underline"
          >
            Trust center
          </Link>
          <span className="hidden md:inline">•</span>
          <Link
            href="https://www.omnissa.com/legal-center/"
            className="hover:underline"
          >
            Legal center
          </Link>
          <span className="hidden md:inline">•</span>
          <Link
            href="https://www.omnissa.com/trust-center/#privacy-notices"
            className="hover:underline"
          >
            Privacy notice
          </Link>
          <span className="hidden md:inline">•</span>
          <Link
            href="https://www.omnissa.com/omnissa-website-terms-use/"
            className="hover:underline"
            target="_blank"
          >
            Terms & conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
