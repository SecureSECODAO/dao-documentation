/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { cn } from "@/lib/utils";
import { ChevronsUp } from "lucide-react";
import React, { useState } from "react";

export default function BackToTop() {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  if (isBrowser()) {
    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <button
      className={cn(
        visible ? "translate-x-0" : "translate-x-20",
        "transition-all fixed bottom-0 ltr:right-3 mb-4 bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 p-2 rounded-xl hover:bg-gray-100"
      )}
      onClick={scrollToTop}
    >
      <span className="sr-only">Back to top</span>
      <ChevronsUp className="w-6 h-6" />
    </button>
  );
}
