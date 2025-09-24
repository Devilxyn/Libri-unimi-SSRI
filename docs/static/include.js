function includeHTML(id, file, callback) {
  fetch(file)
    .then(resp => {
      if (!resp.ok) throw new Error("Errore fetch " + file);
      return resp.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    })
    .catch(err => console.error(err));
}

document.addEventListener("DOMContentLoaded", function () {
  // Lista di include con i rispettivi id
  const includesList = [
    { id: "header-include", file: "static/header.html" },
    { id: "sidebar-include", file: "static/sidebar.html" },
    { id: "footer-include", file: "static/footer.html" }
  ];

  let done = 0;

  function checkAllIncluded() {
    done++;
    if (done === includesList.length) {
      // quando tutti gli include sono caricati → carica theme.js
      const script = document.createElement("script");
      script.src = "static/theme.js";
      document.body.appendChild(script);
    }
  }

  includesList.forEach(item => {
    includeHTML(item.id, item.file, checkAllIncluded);
  });
});
