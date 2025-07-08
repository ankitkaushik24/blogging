import Image from "next/image";
import Link from "next/link";
import { Linkedin, Facebook, Youtube, X, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-700 text-foreground pt-10 pb-0">
      <div className="container mx-auto px-6 md:px-8 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Left: Logo, Social, Address, Comments */}
        <div className="flex flex-col items-start gap-6 md:w-1/3">
          <Image
            src="/assets/images/omnissa-logo.png"
            alt="Omnissa logo"
            width={160}
            height={32}
            className="mb-2"
          />
          <div className="flex gap-4 mt-2 mb-2">
            <Link
              href="https://www.linkedin.com/company/omnissa/"
              aria-label="LinkedIn"
              className="rounded-full bg-primary p-2 hover:bg-primary/80 transition-colors"
              target="_blank"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </Link>
            <Link
              href="https://www.facebook.com/WeAreOmnissa"
              aria-label="Facebook"
              className="rounded-full bg-primary p-2 hover:bg-primary/80 transition-colors"
              target="_blank"
            >
              <Facebook className="w-6 h-6 text-white" />
            </Link>
            <Link
              href="https://www.youtube.com/@WeAreOmnissa"
              aria-label="YouTube"
              className="rounded-full bg-primary p-2 hover:bg-primary/80 transition-colors"
              target="_blank"
            >
              <Youtube className="w-6 h-6 text-white" />
            </Link>
            <Link
              href="https://twitter.com/WeAreOmnissa"
              aria-label="X"
              className="rounded-full bg-primary p-2 hover:bg-primary/80 transition-colors"
              target="_blank"
            >
              <X className="w-6 h-6 text-white" />
            </Link>
          </div>
          <div className="text-sm text-gray-300 leading-relaxed">
            <div>© 2025 Omnissa, LLC</div>
            <div>590 E Middlefield Road,</div>
            <div>Mountain View CA 94043</div>
            <div>All Rights Reserved.</div>
          </div>
          {/* <button className="mt-4 flex items-center gap-2 bg-primary text-white font-medium rounded-full px-8 py-3 text-base shadow hover:bg-primary/90 transition-colors">
            COMMENTS?
            <MessageSquare className="w-5 h-5" />
          </button> */}
        </div>
        {/* Center: Offerings & Resources */}
        <div className="flex flex-1 justify-between gap-10 md:gap-20">
          <div>
            <div className="text-lg font-semibold mb-4">Offerings</div>
            <ul className="space-y-2 text-base text-gray-200">
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
            <div className="text-lg font-semibold mb-4">Resources</div>
            <ul className="space-y-2 text-base text-gray-200">
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
        </div>
        {/* Right: Company */}
        <div className="min-w-[160px]">
          <div className="text-lg font-semibold mb-4">Company</div>
          <ul className="space-y-2 text-base text-gray-200">
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
      <div
        className="w-full bg-gray-800 text-gray-300 text-center py-4 mt-10 text-base border-t"
        style={{ borderColor: "var(--sidebar)" }}
      >
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
