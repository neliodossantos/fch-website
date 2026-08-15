import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { DirecaoStructure } from '@/components/direcao/DirecaoStructure'

export const metadata: Metadata = {
  title: 'Direcção',
  description: 'Conheça a equipa de direção da Faculdade de Ciências Humanas.',
}

const direcao = [
  {
    nome: 'Nlando Matondo Faustino',
    cargo: 'Decano',
    titulacao: 'Doutor em Filosofia',
    email: 'nlando.faustino@ucan.edu',
    areas: ['Filosofia Política', 'Ciências da Educação'],
    foto_url: '/images/decana/decano.png',
  },
  {
    nome: 'Dr.ª Evanilse Diogo',
    cargo: 'Vice-Decana para a Graduação',
    titulacao: 'Psicóloga Clínica',
    email: 'evanilse.diogo@ucan.edu',
    areas: ['Psicoterapia', 'Investigação'],
    foto_url: '/images/professores/Evanilse.PNG',
  },
  {
    nome: 'Dr. Manuel Dala',
    cargo: 'Vice-Decano para as Pós-Graduações, Investigação e Extensão',
    titulacao: 'Psicólogo do Trabalho e das Organizações',
    email: 'manuel.dala@ucan.edu',
    areas: ['Investigação', 'Consultoria Organizacional'],
    foto_url: '/images/professores/mdala.jpg',
  },
]

const chefesDepartamento = [
  {
    nome: 'Dr.ª Helena Veloso',
    cargo: 'Chefe do Departamento de Psicologia Clínica',
    email: 'helena.veloso@ucan.edu',
    foto_url: '/images/professores/Hveloso.png',
  },
  {
    nome: 'Mestre Manuel Armando Dala',
    cargo: 'Chefe do Departamento de Psicologia do Trabalho e das Organizações',
    email: 'manuel.dala@ucan.edu',
    foto_url: '/images/professores/mdala.jpg',
  },
  {
    nome: 'Dr. Domingos Carlos Pascoal',
    cargo: 'Chefe do Departamento de Línguas Românicas e Literaturas Modernas',
    email: 'domingos.pascoal@ucan.edu',
    foto_url: undefined,
  },
  {
    nome: 'Dr. Francisco Matete',
    cargo: 'Chefe do Departamento de Línguas Germânicas e Literaturas Modernas',
    email: 'francisco.matete@ucan.edu',
    foto_url: '/images/professores/Matete.jpg',
  },
]

const apoioDirecao = [
  { nome: 'Kengue Fernando', cargo: 'Assistente de Direcção', email: 'kengue.fernando@ucan.edu', foto_url: '/images/secretarios/kengue.jpeg' },
  { nome: 'José Tchopeto', cargo: 'Secretário da Graduação', email: 'jose.tchopeto@ucan.edu', foto_url: '/images/secretarios/jose.jpeg' },
  { nome: 'Felizarda Costa', cargo: 'Secretária da Graduação', email: 'felizarda.costa@ucan.edu', foto_url: '/images/secretarios/felizarda.jpg' },
  { nome: 'Yola Filipe', cargo: 'Secretária da Pós-Graduação', email: 'yola.filipe@ucan.edu', foto_url: '/images/secretarios/yola.png' },
  { nome: 'Beatriz Deolinda', cargo: 'Secretária da Pós-Graduação', email: 'beatriz.deolinda@ucan.edu', foto_url: '/images/secretarios/beatriz.jpeg' },
]

const decanosHistorico = [
  { nome: 'Professor Doutor António Fernandes da Costa', cargo: 'Decano fundador', destaque: '2003', foto_url: '/images/decana/Dr.-Costa.png' },
  { nome: 'Dr.ª Ana Bela Pereira Loureiro', cargo: 'Decana', destaque: 'Mandato anterior', foto_url: '/images/decana/decana.jpg' },
]

const vicedecanosHistorico = [
  { nome: 'Dr.ª Elizabeth Ceita', cargo: 'Vice-Decana para a Graduação' },
  { nome: 'Dr.ª Edvalda Mendes', cargo: 'Vice-Decana para a Graduação' },
  { nome: 'Dr. Artur Santos', cargo: 'Vice-Decano para a Graduação', foto_url: '/images/professores/Artur.jpg' },
  { nome: 'Dr.ª Vânia Filipe', cargo: 'Vice-Decana Interina para a Graduação' },
]

export default function DirecaoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre a FCH"
        title="Direcção"
        description="Conheça a equipa responsável pela gestão da Faculdade."
      />

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <DirecaoStructure
            decano={direcao[0]}
            vicedecanos={direcao.slice(1)}
            apoio={apoioDirecao}
            chefes={chefesDepartamento}
            decanosHistorico={decanosHistorico}
            vicedecanosHistorico={vicedecanosHistorico}
          />
        </div>
      </section>
    </>
  )
}
