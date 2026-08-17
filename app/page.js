import { wixClient } from "@/lib/wixClient";

export default async function Home() {
  const { items } = await wixClient.products.queryProducts().find();

  return (
    <div>
      <h1>My Store</h1>
      {items.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>${product.price?.price}</p>
        </div>
      ))}
    </div>
  );
}
