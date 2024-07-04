import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-customBg text-customText w-full py-32">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 text-center">
        <div className="text-lg font-semibold">
          <p>&copy; 2024 Merlon the Wizard&apos;s Magical Journey</p>
          <p>All spells and enchantments reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.x.com" className="hover:text-purple-500">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-current"
            >
              <title>X</title>
              <path d="M10 20v-6H6v-4h4V7a4 4 0 014-4h4v4h-4v3h4l-1 4h-3v6z" />
            </svg>
          </a>
          <a href="https://www.telegram.com" className="hover:text-purple-500">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-current"
            >
              <title>Telegram</title>
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </a>
        </div>
        <div className="text-sm">
          <p>
            Website designed with magical spells and a sprinkle of whimsy by
            Merlon&apos;s apprentice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
