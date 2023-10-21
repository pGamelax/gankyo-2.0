"use client";

import Link from "next/link";

export default function SideBar({children}) {
  return (
    <div className="flex flex-row">
      <div className="h-screen w-60 flex flex-col justify-between bg-[#100F10]">
        <div>
          <div className=" flex items-center h-14 border-b border-zinc-400">
            <img src="/logo.svg" width={120} className=" ml-4" />
          </div>
          <div className="mt-2">
            <Link href="#" className="flex flex-row gap-2 h-12 ml-4 items-center">
              <img src="/home-icon.svg" width={20} />
              <span className="text-zinc-300 hover:text-zinc-400">
                Dashboard
              </span>
            </Link>
          </div>
          <div className="text-white flex flex-col mt-2">
            <span className="text-base text-zinc-400 ml-2">Geral</span>
            <ul className="mt-2">
              <li className="text-zinc-300 flex items-center h-10 lg:h-12 ml-4 w-48 hover:text-zinc-400 hover:cursor-pointer">
                <span className="flex flex-row gap-2">
                  <img src="/invoice-sales-line.svg" width={20} />
                  Central de vendas
                </span>
              </li>
              <li className="text-zinc-300 flex items-center h-10 lg:h-12 ml-4 w-48 hover:text-zinc-400 hover:cursor-pointer">
                <span className="flex flex-row gap-2">
                  <img src="/clipboard.svg" width={20} />
                  Produtos
                </span>
              </li>
              <li className="text-zinc-300 flex items-center h-10 lg:h-12 ml-4 w-48 hover:text-zinc-400 hover:cursor-pointer">
                <span className="flex flex-row gap-2">
                  <img src="/boxes.svg" width={20} />
                  Gerenciar estoque
                </span>
              </li>
              <li className="text-zinc-300 flex items-center h-10 lg:h-12 ml-4 w-48 hover:text-zinc-400 hover:cursor-pointer">
                <span className="flex flex-row gap-2">
                  <img src="/coin.svg" width={20} />
                  Financeiro
                </span>
              </li>
            </ul>
            <span className="text-base text-zinc-400 ml-2 mt-2">Extra</span>
            <ul className="mt-2">
              <li className="text-zinc-300  h-12 flex items-center ml-4 w-48 hover:text-zinc-400 hover:cursor-pointer">
                <span className="flex flex-row gap-2">
                  <img src="/settings.svg" width={20} />
                  Configurações
                </span>
              </li>
              <li className="text-zinc-300 flex items-center h-12 ml-4 w-48 hover:text-zinc-400 hover:cursor-pointer">
                <span className="flex flex-row gap-2">
                  <img src="/help.svg" width={20} />
                  Central de ajuda
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button className="text-white flex justify-center items-center w-full bg-violet-alt h-12 hover:brightness-90">
            <span className="flex flex-row justify-center gap-2 w-48 ">
              <img src="/leave.svg" width={24} />
              Sair
            </span>
          </button>
        </div>
      </div>

    </div>
  );
}
