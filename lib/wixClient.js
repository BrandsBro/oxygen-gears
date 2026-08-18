import { createClient, OAuthStrategy } from "@wix/sdk";
import { products } from "@wix/stores";
import { currentCart, checkout } from "@wix/ecom";
import { redirects } from "@wix/redirects";

export const wixClient = createClient({
  modules: { products, currentCart, checkout, redirects },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
  }),
});
