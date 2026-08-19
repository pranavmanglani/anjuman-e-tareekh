/*
*/

(function () {
    "use strict";

    /* ==========================
       SETTINGS
    ========================== */

    const SETTINGS = {
        disableRightClick: true,
        disableShortcuts: true,
        detectDevTools: true,
        clearConsole: true,
        showConsoleBanner: true,
        showAlertOnRightClick: true,
        showAlertOnDevTools: true
    };

    /* ==========================
       CONSOLE BANNER
    ========================== */

    if (SETTINGS.clearConsole) {
        console.clear();
    }

    if (SETTINGS.showConsoleBanner) {
        console.log(
            `%c
Welcome, developer.

If you're inspecting this website out of curiosity,
you're welcome.

If you're looking for a way to bypass security,
all privileged actions are verified server-side.

Have a great day.
`,
            "color:#00E5FF;font-size:13px;font-family:monospace;font-weight:bold;"
        );
    }

    /* ==========================
       RIGHT CLICK
    ========================== */

    if (SETTINGS.disableRightClick) {

        document.addEventListener("contextmenu", function (e) {

            e.preventDefault();

            if (SETTINGS.showAlertOnRightClick) {

                alert(
                    `PM. Securities

Right click has been disabled.

This website is intended for educational purposes.

If you are a security researcher,
feel free to inspect responsibly.`
                );

            }

        });

    }

    /* ==========================
       SHORTCUTS
    ========================== */

    if (SETTINGS.disableShortcuts) {

        document.addEventListener("keydown", function (e) {

            const key = e.key.toLowerCase();

            if (
                e.key === "F12" ||

                (e.ctrlKey && e.shiftKey && key === "i") ||

                (e.ctrlKey && e.shiftKey && key === "j") ||

                (e.ctrlKey && e.shiftKey && key === "c") ||

                (e.ctrlKey && key === "u")
            ) {

                e.preventDefault();

                if (SETTINGS.showAlertOnDevTools) {

                    alert(
                        `

Developer tools detected.

Please note:

This website contains no client-side secrets.

Administrative actions are verified
securely on the server.`
                    );

                }

            }

        });

    }

    /* ==========================
       DEVTOOLS DETECTION
    ========================== */

    if (SETTINGS.detectDevTools) {

        let shown = false;

        setInterval(function () {

            const widthThreshold =
                window.outerWidth - window.innerWidth > 170;

            const heightThreshold =
                window.outerHeight - window.innerHeight > 170;

            if ((widthThreshold || heightThreshold) && !shown) {

                shown = true;

                if (SETTINGS.showAlertOnDevTools) {

                    alert(
                        `

Developer tools appear to be open.

Remember:

Client-side code is public.

All sensitive operations are protected
server-side.`
                    );

                }

            }

            if (!(widthThreshold || heightThreshold)) {

                shown = false;

            }

        }, 1000);

    }

})();
