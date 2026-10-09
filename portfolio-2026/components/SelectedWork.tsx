"use client";

import { Children, cloneElement, isValidElement, useState, type ReactNode } from "react";

const filters = [
  { value: "all", label: "All work" },
  { value: "product", label: "Products" },
  { value: "web", label: "Web & CMS" },
  { value: "engineering", label: "Engineering" },
] as const;
type Filter = typeof filters[number]["value"];
type CardProps = { "data-ka-category"?: string; hidden?: boolean };

export default function SelectedWork({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState<Filter>("all");
  const cards = Children.toArray(children).filter(isValidElement<CardProps>);
  const count = cards.filter((card) => filter === "all" || card.props["data-ka-category"] === filter).length;

  return (
    <>
      <div className="ka-work-toolbar">
        <div className="ka-filters" role="group" aria-label="Filter selected work">
          {filters.map((option) => (
            <button key={option.value} type="button" className="ka-filter cursor-interaction"
              onClick={() => setFilter(option.value)} aria-pressed={filter === option.value}>
              {option.label}
            </button>
          ))}
        </div>
        <p className="ka-count" aria-live="polite">{count} selected contribution{count === 1 ? "" : "s"}</p>
      </div>
      <div className="ka-work-grid">
        {cards.map((card) => cloneElement(card, {
          hidden: filter !== "all" && card.props["data-ka-category"] !== filter,
        }))}
      </div>
    </>
  );
}
