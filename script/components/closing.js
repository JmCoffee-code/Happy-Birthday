// (function () {
//   window.Components = window.Components || {};

//   window.Components.closing = {
//     render(container, section) {
//       const div = document.createElement("div");
//       div.className = "section section-closing";
//       div.innerHTML = `
//         <p class="closing-text">${
//           section.text || "Okay, now come back and tell me if you liked it."
//         }</p>
//         <p class="replay-btn" id="replay">${
//           section.replayText || "Or click, if you want to watch it again."
//         }</p>
//         <p class="last-smile">:)</p>
//       `;
//       container.appendChild(div);
//       return div;
//     },

//     animate(tl, el) {
//       const ideaIn = { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" };
//       tl.from(el.querySelectorAll("p"), {
//         duration: 1, ...ideaIn, stagger: 1.2,
//       })
//       // Enable replay button only after it becomes visible
//       .set(el.querySelector("#replay"), { pointerEvents: "auto" })
//       .to(el.querySelector(".last-smile"), {
//         duration: 0.5, rotation: 90,
//       }, "+=1");
//     },
//   };
// })();
(function () {
  window.Components = window.Components || {};

  window.Components.closing = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-closing";

      div.innerHTML = `
        <div class="envelope-container">
          <div class="envelope" id="openLetter">
              💌
              <p>Click to Open</p>
          </div>

          <div class="love-letter" id="letter">
            <h2>💖 Happy Birthday Robina 💖</h2>

            <p>
            My Dearest Robina ❤️,
            <br><br>

            Happy Birthday, my love.

            Today is one of the most beautiful days because it is the day you were born.

            Thank you for being part of my life.

            Every smile you give makes my world brighter.
            Every laugh of yours becomes my favorite melody.

            I hope this birthday brings you endless happiness,
            good health,
            and all the love you truly deserve.

            Always remember...

            No matter what happens,
            I'll always be here for you.

            Thank you for loving me.

            I Love You So Much ❤️

            Happy Birthday once again.

            Forever Yours,

            <br><br>

            <strong>John ❤️</strong>
            </p>

            <button id="closeLetter">Close</button>
          </div>
        </div>

        <p class="replay-btn" id="replay">
          ${
            section.replayText ||
            "Click here if you want to watch it again ❤️"
          }
        </p>
      `;

      container.appendChild(div);

      const envelope = div.querySelector("#openLetter");
      const letter = div.querySelector("#letter");
      const close = div.querySelector("#closeLetter");

      envelope.onclick = () => {
        envelope.style.display = "none";
        letter.style.display = "block";
      };

      close.onclick = () => {
        letter.style.display = "none";
        envelope.style.display = "block";
      };

      return div;
    },

    animate(tl, el) {
      tl.from(el.querySelector(".envelope"), {
        duration: 1,
        scale: 0,
        opacity: 0,
      });

      tl.from(
        el.querySelector(".replay-btn"),
        {
          duration: 1,
          y: 30,
          opacity: 0,
        },
        "+=0.5"
      );

      tl.set(el.querySelector("#replay"), {
        pointerEvents: "auto",
      });
    },
  };
})();