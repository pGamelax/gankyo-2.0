import Link from "next/link";

export default function Navbar({options}) {
 
  return (
    <div>
      <div className="h-12 bg-white rounded shadow-md flex flex-row items-center">
        {options.map((item, index) => {
          return (
            <Link
              href={item.href}
              key={index}
              className="h-10 w-20 bg-violet-alt ml-2 rounded text-white px-2 flex items-center justify-center"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
