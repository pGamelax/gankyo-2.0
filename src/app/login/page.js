import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className=" flex flex-row">
      <div className="w-[60%] h-screen bg-no-repeat bg-cover bg-center bg-login-image"></div>
      <div className="w-[40%] h-screen">
        <div
          className=" w-80 h-3/4 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center flex flex-col
        "
        >
          <div className="top-1/2 -translate-y-1/2 relative ">
            <h1 className="text-4xl font-bold text-h1-text font-sans text-center">
              LOGIN
            </h1>
            <div className="flex flex-col mt-8">
              <label className="text-h1-text ml-2 text-lg font-sans">
                Usuário
              </label>
              <input
                placeholder="Usuário"
                className="w-80 h-11 ml-1 outline-none border rounded bg-zinc-100 p-2 focus:border focus:border-violet-alt"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-h1-text ml-2 text-lg font-sans">
                Senha
              </label>
              <input
                placeholder="Senha"
                className="w-80 h-11 ml-1 outline-none border rounded bg-zinc-100 p-2 focus:border focus:border-violet-alt"
              />
            </div>
            <div className="flex flex-row justify-between w-full mt-6">
              <div>
                <label className="select-none hover:text-violet-alt">
                  <input
                    type="checkbox"
                    className="mr-1 checked:bg-violet-alt"
                  />
                  Lembrar-me
                </label>
              </div>
              <div>
                <Link href="#" className="select-none hover:text-violet-alt">
                  Esqueci minha senha
                </Link>
              </div>
            </div>
            <button className="bg-violet-alt w-80 mt-6 p-2 rounded text-white hover:brightness-95">
              Entrar
            </button>
            <div className="mt-4 text-start w-full">
              <label>Não tem uma conta?</label>
              <Link className="ml-2 text-violet-alt underline" href="#">
                Cadastre-se
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
