import { createClient, OAuthStrategy } from "@wix/sdk";
import { currentCart } from "@wix/ecom";
import { redirects } from "@wix/redirects";
import Cookies from "js-cookie";

export const wixBrowserClient = createClient({
  modules: { currentCart, redirects },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    tokens: JSON.parse(Cookies.get("session") || "null"),
  }),
});

wixBrowserClient.auth.onTokensChanged((tokens) => {
  Cookies.set("session", JSON.stringify(tokens), { expires: 2 });
});
