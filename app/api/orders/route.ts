import { NextResponse } from "next/server";

type OrderItem = {
  id: string;
  title: string;
  qty: number;
  price: number;
};

type CreateOrderBody = {
  customer: {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
  };
  pickup: {
    option: "pick" | "prepacked";
    day: string;
    time: string;
    note?: string;
  };
  items: OrderItem[];
};

const memoryOrders: any[] = []; // dev-only

export async function POST(req: Request) {
  const body = (await req.json()) as CreateOrderBody;

  // minimal “validation”
  if (!body?.customer?.email || !body?.items?.length) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const orderId = crypto.randomUUID();

  const subtotal = body.items.reduce((sum, i) => sum + i.price * i.qty, 0);

  const order = {
    id: orderId,
    createdAt: new Date().toISOString(),
    status: "created",
    subtotal,
    currency: "HUF",
    ...body,
  };

  memoryOrders.push(order);

  return NextResponse.json({ orderId });
}

// csak gyors debughoz (opcionális)
export async function GET() {
  return NextResponse.json({ orders: memoryOrders });
}
