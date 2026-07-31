import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { TeamMember } from '@/components/shared/TeamMember'

export const metadata: Metadata = {
  title: 'Direcção',
  description: 'Conheça a equipa de direção da Faculdade de Ciências Sociais e Humanas.',
}

const direcao = [
  {
    nome: 'Dr.ª Ana Bela Loureiro',
    cargo: 'Decana',
    titulacao: 'Linguísta',
    email: 'anabela.loureiro@ucan.edu',
    areas: ['Estudos Linguísticos', 'Investigação'],
    foto_url: '/images/decana/decana.jpg',
  },
  {
    nome: 'Dr.ª Evanilse Diogo',
    cargo: 'Vice-Decana para a área Académica',
    titulacao: 'Psicologa Clinica',
    email: 'evanilse.diogo@ucan.edu',
    areas: ['Psicoterapia', 'Investigação'],
    foto_url: '/images/professores/Evanilse.PNG',

  },
  {
    nome: 'Dr. Manuel Dala',
    cargo: 'Vice-Decano para Pós-Graduação, Investigação e Extensão',
    titulacao: 'Psicologo do Trabalho e das Organizações',
    email: 'manuel.dala@ucan.edu',
    areas: ['Investigação', 'Coonsultoria Organizacional'],
    foto_url: '/images/professores/mdala.jpg',

  },
]

const coordenadores = [
  {
    nome: 'Dr. Manuel Dala',
    cargo: 'Coordenador de Psicologia de Trabalho e das Organizações',
    email: 'manuel.dala@ucan.edu',
    foto_url: '/images/professores/mdala.jpg',

  },
  {
    nome: 'Dr.ª Helena Veloso',
    cargo: 'Coordenadora de Psicologia Clinica',
    email: 'helena.veloso@ucan.edu',
    foto_url: '/images/professores/Helena.jpg',

  },
  {
    nome: 'Drª. Jeanine Silveira ',
    cargo: 'Coordenadora de Linguas Romanicas',
    email: 'jeanine.silveira@ucan.edu',
    foto_url: '/images/professores/Jeanine.jpg',

  },
  {
    nome: 'Dr. Francisco Matete',
    cargo: 'Coordenador de Linguas Germanicas',
    email: 'francisco.matete@ucan.edu',
    foto_url: '/images/professores/Matete.jpg',

  },
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
            title="Coordenadores de Curso" 
            subtitle="Responsáveis pela gestão académica dos cursos"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coordenadores.map((coord, index) => (
              <TeamMember
                key={index}
                nome={coord.nome}
                cargo={coord.cargo}
                email={coord.email}
                foto_url={coord.foto_url}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
