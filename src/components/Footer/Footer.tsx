import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="max-w-screen-2xl p-6 md:p-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link
              href={"/"}
              className="font-mollie text-4xl flex gap-2 items-center"
            >
              <Image
                src="/symb-logo.svg"
                alt="logotipo essencial enfermagem"
                width={32}
                height={32}
              />
              <div className="flex flex-col leading-none font-medium text-base text-blue-900 mb-1">
                <span className="font-semibold">essencial</span>
                <span className="font-semibold">enfermagem</span>
              </div>
            </Link>
            <p className="mt-4">
            Conectamos famílias com cuidadores profissionais de
            confiança.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2">
                <Link href="/"> About </Link>
                <Link href="/"> Meet the Team </Link>
                <Link href="/"> History </Link>
                <Link href="/"> Careers </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2">
                <Link href="/"> 1on1 Coaching </Link>
                <Link href="/"> Company Review </Link>
                <Link href="/"> Accounts Review </Link>
                <Link href="/"> HR Consulting </Link>
                <Link href="/"> SEO Optimisation </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2">
                <Link href="/"> Contact </Link>
                <Link href="/"> FAQs </Link>
                <Link href="/"> Live Chat </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2">
                <Link href="/"> Privacy Policy </Link>
                <Link href="/"> Terms &amp; Conditions </Link>
                <Link href="/"> Returns Policy </Link>
                <Link href="/"> Accessibility </Link>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm text-neutral-800">
          © 2024{" "}
          <Link
            href="https://linkedin.com/in/estudioadler"
            className="underline"
          >
            @estudioadler
          </Link>{" "}
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
