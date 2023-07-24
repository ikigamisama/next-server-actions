import { addProductToDatabase } from "@/actions/serverActions";
import AddProductButton from "@/components/AddProductButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export interface Product {
  id?: number;
  product: string;
  price: string;
  description: string;
}

export default async function Home() {
  const res = await fetch(
    "https://64be62e15ee688b6250c4f58.mockapi.io/Products",
    { cache: "no-cache", next: { tags: ["products"] } }
  );

  const product_list: Product[] = await res.json();

  return (
    <main className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-center tracking-tight">
        Products Warehouse
      </h1>
      <AddProductButton />

      <form
        action={addProductToDatabase}
        className="flex flex-col gap-5 p-5 mb-4"
      >
        <Input
          type="text"
          placeholder="Enter Product name . . "
          name="product"
        />
        <Input type="text" placeholder="Enter Price name . . " name="price" />
        <Textarea
          name="description"
          rows={5}
          placeholder="Enter Description . . . "
        />
        <Button type="submit" variant="default">
          Add Product
        </Button>
      </form>
      <h2 className="text-xl font-bold text-center mb-4">List of Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {product_list.map((product, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="w-full flex justify-between mb-2">
                <CardTitle>{product.product}</CardTitle>
                <CardTitle>${product.price}</CardTitle>
              </div>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </main>
  );
}
