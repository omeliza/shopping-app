import Card from "@/components/Card/Card";
import Cart from "@/components/Cart/Cart";
import Drawer from "@/components/Drawer/Drawer";
import { getData } from "./action";
import LoadMore from "@/components/LoadMore/LoadMore";

export default async function Home() {
  const data = await getData(1);

  if (!data) {
    return;
  }

  if (typeof data === "string") {
    return (
      <div>
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          Error
        </div>
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          {data}
        </div>
      </div>
    );
  }

  return (
    <>
      <Drawer>
        <Cart />
      </Drawer>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
          <LoadMore />
        </div>
      </main>
    </>
  );
}
