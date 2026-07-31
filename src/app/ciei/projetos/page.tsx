import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Projetos de Investigação',
  description: 'Projetos de investigação do CIEI - FCH.',
}

const projetosAtivos = [
  {
    titulo: 'Saúde Mental e Bem-Estar em Contexto Universitário',
    investigadores: ['Prof.ª Dr.ª Teresa Oliveira', 'Prof. Dr. António Silva'],
    ano: '2023-2025',
    descricao: 'Estudo sobre factores de risco e protecção para a saúde mental dos estudantes universitários.',
  },
  {
    titulo: 'Políticas Sociais e Redução da Pobreza',
    investigadores: ['Prof.ª Dr.ª Maria Santos', 'Prof. Dr. Carlos Ferreira'],
    ano: '2022-2024',
    descricao: 'Análise do impacto das políticas sociais na redução da pobreza e desigualdade.',
  },
  {
    titulo: 'Transformações Urbanas e Coesão Social',
    investigadores: ['Prof. Dr. João Costa', 'Prof.ª Dr.ª Sofia Pereira'],
    ano: '2023-2025',
    descricao: 'Investigação sobre os processos de transformação urbana e seus efeitos na coesão social.',
  },
  {
    titulo: 'Media Digitais e Participação Cívica',
    investigadores: ['Prof.ª Dr.ª Ana Rodrigues', 'Prof. Dr. Ricardo Almeida'],
    ano: '2022-2024',
    descricao: 'Estudo sobre o papel dos media digitais na participação cívica e política.',
  },
]

const projetosConcluidos = [
  {
    titulo: 'Intervenção Precoce em Crianças em Risco',
    investigadores: ['Prof. Dr. Pedro Martins'],
    ano: '2020-2022',
    descricao: 'Desenvolvimento e avaliação de um programa de intervenção precoce.',
  },
  {
    titulo: 'Envelhecimento Ativo e Qualidade de Vida',
    investigadores: ['Prof.ª Dr.ª Carla Mendes'],
    ano: '2019-2021',
    descricao: 'Estudo sobre estratégias de promoção do envelhecimento ativo.',
  },
  {
    titulo: 'Migração e Integração Social',
    investigadores: ['Prof.ª Dr.ª Luísa Fernandes'],
    ano: '2019-2021',
    descricao: 'Análise dos processos de integração social de populações migrantes.',
  },
]

export default function ProjetosPage() {
  return (
    <>
      <PageHeader
        title="Projetos de Investigação"
        description="Projetos em desenvolvimento e concluídos pelo CIEI."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Projetos em Desenvolvimento" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {projetosAtivos.map((projeto, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded">
                      Em desenvolvimento
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-300">{projeto.ano}</span>
                  </div>
                  <CardTitle className="text-lg">{projeto.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-200 text-sm mb-4 text-justify">{projeto.descricao}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    <strong>Investigadores:</strong> {projeto.investigadores.join(', ')}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <SectionTitle title="Projetos Concluídos" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projetosConcluidos.map((projeto, index) => (
              <Card key={index} className="opacity-90">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 px-2 py-1 rounded">
                      Concluído
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-300">{projeto.ano}</span>
                  </div>
                  <CardTitle className="text-base">{projeto.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-200 text-sm mb-2 text-justify">{projeto.descricao}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {projeto.investigadores.join(', ')}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
