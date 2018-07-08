(async function() {
  let data = browser.storage.local.get(["prevChangeset", "currChangeset"]);
  let {prevChangeset, currChangeset} = await data;
  let url = await browser.experiments.sourceRevision.getURL();
  let [base, rev] = url.split("/rev/");
  if (currChangeset !== rev) {
    prevChangeset = currChangeset;
    currChangeset = rev;
    browser.storage.local.set({prevChangeset, currChangeset});
  }
  browser.menus.create({
    id: "menu",
    title: "View pushlog",
    contexts: ["tools_menu"],
  });
  browser.menus.create({
    parentId: "menu",
    title: "Open pushlog between last and current build",
    enabled: !!prevChangeset,
    onclick: function() {
      let url = base + "/pushloghtml?fromchange=" + prevChangeset + "&tochange=" + currChangeset;
      browser.tabs.create({url});
    },
  });
  browser.menus.create({
    parentId: "menu",
    title: "Open pushlog after current build",
    onclick: function() {
      let url = base + "/pushloghtml?fromchange=" + currChangeset;
      browser.tabs.create({url});
    },
  });
  browser.menus.create({
    parentId: "menu",
    title: "Open current build",
    onclick: function() {
      browser.tabs.create({url});
    },
  });
})();
