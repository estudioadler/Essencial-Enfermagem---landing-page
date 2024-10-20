import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function ContactSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild className="fixed bottom-6 right-6 sm:bottom-16 sm:right-16">
        <Button className="flex items-center gap-2 px-6 py-6 rounded-full bg-blue-950 hover:bg-blue-900">
          <Phone className="size-4" />
          Contact Us
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] p-0">
        <div className="relative h-[200px] w-full overflow-hidden">
          <Image
            src="/about-img.jpg"
            alt="Consultation"
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="p-6">
          <SheetHeader className="text-white">
            <SheetTitle className="text-2xl font-bold">
              Arrange your free consultation now.
            </SheetTitle>
            <SheetDescription className="text-gray-400">
              Fill out the form below to get in touch with us.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>+42 20 123 456 78</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>jurri-law@gola.io</span>
            </div>
          </div>
          <form className="mt-8 space-y-4">
            <Input
              placeholder="Your Name"
            />
            <Input
              type="email"
              placeholder="Your Email"
            />
            <Textarea
              placeholder="Your Message"
            />
            <Button className="w-full">
              SEND MESSAGE
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  )
}