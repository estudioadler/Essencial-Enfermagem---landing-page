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
        </div>
        <p className="mt-8 text-neutral-800">
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
