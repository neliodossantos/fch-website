import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Estrutura Organizacional',
  description: 'Conheça a estrutura organizacional da Faculdade de Ciências Sociais e Humanas.',
}

const departamentos = [
  {
    nome: 'Departamento de Psicologia',
    coordenador: 'Prof. Dr. António Silva',
    cursos: ['Licenciatura em Psicologia', 'Mestrado em Psicologia Clínica'],
  },
  {
    nome: 'Departamento de Serviço Social',
    coordenador: 'Prof.ª Dr.ª Maria Santos',
    cursos: ['Licenciatura em Serviço Social', 'Mestrado em Gestão Social'],
  },
  {
    nome: 'Departamento de Sociologia',
    coordenador: 'Prof. Dr. João Costa',
    cursos: ['Licenciatura em Sociologia'],
  },
  {
    nome: 'Departamento de Comunicação Social',
    coordenador: 'Prof.ª Dr.ª Ana Rodrigues',
    cursos: ['Licenciatura em Comunicação Social'],
  },
]

const unidades = [
  {
    nome: 'Centro de Investigação e Estudos Interdisciplinares (CIEI)',
    descricao: 'Unidade dedicada à investigação científica nas áreas das Ciências Sociais e Humanas.',
  },
  {
    nome: 'Laboratório de Psicologia',
    descricao: 'Espaço para prática supervisionada de estudantes e atendimento à comunidade.',
  },
  {
    nome: 'Coordenação de Estágios',
    descricao: 'Gestão dos estágios curriculares e parcerias com instituições.',
  },
  {
    nome: 'Coordenação de Extensão',
    descricao: 'Organização de cursos complementares e atividades de formação contínua.',
  },
  {
    nome: 'Secretaria Académica',
    descricao: 'Serviços administrativos e atendimento aos estudantes.',
  },
]

export default function EstruturaOrganizacionalPage() {
  return (
    <>
      <PageHeader
        title="Estrutura Organizacional"
        description="Como a FCH está organizada para melhor servir a comunidade académica."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <SectionTitle 
              title="Departamentos" 
              subtitle="Unidades académicas responsáveis pela coordenação dos cursos"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departamentos.map((dept, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{dept.nome}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Coordenador:</strong> {dept.coordenador}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Cursos:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {dept.cursos.map((curso, i) => (
                        <li key={i}>{curso}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <SectionTitle 
              title="Unidades de Apoio" 
              subtitle="Estruturas que suportam as atividades de ensino, investigação e extensão"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {unidades.map((unidade, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-primary mb-2">{unidade.nome}</h3>
                    <p className="text-sm text-gray-600">{unidade.descricao}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
