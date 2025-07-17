import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center space-x-8 ">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer">
          <span>Features</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link to="/features#data-encryption" className="w-full hover:text-primary">
              Data Encryption
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/features#work-profile" className="w-full hover:text-primary">
              Work Profile Container
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/features#remote-lock" className="w-full hover:text-primary">
              Remote Lock & Wipe
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/features#app-management" className="w-full hover:text-primary">
              App Management
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/features" className="w-full hover:text-primary">
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
          <DropdownMenuItem>
            <Link to="/use-cases#kiosk" className="w-full hover:text-primary">
              Kiosk Mode Management
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/use-cases#corporate" className="w-full hover:text-primary">
              Corporate-Owned Devices
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/use-cases#byod" className="w-full hover:text-primary">
              BYOD Management
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link to="/pricing" className={`text-neutral-700 hover:text-primary ${location.pathname === "/pricing" ? "text-primary" : ""}`}>
        Pricing
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer">
          <span>Resources</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link to="/blog" className="w-full hover:text-primary">
              Blog
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/case-studies" className="w-full hover:text-primary">
              Case Studies
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/whitepapers" className="w-full hover:text-primary">
              Whitepapers
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/owasp-mobile" className="w-full hover:text-primary">
              OWASP Mobile Top 10
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link to="/faq" className={`text-neutral-700 hover:text-primary ${location.pathname === "/faq" ? "text-primary" : ""}`}>
        FAQs
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-neutral-700 hover:text-primary bg-transparent border-0 cursor-pointer">
          <span>Partners</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link to="/partners" className="w-full hover:text-primary">
              Partners & Clients
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/testimonials" className="w-full hover:text-primary">
              Testimonials
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link to="/contact" className={`text-neutral-700 hover:text-primary ${location.pathname === "/contact" ? "text-primary" : ""}`}>
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;

