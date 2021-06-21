(function () {
  'use strict';

  if (document.documentElement.style.scrollBehavior !== undefined) {
    // scroll-behavior supported by the browser... bail out
    return;
  }

  function scrollTo(element) {
    window.seamless.elementScrollIntoView(element, { behavior: 'smooth' });
  }

  const initialHash = window.location.hash ? window.location.hash : '#home';

  // maps hashes to their corresponding elements
  const targets = new Map();
  targets.set('#home', document.getElementById('home'));

  const links = document.getElementsByClassName('scroll');

  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const {hash} = link;
    targets.set(hash, document.getElementById(hash.substr(1)));

    link.addEventListener('click', (event) => {
      event.preventDefault();
      scrollTo(targets.get(hash));

      if (hash !== window.location.hash) {
        history.pushState(hash, null, hash);
      }
    });
  }

  window.addEventListener('popstate', (event) => {
    const {state} = event;

    if (state === null) {
      scrollTo(targets.get(initialHash));
    } else {
      scrollTo(targets.get(state));
    }
  });
})();
