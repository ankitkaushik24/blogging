import Image from "next/image";
import Link from "next/link";
import { Linkedin, Facebook, Youtube, X, MessageSquare } from "lucide-react";
import OmnissaLogo from "./omnissa-logo";

export default function Footer() {
  return (
    <footer className="footer-gradient-bar w-full bg-gradient-to-b from-[#6d6e8a] to-[#23294a] text-foreground pt-16 pb-0">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Left: Logo, Social, Address */}
        <div className="flex flex-col items-start md:items-start gap-8">
          <div className="flex flex-col items-start w-full">
            <OmnissaLogo
              width={220}
              height={44}
              className="text-white mb-8 mt-2"
            />
            <div className="flex gap-8 mb-8">
              <Link
                href="https://www.linkedin.com/company/omnissa/"
                aria-label="LinkedIn"
                className="rounded-full bg-primary w-12 h-12 flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg"
                target="_blank"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </Link>
              <Link
                href="https://www.facebook.com/WeAreOmnissa"
                aria-label="Facebook"
                className="rounded-full bg-primary w-12 h-12 flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg"
                target="_blank"
              >
                <Facebook className="w-6 h-6 text-white" />
              </Link>
              <Link
                href="https://www.youtube.com/@WeAreOmnissa"
                aria-label="YouTube"
                className="rounded-full bg-primary w-12 h-12 flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg"
                target="_blank"
              >
                <Youtube className="w-6 h-6 text-white" />
              </Link>
              <Link
                href="https://twitter.com/WeAreOmnissa"
                aria-label="X"
                className="rounded-full bg-primary w-12 h-12 flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg"
                target="_blank"
              >
                <X className="w-6 h-6 text-white" />
              </Link>
            </div>
          </div>
          <div className="text-base text-gray-300 leading-relaxed font-light mt-2">
            <div>© 2025 Omnissa, LLC</div>
            <div>590 E Middlefield Road,</div>
            <div>Mountain View CA 94043</div>
            <div>All Rights Reserved.</div>
          </div>
        </div>
        {/* Center: Offerings & Resources */}
        <div>
          <div className="text-xl font-normal text-white mb-4">Offerings</div>
          <ul className="space-y-2 text-base text-gray-300 font-light">
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
          <div className="text-xl font-normal text-white mb-4">Resources</div>
          <ul className="space-y-2 text-base text-gray-300 font-light">
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
          <div className="text-xl font-normal text-white mb-4">Company</div>
          <ul className="space-y-2 text-base text-gray-300 font-light">
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
      <div className="w-full bg-[#23294a] text-gray-300 text-center py-4 mt-16 text-base border-t border-[#23294a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
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
