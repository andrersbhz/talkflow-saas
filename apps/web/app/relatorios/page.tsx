import Shell from '@/components/Shell';
const m=[['Atendimentos','0'],['TME','0s'],['TMA','0s'],['SLA','—'],['CSAT','—'],['Conversão','0%']];
export default function Page(){return <Shell><div className="top"><div><h1>Relatórios</h1><p className="muted">Operação, equipe e conversão.</p></div></div><div className="grid cols3">{m.map(x=><div className="card" key={x[0]}>{x[0]}<div className="metric">{x[1]}</div></div>)}</div></Shell>}
