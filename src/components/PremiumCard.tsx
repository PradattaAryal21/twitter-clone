import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function PremiumCard() {
  return (
    <Card className="  border-none max-w-[380px]">
      <CardHeader>
        <h2 className="text-xl font-bold">Subscribe to Premium</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className=" ">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
        <Button className="w-fit bg-[#1d9bf0] hover:bg-[#1a8cd8]   rounded-full font-bold px-6">
          Subscribe
        </Button>
      </CardContent>
    </Card>
  )
}

