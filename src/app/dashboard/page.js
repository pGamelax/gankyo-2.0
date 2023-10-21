import CardDashboard from "@/components/cardDashboard/cardDashboard";
import Navbar from "@/components/navbar/navbar";

export default function DashboardPage() {
  return (
    <div className="bg-violet-50 w-full">
      <div className="2xl:h-24 h-16 flex items-center text-lg 2xl:text-2xl font-bold font-sans ml-6">VISÃO GERAL DE VENDAS </div>
      <div className="w-full h-40 flex flex-row gap-6 justify-center">
      <CardDashboard
        img = '/pig-piggy-bank.svg'
          title="VENDA DO MÊS"
          content="R$ 24.000,20"
          percentLastMonth={51}
        />
        <CardDashboard
        img = '/sales-amount.svg'
          title="Qtd vendas"
          content="32.000"
          percentLastMonth={83}
        />
        <CardDashboard
        img='/cart-minus.svg'
          title="Ticket médio"
          content="R$ 312,00"
          percentLastMonth={98}
        />
      </div>
    </div>
  );
}
