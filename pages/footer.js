import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 text-center fixed inset-x-0 bottom-0 -z-50">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()}{' '}
        <a href="https://chatgpt-prompt-apps.com/" target="_blank">
          Prompt Apps
          <Image
            priority
            src="external.svg"
            height={16}
            width={16}
            alt="external"
            className="inline"
          />
        </a>
        {'  '}
        All rights reserved.
      </p>
      <p className="mt-2 hidden lg:inline-block">
        Made with{' '}
        <span role="img" aria-label="Love">
          ❤️
        </span>{' '}
        from{'  '}
        <span role="img" aria-label="India">
          🇮🇳
        </span>
      </p>
    </footer>
  );
};

export default Footer;
