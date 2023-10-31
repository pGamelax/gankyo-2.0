"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginUseClient() {
  const { register, handleSubmit, getValues } = useForm();
  const [activeModalSubscribe, setActiveModalSubscribe] = useState(null)

  const handleLoin = (data) => {
    
    console.log(data)
  };
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
            <form
              onSubmit={handleSubmit(handleLoin)}
            >
              <div className="flex flex-col mt-8">
                <label className="text-h1-text ml-2 text-lg font-sans">
                  Usuário
                </label>
                <input
                  {...register("username")}
                  type="text"
                  placeholder="Usuário"
                  className="w-80 h-11 ml-1 outline-none border rounded bg-zinc-100 p-2 focus:border focus:border-violet-alt sha"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label className="text-h1-text ml-2 text-lg font-sans">
                  Senha
                </label>
                <input
                  {...register("password")}
                  placeholder="Senha"
                  type="password"
                  className="w-80 h-11 ml-1 outline-none border rounded bg-zinc-100 p-2 focus:border focus:border-violet-alt"
                />
              </div>

              <div className="mt-6 ml-1">
                <Link href="#" className="select-none hover:text-violet-alt">
                  Esqueci minha senha
                </Link>
              </div>

              <button
                type="submit"
                className="bg-violet-alt w-80 mt-6 p-2 rounded text-white hover:brightness-95"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
   
    </div>
  );
}

