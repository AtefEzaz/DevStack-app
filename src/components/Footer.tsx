import logoText from "../assets/logo-text.png";

const LINK_GROUPS: Record<string, string[]> = {
  Product: ["Technologies", "Projects", "Pricing", "Changelog"],
  Company: ["About", "Careers", "Blog", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <img
            src={logoText}
            alt="Dev Stack logo"
            className="h-8 w-auto object-contain"
          />
          <p className="text-sm text-gray-500 mt-3 max-w-xs">
            Discover, compare, and curate the technologies behind your next
            favorite project.
          </p>
          <div className="flex gap-3 mt-4 text-gray-400">
            <a href="#" aria-label="GitHub" className="hover:text-gray-700">
              GitHub
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-700">
              Twitter
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-700">
              LinkedIn
            </a>
          </div>
        </div>

        {Object.entries(LINK_GROUPS).map(([group, links]) => (
          <div key={group}>
            <h4 className="font-semibold text-gray-900 text-sm mb-3">
              {group}
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-500">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gray-800">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        <p>
          © {new Date().getFullYear()} Dev Stack. All rights reserved. ·{" "}
          <a href="#" className="hover:text-gray-600">
            Privacy
          </a>{" "}
          ·{" "}
          <a href="#" className="hover:text-gray-600">
            Terms
          </a>
        </p>
      </div>
    </footer>
  );
}
