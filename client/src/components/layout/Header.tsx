import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
import mobihealLogo from "../../assets/mobiheal_logo.svg"

const Header = () => {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-3xl text-primary mr-2"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="9" r="3" />
                <path d="M12 12v6" />
                <path d="M9.5 9a2.5 2.5 0 0 1 5 0" />
              </svg> */}
              {/* <span className="text-xl font-semibold text-neutral-800">SecureMDM</span> */}
              <img
                src={mobihealLogo}
                alt="MobiHeal Logo"
                className="ml-2 h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <DesktopNavigation currentPath={location} />
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="font-medium">
              Sign In
            </Button>
            <Button className="font-medium">Request Demo</Button>
          </div>

          {/* Mobile Menu */}
          <MobileNavigation currentPath={location} />
        </div>
      </div>
    </header>
  );
};

interface NavigationProps {
  currentPath: string;
}

const DesktopNavigation = ({ currentPath }: NavigationProps) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer">
          <span>Features</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Link href="/features#data-encryption" className="w-full hover:text-primary">
              Data Encryption
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Link href="/features#work-profile" className="w-full hover:text-primary">
              Work Profile Container
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}> 
            <Link href="/features#remote-lock" className="w-full hover:text-primary">
              Remote Lock & Wipe
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Link href="/features#app-management" className="w-full hover:text-primary">
              App Management
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Link href="/features" className="w-full hover:text-primary">
              View All Features
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer">
          <span>Use Cases</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Link href="/use-cases#kiosk" className="w-full hover:text-primary">
              Kiosk Mode Management
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Link href="/use-cases#corporate" className="w-full hover:text-primary">
              Corporate-Owned Devices
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Link href="/use-cases#byod" className="w-full hover:text-primary">
              BYOD Management
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href="/pricing" className={`text-neutral-700 hover:text-primary ${currentPath === "/pricing" ? "text-primary" : ""}`}>
        Pricing
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer">
          <span>Resources</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Link href="/blog" className="w-full hover:text-primary">
              Blog
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Link href="/case-studies" className="w-full hover:text-primary">
              Case Studies
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Link href="/whitepapers" className="w-full hover:text-primary">
              Whitepapers
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Link href="/owasp-mobile" className="w-full hover:text-primary">
              OWASP Mobile Top 10
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href="/faq" className={`text-neutral-700 hover:text-primary ${currentPath === "/faq" ? "text-primary" : ""}`}>
        FAQs
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer">
          <span>Partners</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Link href="/partners" className="w-full hover:text-primary">
              Partners & Clients
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Link href="/testimonials" className="w-full hover:text-primary">
              Testimonials
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href="/contact" className={`text-neutral-700 hover:text-primary ${currentPath === "/contact" ? "text-primary" : ""}`}>
        Contact
      </Link>
    </>
  );
};

const MobileNavigation = ({ currentPath }: NavigationProps) => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4 mt-6">
            <Link href="/features" className={`py-2 hover:text-primary ${currentPath.includes("/features") ? "text-primary" : ""}`}>
              Features
            </Link>
            <Link href="/use-cases" className={`py-2 hover:text-primary ${currentPath.includes("/use-cases") ? "text-primary" : ""}`}>
              Use Cases
            </Link>
            <Link href="/pricing" className={`py-2 hover:text-primary ${currentPath === "/pricing" ? "text-primary" : ""}`}>
              Pricing
            </Link>
            <Link href="/resources" className={`py-2 hover:text-primary ${currentPath.includes("/resources") ? "text-primary" : ""}`}>
              Resources
            </Link>
            <Link href="/faq" className={`py-2 hover:text-primary ${currentPath === "/faq" ? "text-primary" : ""}`}>
              FAQs
            </Link>
            <Link href="/partners" className={`py-2 hover:text-primary ${currentPath.includes("/partners") ? "text-primary" : ""}`}>
              Partners
            </Link>
            <Link href="/contact" className={`py-2 hover:text-primary ${currentPath === "/contact" ? "text-primary" : ""}`}>
              Contact
            </Link>
            <div className="flex flex-col gap-3 mt-4">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button className="w-full">
                Request Demo
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
