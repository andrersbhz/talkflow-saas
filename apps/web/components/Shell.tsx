'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const items=[['/conversas','Conversas'],['/contatos','Contatos'],['/board','Board de contatos'],['/chatbots','Chatbots'],['/agentes-ia','Agentes de IA'],['/campanhas','Campanhas'],['/relatorios','Relatórios'],['/configuracoes','Configurações']];
export default function Shell({children}:{children:React.ReactNode}){const p=usePathname();return <div className="shell"><aside className="sidebar"><div className="brand">talkflow</div>{items.map(([href,label])=><Link key={href} href={href} className={`nav ${p===href?'active':''}`}>{label}</Link>)}<div className="spacer"/><div className="nav">Notificações</div><div className="nav">Suporte</div><div className="nav">Administrador</div></aside><main className="content">{children}</main></div>}
