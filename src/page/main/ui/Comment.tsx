"use client";

import React from "react";
import "./Comment.css";
import clsx from "clsx";
import { useTranslation } from "@/app/i18n/client";

interface Props {
  className?: string;
  comment: string;
  lang: string;
}

export const Comment: React.FC<Props> = ({ comment, lang }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const { t } = useTranslation(lang);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <p
        className={clsx("mt-8 text-[#777777] text-[15px]", {
          truncated: !isExpanded,
        })}
      >
        {comment}
      </p>
      <span
        className="cursor-pointer text-[13px] text-primary"
        onClick={handleToggle}
      >
        {isExpanded ? t("showLess") : t("showMore")}
      </span>
    </div>
  );
};
