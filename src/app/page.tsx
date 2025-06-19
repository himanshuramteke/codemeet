import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <h1>
        Home
        <Button>Click me</Button>
        <Card>This is a card</Card>
      </h1>
    </div>
  )
}
