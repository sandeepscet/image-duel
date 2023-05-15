import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 text-center">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} <a href="https://chatgpt-prompt-apps.com/" target="_blank">Prompt Apps</a>. All rights reserved.
      </p>
      <p className="mt-2">
        Made with {' '}
        <span role="img" aria-label="Love">
          ❤️
        </span>
        {' '}from {' '}
        <span role="img" aria-label="India">
        🇮🇳
        </span>
      </p>
    </footer>
  );
};

export default Footer;
