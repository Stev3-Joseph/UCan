const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mx-auto p-2 max-w-[1680px] ">
      <div className="container mx-auto px-4 md:px-36 flex justify-between gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex items-center space-x-2">
            <MailIcon className="w-5 h-5" />
            <a href="#" className="hover:underline">
              stevejoseph2005@gmail.com
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Social Media</h3>
          <div className="flex items-center space-x-4">
            <a
              href="https://x.com/SteveJosep65438"
              className="hover:text-primary-foreground"
              prefetch={false}
            >
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Stev3-Joseph"
              className="hover:text-primary-foreground"
              prefetch={false}
            >
              <GitHubLogo className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/steve.joseph21/?next=%2F"
              className="hover:text-primary-foreground"
              prefetch={false}
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 text-center text-sm text-muted-foreground">
        &copy; 2024 UCan Inc. All rights reserved.
      </div>
    </footer>
  );
};

const GitHubLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fillRule="evenodd"
        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.58 0-.29-.01-1.06-.015-2.08-3.338.725-4.042-1.607-4.042-1.607-.546-1.384-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.24 1.838 1.24 1.07 1.835 2.805 1.305 3.49.997.108-.77.42-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.125-.305-.54-1.524.12-3.176 0 0 1.005-.322 3.3 1.23a11.543 11.543 0 0 1 3-.405c1.015 0 2.035.14 3 .405 2.29-1.552 3.295-1.23 3.295-1.23.66 1.652.245 2.87.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.37.815 1.1.815 2.22 0 1.605-.015 2.895-.015 3.295 0 .32.21.7.825.58C20.565 21.793 24 17.293 24 12c0-6.63-5.37-12-12-12"
      />
    </svg>
  );
};

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export default Footer;
