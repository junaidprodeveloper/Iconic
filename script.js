window.customElements.define('icon-ic', class extends HTMLElement {});
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchTrigger = document.getElementById("search-trigger");
  const searchContainer = document.getElementById("search-container");

  // Core function to filter cards based on the input text
  const performSearch = () => {
    const query = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const heading = card.querySelector("h1, .car-h1");
      if (heading) {
        const text = heading.textContent.toLowerCase();
        // Show card if it matches the query, otherwise hide it
        card.style.display = text.includes(query) ? "" : "none";
      }
    });
  };

  // 1. Trigger on typing (Live Search)
  searchInput.addEventListener("input", performSearch);

  // 2. Trigger on pressing Enter key
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  });

  // 3. Trigger on clicking the button (handles expansion toggle + manual search click)
  searchTrigger.addEventListener("click", (e) => {
    e.preventDefault();

    if (!searchContainer.classList.contains("active")) {
      // If closed, expand the bar and focus input
      searchContainer.classList.add("active");
      searchInput.focus();
    } else {
      // If open, perform the search filter
      performSearch();

      // Optional: Collapse back if input is empty on click
      if (searchInput.value.trim() === "") {
        searchContainer.classList.remove("active");
      }
    }
  });

  // Optional: Collapse search bar if clicking completely outside of it when empty
  document.addEventListener("click", (e) => {
    if (!searchContainer.contains(e.target) && searchInput.value.trim() === "") {
      searchContainer.classList.remove("active");
    }
  });
});
// ============================================================================
// Icon Details Panel
// ============================================================================
(() => {
  // ---------- Styles ----------
  const style = document.createElement("style");
  style.textContent = `
    #ic-panel{
      position:fixed;
      top:0;
      right:-430px;
      width:430px;
      max-width:100%;
      height:100%;
      background:#fff;
      box-shadow:-8px 0 30px rgba(0,0,0,.18);
      transition:right .3s ease;
      z-index:999999;
      overflow:auto;
      font-family:system-ui,sans-serif;
    }
    #ic-panel.open{ right:0; }

    #ic-overlay{
      position:fixed;
      inset:0;
      background:rgba(0,0,0,.35);
      opacity:0;
      visibility:hidden;
      transition:.25s;
      z-index:999998;
    }
    #ic-overlay.open{
      opacity:1;
      visibility:visible;
    }

    .ic-panel-header{
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:20px;
      border-bottom:1px solid #eee;
      position:sticky;
      top:0;
      background:#fff;
      z-index:2;
    }

    .ic-panel-header h2{
      margin:0;
      font-size:22px;
    }

    .ic-close{
      border:none;
      background:none;
      font-size:28px;
      cursor:pointer;
    }

    .ic-body{
      padding:20px;
    }

    .ic-preview{
      display:flex;
      justify-content:center;
      align-items:center;
      height:180px;
      font-size:100px;
      border:1px solid #eee;
      border-radius:12px;
      margin-bottom:25px;
      background:#fafafa;
    }

    .ic-section{
      margin-bottom:24px;
    }

    .ic-section h3{
      margin:0 0 10px;
      font-size:16px;
    }

    .ic-code{
      position:relative;
      background:#111827;
      color:#fff;
      border-radius:8px;
      overflow:hidden;
    }

    .ic-code pre{
      margin:0;
      padding:14px;
      overflow:auto;
      white-space:pre-wrap;
      word-break:break-word;
    }

    .ic-copy{
      position:absolute;
      top:8px;
      right:8px;
      border:none;
      background:#2563eb;
      color:#fff;
      padding:6px 10px;
      border-radius:6px;
      cursor:pointer;
      font-size:12px;
    }

    .ic-grid{
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:10px;
    }

    .ic-tag{
      background:#f5f5f5;
      border-radius:8px;
      padding:10px;
      text-align:center;
      cursor:pointer;
      transition:.2s;
    }

    .ic-tag:hover{
      background:#e8f0ff;
    }

    .ic-footer{
      padding:25px;
      text-align:center;
      color:#666;
      border-top:1px solid #eee;
      font-size:14px;
    }
  `;
  document.head.appendChild(style);

  // ---------- Overlay ----------
  const overlay = document.createElement("div");
  overlay.id = "ic-overlay";
  document.body.appendChild(overlay);

  // ---------- Panel ----------
  const panel = document.createElement("div");
  panel.id = "ic-panel";
  document.body.appendChild(panel);

  function code(title, value, copy = false) {
    return `
      <div class="ic-section">
        <h3>${title}</h3>
        <div class="ic-code">
          ${copy ? `<button class="ic-copy" data-copy="${encodeURIComponent(value)}">Copy</button>` : ""}
          <pre>${value.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</pre>
        </div>
      </div>
    `;
  }

  function openPanel(iconClass){

    const iconName = iconClass.replace(/^ic-/,"");

    panel.innerHTML = `
      <div class="ic-panel-header">
        <h2>${iconName}</h2>
        <button class="ic-close">&times;</button>
      </div>

      <div class="ic-body">

        <div class="ic-preview">
          <i-ic class="${iconClass}"></i-ic>
        </div>

        ${code("Add in &lt;head&gt;",
`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/junaidprodeveloper/Iconic@2.0.0/iconic.min.css">`)}

        ${code("HTML",
`<i-ic class="${iconClass}"></i-ic>`,true)}

        <div class="ic-section">
          <h3>Recommended Utility Classes</h3>

          <div class="ic-grid">
            ${[
              "ic-2x",
              "ic-3x",
              "ic-spin",
              "ic-pulse",
              "ic-hover-grow",
              "ic-hover-rotate",
              "ic-hover-glow",
              "ic-shadow",
              "ic-round",
              "ic-bordered",
              "ic-text-primary",
              "ic-text-success"
            ].map(v=>`<div class="ic-tag" data-copy="${encodeURIComponent(v)}">${v}</div>`).join("")}
          </div>
        </div>

        ${code(":root Variables",
`:root{
  --ic-size:1em;
  --ic-color:currentColor;
  --ic-duration:.25s;
  --ic-opacity:1;
}`)}

      </div>

      <div class="ic-footer">
        ❤️ Thanks for using <b>Iconic</b>.
      </div>
    `;

    panel.classList.add("open");
    overlay.classList.add("open");
  }

  function closePanel(){
    panel.classList.remove("open");
    overlay.classList.remove("open");
  }

  // ---------- Events ----------

  document.addEventListener("click",(e)=>{

    const card=e.target.closest(".card");

    if(card){

      const icon=card.querySelector("i-ic");

      if(icon){

        const cls=[...icon.classList].find(c=>c.startsWith("ic-"));

        if(cls){
          openPanel(cls);
        }
      }
    }

    if(e.target.classList.contains("ic-close") || e.target===overlay){
      closePanel();
    }

    const btn=e.target.closest("[data-copy]");

    if(btn){
      navigator.clipboard.writeText(decodeURIComponent(btn.dataset.copy));
      btn.textContent="Copied!";
      setTimeout(()=>btn.textContent="Copy",1200);
    }

  });

})();