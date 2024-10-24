import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5531982688382"
      target="blank"
      className="fixed bottom-6 right-6 sm:bottom-16 sm:right-16"
    >
      <Button className="flex items-center gap-2 px-6 py-6 rounded-full bg-blue-950 hover:bg-blue-900">
        <Phone className="size-4" />
        Contact Us
      </Button>
    </Link>
  );
}
