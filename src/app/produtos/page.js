"use client";
import Navbar from "@/components/navbar/navbar";
import handleSort from "@/functions/handleShort";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/table/table";
import naturalSort from "natural-sort";
import Link from "next/link";
import { useState } from "react";

export default function ProdutosPage() {
  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [data, setData] = useState([
    
      {
        "codigo": "001",
        "descricao": "Produto A",
        "quantidade": 10,
        "marca": "Marca X"
      },
      {
        "codigo": "002",
        "descricao": "Produto B",
        "quantidade": 5,
        "marca": "Marca Y"
      },
      {
        "codigo": "003",
        "descricao": "Produto C",
        "quantidade": 15,
        "marca": "Marca Z"
      },
      {
        "codigo": "004",
        "descricao": "Produto D",
        "quantidade": 20,
        "marca": "Marca X"
      },
      {
        "codigo": "005",
        "descricao": "Produto E",
        "quantidade": 8,
        "marca": "Marca Y"
      },
      {
        "codigo": "006",
        "descricao": "Produto F",
        "quantidade": 12,
        "marca": "Marca Z"
      },
      {
        "codigo": "007",
        "descricao": "Produto G",
        "quantidade": 6,
        "marca": "Marca X"
      },
      {
        "codigo": "008",
        "descricao": "Produto H",
        "quantidade": 25,
        "marca": "Marca Y"
      },
      {
        "codigo": "009",
        "descricao": "Produto I",
        "quantidade": 30,
        "marca": "Marca Z"
      },
      {
        "codigo": "010",
        "descricao": "Produto J",
        "quantidade": 4,
        "marca": "Marca X"
      },
      {
        "codigo": "011",
        "descricao": "Produto K",
        "quantidade": 18,
        "marca": "Marca Y"
      },
      {
        "codigo": "012",
        "descricao": "Produto L",
        "quantidade": 9,
        "marca": "Marca Z"
      },
      {
        "codigo": "013",
        "descricao": "Produto M",
        "quantidade": 14,
        "marca": "Marca X"
      },
      {
        "codigo": "014",
        "descricao": "Produto N",
        "quantidade": 7,
        "marca": "Marca Y"
      },
      {
        "codigo": "015",
        "descricao": "Produto O",
        "quantidade": 11,
        "marca": "Marca Z"
      },
      {
        "codigo": "016",
        "descricao": "Produto P",
        "quantidade": 13,
        "marca": "Marca X"
      },
      {
        "codigo": "017",
        "descricao": "Produto Q",
        "quantidade": 21,
        "marca": "Marca Y"
      },
      {
        "codigo": "018",
        "descricao": "Produto R",
        "quantidade": 3,
        "marca": "Marca Z"
      },
      {
        "codigo": "019",
        "descricao": "Produto S",
        "quantidade": 16,
        "marca": "Marca X"
      },
      {
        "codigo": "020",
        "descricao": "Produto T",
        "quantidade": 17,
        "marca": "Marca Y"
      },
      {
        "codigo": "021",
        "descricao": "Produto U",
        "quantidade": 19,
        "marca": "Marca Z"
      },
      {
        "codigo": "022",
        "descricao": "Produto V",
        "quantidade": 2,
        "marca": "Marca X"
      },
      {
        "codigo": "023",
        "descricao": "Produto W",
        "quantidade": 24,
        "marca": "Marca Y"
      },
      {
        "codigo": "024",
        "descricao": "Produto X",
        "quantidade": 22,
        "marca": "Marca Z"
      },
      {
        "codigo": "025",
        "descricao": "Produto Y",
        "quantidade": 23,
        "marca": "Marca X"
      },
      {
        "codigo": "026",
        "descricao": "Produto Z",
        "quantidade": 27,
        "marca": "Marca Y"
      },
      {
        "codigo": "027",
        "descricao": "Produto AA",
        "quantidade": 28,
        "marca": "Marca Z"
      },
      {
        "codigo": "028",
        "descricao": "Produto BB",
        "quantidade": 32,
        "marca": "Marca X"
      },
      {
        "codigo": "029",
        "descricao": "Produto CC",
        "quantidade": 1,
        "marca": "Marca Y"
      },
      {
        "codigo": "030",
        "descricao": "Produto DD",
        "quantidade": 31,
        "marca": "Marca Z"
      },
      {
        "codigo": "031",
        "descricao": "Produto EE",
        "quantidade": 26,
        "marca": "Marca X"
      },
      {
        "codigo": "032",
        "descricao": "Produto FF",
        "quantidade": 29,
        "marca": "Marca Y"
      },
      {
        "codigo": "033",
        "descricao": "Produto GG",
        "quantidade": 35,
        "marca": "Marca Z"
      },
      {
        "codigo": "034",
        "descricao": "Produto HH",
        "quantidade": 36,
        "marca": "Marca X"
      },
      {
        "codigo": "035",
        "descricao": "Produto II",
        "quantidade": 37,
        "marca": "Marca Y"
      },
      {
        "codigo": "036",
        "descricao": "Produto JJ",
        "quantidade": 38,
        "marca": "Marca Z"
      },
      {
        "codigo": "037",
        "descricao": "Produto KK",
        "quantidade": 39,
        "marca": "Marca X"
      },
      {
        "codigo": "038",
        "descricao": "Produto LL",
        "quantidade": 40,
        "marca": "Marca Y"
      },
      {
        "codigo": "039",
        "descricao": "Produto MM",
        "quantidade": 41,
        "marca": "Marca Z"
      },
      {
        "codigo": "040",
        "descricao": "Produto NN",
        "quantidade": 42,
        "marca": "Marca X"
      },
      {
        "codigo": "041",
        "descricao": "Produto OO",
        "quantidade": 43,
        "marca": "Marca Y"
      },
      {
        "codigo": "042",
        "descricao": "Produto PP",
        "quantidade": 44,
        "marca": "Marca Z"
      },
      {
        "codigo": "043",
        "descricao": "Produto QQ",
        "quantidade": 45,
        "marca": "Marca X"
      },
  ]);
  const options = [
    { name: "Entrada de produtos", href: "#" },
    { name: "Saida de produtos", href: "#" },
  ];

  const changeStateOptions = () => {
    setIsOpenOptions(!isOpenOptions);
  };

  const handleSort = (field) => {
    const order = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(order);

    const _products = [...data].sort((a, b) => {
      return order === "asc"
        ? naturalSort()(a[field], b[field])
        : -naturalSort()(a[field], b[field]);
    });
    setData(_products);
  };

  return (
    <div className="bg-violet-50 w-full">
      <div className="h-14 bg-white rounded shadow-md flex flex-row items-center justify-between">
        <div className="pl-4 ">
          <span className="font-bold text-lg font-sans">PRODUTOS</span>
        </div>
        <div className="border bg-zinc-100 rounded focus-within:border-violet-alt h-10 flex flex-row">
          <input
            placeholder="buscar"
            className=" pl-2 outline-none rounded bg-zinc-100  "
          />
          <button
            className="h-full w-10 flex items-center justify-center rounded-e-sm bg-violet-alt"
            onClick={() => console.log("oi")}
          >
            <img src="/search.svg" width={24} />
          </button>
        </div>

        <div className="mr-4 h-full relative flex flex-col items-center justify-center">
          <div className="flex items-center ">
            <div className="bg-violet-alt flex flex-row border h-10 w-24 rounded items-center ">
              <Link
                href="#"
                className="h-full  w-3/4 border-r flex items-center justify-center text-white hover:brightness-90 bg-violet-alt rounded-s
            "
              >
                Novo
              </Link>
              <button
                onClick={() => {
                  changeStateOptions();
                  console.log(isOpenOptions);
                }}
                className="w-1/4 h-full flex justify-center items-center bg-violet-alt hover:brightness-90 rounded"
              >
                <img
                  src="/triangle.svg"
                  width={12}
                  className={`${
                    isOpenOptions ? "" : "rotate-180"
                  } animate-rotates`}
                />
              </button>
            </div>
          </div>
          <div
            className={`${
              isOpenOptions ? "flex" : "hidden"
            } absolute top-full bg-white w-44 left-full -translate-x-full flex-col shadow-2xl border-t text-base rounded-b`}
          >
            {options.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.href}
                  className="border-b h-10 flex justify-center items-center hover:bg-violet-100 hover:text-t-violet"
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="#"
              className="bg-violet-alt w-44 rounded-b text-white flex justify-center items-center h-8 hover:brightness-90"
            >
              Cadastrar
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <table className="w-[736px]">
          <thead className="h-8">
            <tr className="">
              <th
                className="text-zinc-400 w-24 text-start"
                onClick={() => handleSort("codigo")}
              >
                Codigo
              </th>
              <th
                className="text-zinc-400 w-96 text-start"
                onClick={() => handleSort("descricao")}
              >
                Descricao
              </th>
              <th
                className="text-zinc-400 w-24 text-start"
                onClick={() => handleSort("quantidade")}
              >
                Qntd.
              </th>
              <th
                className="text-zinc-400 w-40 text-start"
                onClick={() => handleSort("marca")}
              >
                Marca
              </th>
            </tr>
          </thead>
        </table>
        <div className="overflow-y-auto h-[calc(100vh_-_88px)]">
          <table className="border-separate border-spacing-y-2 w-[736px]">
            <tbody className="">
              {data &&
                data.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white rounded h-10 shadow-md"
                    >
                      <td className="p-2  w-24 rounded">{item.codigo}</td>
                      <td className="2-96">{item.descricao}</td>
                      <td className="w-24">{item.quantidade}</td>
                      <td className="rounded w-40">{item.marca}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
