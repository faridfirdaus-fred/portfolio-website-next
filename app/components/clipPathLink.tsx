"use client"

import React from "react";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiReddit,
  SiX,
} from "react-icons/si";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useAnimate } from "framer-motion";

export const ClipPathLink = () => {
  return (
    <div className="bg-secondary md:mt-24 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest font-bold opacity-60 mb-1">
            Network &amp; Profiles
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight font-outfit">
            Social &amp; Channels
          </h2>
        </div>
        <ClipPathLinks />
      </div>
    </div>
  );
};

const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-primary border border-primary bg-secondary shadow-sm">
      <div className="grid grid-cols-2 divide-x divide-primary">
        <LinkBox
          Icon={FaEnvelope}
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:faridfirdaus.mail@gmail.com"
          label="Send email to faridfirdaus.mail@gmail.com"
        />
        <LinkBox
          target="_blank"
          rel="noopener noreferrer"
          Icon={SiGithub}
          href="https://github.com/faridfirdaus-fred"
          label="Farid Firdaus on GitHub"
        />
      </div>
      <div className="grid grid-cols-3 divide-x divide-primary">
        <LinkBox
          target="_blank"
          rel="noopener noreferrer"
          Icon={FaLinkedin}
          href="https://www.linkedin.com/in/farid-firdaus/"
          label="Farid Firdaus on LinkedIn"
        />
        <LinkBox
          target="_blank"
          rel="noopener noreferrer"
          Icon={SiX}
          href="https://x.com/freddem4rco"
          label="Farid Firdaus on X"
        />
        <LinkBox
          target="_blank"
          rel="noopener noreferrer"
          Icon={SiInstagram}
          href="https://www.instagram.com/rid.fir"
          label="Farid Firdaus on Instagram"
        />
      </div>
      <div className="grid grid-cols-2 divide-x divide-primary">
        <LinkBox
          target="_blank"
          rel="noopener noreferrer"
          Icon={SiFacebook}
          href="https://www.facebook.com/farid.forster.5"
          label="Farid Fred on Facebook"
        />
        <LinkBox
          target="_blank"
          rel="noopener noreferrer"
          Icon={SiReddit}
          href="https://www.reddit.com/user/Miserable-Yard4496/"
          label="Farid Firdaus on Reddit"
        />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

interface LinkBoxProps {
  Icon: React.ComponentType<{ className?: string }>;
  href: string;
  target: string;
  rel: string;
  label: string;
}

const LinkBox: React.FC<LinkBoxProps> = ({ Icon, href, target, rel, label }) => {
  const [scope, animate] = useAnimate();

  interface Proximity {
    proximity: number;
    side: keyof typeof ENTRANCE_KEYFRAMES;
  }

  const getNearestSide = (e: React.MouseEvent<HTMLAnchorElement>): keyof typeof ENTRANCE_KEYFRAMES => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft: Proximity = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight: Proximity = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop: Proximity = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom: Proximity = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={label}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid w-full place-content-center h-28 md:h-36 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-neutral-900 text-white"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
  );
};
