import Shell from '@/components/Shell';
const cols=['Novo lead','Atendimento','Qualificado','Proposta','Ganho'];
export default function Page(){return <Shell><div className="top"><div><h1>Board de contatos</h1><p className="muted">Funil CRM com drag-and-drop planejado.</p></div><button className="btn">+ Novo funil</button></div><div className="kanban">{cols.map((c,i)=><div className="column" key={c}><b>{c}</b>{i<3&&<div className="lead"><b>{['Mariana Lima','João Martins','Carla Souza'][i]}</b><p className="muted">WhatsApp · R$ {['2.400','1.250','4.900'][i]}</p></div>}</div>)}</div></Shell>}
