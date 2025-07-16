import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
import mobihealLogo from "../../assets/mobiheal_logo.svg";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={mobihealLogo} alt="MobiHeal Logo" className="ml-2 h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <DesktopNavigation currentPath={pathname} />
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="font-medium">
              Sign In
            </Button>
            <a href="https://calendly.com/mobiheal-demo/booking" target="_blank" rel="noopener noreferrer">
              <Button className="font-medium">Request Demo</Button>
            </a>
          </div>

          {/* Mobile Menu */}
          <MobileNavigation currentPath={pathname} />
        </div>
      </div>
    </header>
  );
};

interface NavigationProps {
  currentPath: string;
}

const DesktopNavigation = ({ currentPath }: NavigationProps) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Features */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer">
          <span>Features</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => navigate("/features#data-encryption")}>
            Data Encryption
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/features#work-profile")}>
            Work Profile Container
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/features#remote-lock")}>
            Remote Lock & Wipe
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/features#app-management")}>
            App Management
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/features")}>
            View All Features
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Use Cases */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer">
          <span>Use Cases</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => navigate("/use-cases#kiosk")}>
            Kiosk Mode Management
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/use-cases#corporate")}>
            Corporate-Owned Devices
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/use-cases#byod")}>
            BYOD Management
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Pricing */}
      <Link
        to="/pricing"
        className={`text-neutral-700 hover:text-primary ${currentPath === "/pricing" ? "text-primary" : ""}`}
      >
        Pricing
      </Link>

      {/* Resources */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer">
          <span>Resources</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => navigate("/blog")}>Blog</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/case-studies")}>Case Studies</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/whitepapers")}>Whitepapers</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/owasp-mobile")}>OWASP Mobile Top 10</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* FAQs */}
      <Link
        to="/faq"
        className={`text-neutral-700 hover:text-primary ${currentPath === "/faq" ? "text-primary" : ""}`}
      >
        FAQs
      </Link>

      {/* Partners */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer">
          <span>Partners</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => navigate("/partners")}>Partners & Clients</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => navigate("/testimonials")}>Testimonials</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Contact */}
      <Link
        to="/contact"
        className={`text-neutral-700 hover:text-primary ${currentPath === "/contact" ? "text-primary" : ""}`}
      >
        Contact
      </Link>
    </>
  );
};

const MobileNavigation = ({ currentPath }: NavigationProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false); // Close the sheet
  };

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4 mt-6">
            {[
              { path: "/", label: "Home" },
              { path: "/features", label: "Features" },
              { path: "/use-cases", label: "Use Cases" },
              { path: "/pricing", label: "Pricing" },
              { path: "/blog", label: "Blog" },
              { path: "/faq", label: "FAQs" },
              { path: "/partners", label: "Partners" },
              { path: "/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <button
                key={path}
                onClick={() => handleNavigate(path)}
                className={`text-left py-2 hover:text-primary ${
                  currentPath.includes(path) ? "text-primary" : ""
                }`}
              >
                {label}
              </button>
            ))}

            <div className="flex flex-col gap-3 mt-4">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <a href="https://calendly.com/mobiheal-demo/booking" target="_blank" rel="noopener noreferrer">
                <Button className="w-full">Request Demo</Button>
              </a>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
