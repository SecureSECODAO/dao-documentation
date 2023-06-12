/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from "next/link";
import {
  MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

import { GridPattern, GridPatternProps } from "@/components/grid-pattern";
import { ExternalLink, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CardData {
  href: string;
  name: string;
  description: string;
  icon: LucideIcon;
  pattern: GridPatternProps;
  external?: boolean;
  small?: boolean;
}

function CardIcon({ icon: Icon }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/10 dark:ring-white/15 dark:group-hover:bg-blue-300/10 dark:group-hover:ring-blue-400">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-blue-300/10 dark:group-hover:stroke-blue-400" />
    </div>
  );
}

interface CardPatternProps extends GridPatternProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

function CardPattern({ mouseX, mouseY, ...gridProps }: CardPatternProps) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x={0.5}
          className="absolute inset-x-0 inset-y-[-100%] h-[250%] w-full skew-y-[-18deg] fill-black/[0.03] stroke-black/5 dark:fill-white/[0.03] dark:stroke-white/5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#d7e6ed] to-[#dff1fb] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#20242e] dark:to-[#282d34]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x={0.5}
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  );
}

export function Card({
  card,
  className,
}: {
  card: CardData;
  className?: string;
}) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      key={card.href}
      onMouseMove={onMouseMove}
      className={cn(
        "group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/5 dark:hover:shadow-black/5",
        card.external && "h-fit",
        card.small && "w-1/2",
        className
      )}
    >
      <CardPattern {...card.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/10 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div
        className={cn(
          "relative rounded-2xl px-4 pb-4 pt-8 w-full",
          card.external ||
            (card.small &&
              "flex items-center justify-between h-fit pt-4 px-6 gap-x-4")
        )}
      >
        <div
          className={cn(
            "flex items-center gap-x-4",
            !card.external && !card.small && "mb-2 mt-4"
          )}
        >
          <CardIcon icon={card.icon} />
          <h3
            className={
              "text-sm font-semibold leading-7 text-zinc-900 dark:text-white"
            }
          >
            {card.external ? (
              <a href={card.href} target="_blank" rel="noopener">
                <span className="absolute inset-0 rounded-2xl" />
                {card.name}
              </a>
            ) : (
              <Link href={card.href}>
                <span className="absolute inset-0 rounded-2xl" />
                {card.name}
              </Link>
            )}
          </h3>
        </div>
        {!card.external && (
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {card.description}
          </p>
        )}
        {card.external && <ExternalLink className="h-5 w-5 shrink-0" />}
      </div>
    </div>
  );
}

export function Cards({ cardData }: { cardData: CardData[] }) {
  return (
    <div className="not-prose xl:max-w-none mt-4 grid grid-cols-1 gap-4 dark:border-white/5 sm:grid-cols-2">
      {cardData.map((card, i) => (
        <Card
          key={card.href}
          card={card}
          className={cn(
            i === cardData.length - 1 &&
              cardData.length % 2 !== 0 &&
              "col-span-full"
          )}
        />
      ))}
    </div>
  );
}
