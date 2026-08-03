import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { TeamMember } from '@/components/shared/TeamMember'

export const metadata: Metadata = {
  title: 'Direcção',
  description: 'Conheça a equipa de direção da Faculdade de Ciências Humanas.',
}

const direcao = [
  {
    nome: 'Dr.ª Ana Bela Pereira Loureiro',
    cargo: 'Decana',
    titulacao: 'Linguísta',
    email: 'anabela.loureiro@ucan.edu',
    areas: ['Estudos Linguísticos', 'Investigação'],
    foto_url: '/images/decana/decana.jpg',
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
    foto_url: undefined,
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

const vicedecanosHistorico = [
  'Drª Elizabeth Ceita, Vice-Decana para a Graduação',
  'Drª Edvalda Mendes, Vice-Decana para a Graduação',
  'Dr. Artur Santos, Vice-Decano para a Graduação',
  'Drª Vânia Filipe, Vice-Decana Interina para a Graduação',
]

export default function DirecaoPage() {
  return (
    <>
      <PageHeader
        title="Direcção"
        description="Conheça a equipa responsável pela gestão da Faculdade."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Equipa de Direcção"
            subtitle="Órgão de gestão da Faculdade"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {direcao.map((membro, index) => (
              <TeamMember
                key={index}
                nome={membro.nome}
                cargo={membro.cargo}
                titulacao={membro.titulacao}
                email={membro.email}
                areas={membro.areas}
                foto_url={membro.foto_url}
              />
            ))}
          </div>

          <SectionTitle
            title="Chefes de Departamento"
            subtitle="Responsáveis pela gestão académica dos departamentos"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {chefesDepartamento.map((chefe, index) => (
              <TeamMember
                key={index}
                nome={chefe.nome}
                cargo={chefe.cargo}
                email={chefe.email}
                foto_url={chefe.foto_url}
              />
            ))}
          </div>

          <div className="max-w-3xl">
            <SectionTitle
              title="Vice-Decanos ao Longo dos Anos"
              subtitle="Galeria histórica da Vice-Decania para a Graduação"
            />
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              {vicedecanosHistorico.map((nome, index) => (
                <li key={index}>{nome}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              Com excepção da Doutora Elizabeth Ceita, os restantes gestores acima, incluindo os
              actuais Vice-Decanos, concluíram a Licenciatura na Faculdade de Ciências Humanas da
              Universidade Católica de Angola.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
