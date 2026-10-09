"use client";

import { ArrowRight, GitBranch, PanelsTopLeft, Server, Workflow } from "lucide-react";
import { Fragment, useState } from "react";
import { expertise } from "@/lib/expertise";

const options = [
  { id: "interfaces", title: "Interfaces & experience", detail: "Components, workflows, performance", icon: PanelsTopLeft },
  { id: "backend", title: "APIs & application logic", detail: "Services, permissions, data", icon: Server },
  { id: "platforms", title: "Platform capabilities", detail: "Reporting, configuration, real time", icon: Workflow },
  { id: "delivery", title: "Delivery & team ownership", detail: "Releases, reviews, mentoring", icon: GitBranch },
] as const;

export default function ExpertisePanel() {
  const [selected, setSelected] = useState<keyof typeof expertise>("interfaces");
  const current = expertise[selected];

  return (
    <div className="ka-depth">
      <div className="ka-depth-menu" role="group" aria-label="Explore engineering expertise">
        {options.map((option) => (
          <button key={option.id} type="button" className="ka-depth-button cursor-interaction"
            onClick={() => setSelected(option.id)} aria-pressed={selected === option.id}>
            <option.icon size={16} aria-hidden="true" />
            <span><strong>{option.title}</strong><small>{option.detail}</small></span>
          </button>
        ))}
      </div>
      <div className="ka-depth-panel" aria-live="polite" aria-atomic="true">
        <h3 className="ka-depth-title">{current.title}</h3>
        <p className="ka-depth-description">{current.description}</p>
        <div className="ka-flow" aria-label="Engineering flow">
          {current.steps.map((step, index) => <Fragment key={step}>
            {index > 0 && <ArrowRight size={16} aria-hidden="true" />}
            <span className="ka-flow-step">{step}</span>
          </Fragment>)}
        </div>
        <ul className="ka-depth-list">{current.items.map((item) => <li key={item}>{item}</li>)}</ul>
        <p className="ka-proof">{current.context}<strong>{current.emphasis}</strong></p>
      </div>
    </div>
  );
}
