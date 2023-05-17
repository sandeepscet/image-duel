import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

// Human vs Machine
// Check out the result of Human vs Machine!
// Show Us Some Love
// Tell the world who is winning
const Share = ({ onCloseShare }) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  let pageURL = currentUrl;

  const title = 'Human vs Machine : Turing Test of Images';
  const description = 'Check out the Human vs Machine Turing Test of Images!';

  const [copied, setCopied] = useState(false);

  const handleShareCloseDialog = () => {
    onCloseShare && onCloseShare();
  };

  const copyText = () => {
    navigator.clipboard.writeText(pageURL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white p-4">
        <div className="flex flex-grow text-center	justify-center w-auto divide-y">
          <h2 className="text-lg font-bold mb-2 border-b">Share</h2>
        </div>
        <p className="text-xl">Tell the world who is winning</p>
        <div className="mt-3">
          <FacebookShareButton url={pageURL} quote={title}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>
          <TwitterShareButton url={pageURL} title={title}>
            <TwitterIcon size={40} round />
          </TwitterShareButton>
          <LinkedinShareButton url={pageURL} title={title}>
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
          <PinterestShareButton url={pageURL} description={description}>
            <PinterestIcon size={40} round />
          </PinterestShareButton>
          <RedditShareButton url={pageURL} title={title}>
            <RedditIcon size={40} round />
          </RedditShareButton>
          <WhatsappShareButton url={pageURL} title={title}>
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>
          <EmailShareButton url={pageURL} subject={title}>
            <EmailIcon size={40} round />
          </EmailShareButton>

          <span
            className={`cursor-pointer inline-block	justify-center ${
              copied ? 'pointer-events-none opacity-50' : ''
            }`}
            onClick={copyText}
          >
            <div className="m-1" height={40} width={40}>
              {!copied && (
                <Image
                  priority
                  src="copy.svg"
                  height={32}
                  width={32}
                  alt="Copy"
                />
              )}
              {copied && (
                <Image
                  priority
                  src="copied.svg"
                  height={32}
                  width={32}
                  alt="Copied"
                />
              )}
            </div>
          </span>
        </div>
        <button
          onClick={handleShareCloseDialog}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 float-right"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Share;
