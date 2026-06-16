import { useState } from "react";

const profilePanels = {
  education: {
    label: "Education",
    kicker: "Foundation",
    title: "Strategic learning for clearer decisions.",
    body: "Harper's education is centered on how people choose, how brands earn trust, and how teams turn scattered information into practical direction.",
    points: [
      "Marketing strategy and brand positioning",
      "Customer psychology and message clarity",
      "Analytics literacy for better planning",
    ],
  },
  history: {
    label: "History",
    kicker: "Origin",
    title: "Built around practical direction.",
    body: "RiotScale grew from seeing businesses get buried in tactics without a clear plan. Harper built the company around goals first, then the process needed to pursue them.",
    points: [
      "Clearer priorities before channel decisions",
      "Action plans that teams can actually follow",
      "A calmer rhythm for reviewing progress",
    ],
  },
  experience: {
    label: "Experience",
    kicker: "Practice",
    title: "Brand, web, and growth systems in one plan.",
    body: "Harper works across the full marketing picture, connecting positioning, website strategy, search visibility, creative direction, and measurement into one usable plan.",
    points: [
      "Brand and website strategy",
      "SEO and local visibility planning",
      "Campaign structure and measurement systems",
    ],
  },
};

const panelKeys = Object.keys(profilePanels);

export default function FounderPortrait() {
  const [activePanel, setActivePanel] = useState("education");
  const panel = profilePanels[activePanel];

  return (
    <section className="founder-feature" aria-label="Founder profile for Harper Young">
      <div className="founder-stage">
        <div
          className="founder-portrait"
          role="img"
          aria-label="Stylized portrait of Harper Young"
        >
          <span className="portrait-ring portrait-ring-one"></span>
          <span className="portrait-ring portrait-ring-two"></span>
          <div className="portrait-figure">
            <span className="portrait-shadow"></span>
            <span className="portrait-hair"></span>
            <span className="portrait-face"></span>
            <span className="portrait-neck"></span>
            <span className="portrait-jacket"></span>
            <span className="portrait-collar"></span>
          </div>
          <div className="portrait-nameplate">
            <span>Founder</span>
            <strong>Harper Young</strong>
          </div>
        </div>

        <div className="founder-tabs" role="tablist" aria-label="Founder details">
          {panelKeys.map((key) => {
            const item = profilePanels[key];
            const isActive = activePanel === key;

            return (
              <button
                aria-controls="founder-detail-panel"
                aria-selected={isActive}
                className={`founder-tab ${isActive ? "is-active" : ""}`}
                key={key}
                onClick={() => setActivePanel(key)}
                onFocus={() => setActivePanel(key)}
                onMouseEnter={() => setActivePanel(key)}
                role="tab"
                type="button"
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <aside className="founder-popout" id="founder-detail-panel" key={activePanel} role="tabpanel">
        <p className="eyebrow">/ {panel.kicker}</p>
        <h3>{panel.title}</h3>
        <p>{panel.body}</p>
        <ul>
          {panel.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
