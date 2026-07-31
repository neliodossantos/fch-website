import { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Links Úteis',
  description: 'Links úteis para estudantes e comunidade da FCH.',
}

const linksInternos = [
  { titulo: 'Portal do Estudante', url: '#', descricao: 'Acesso às notas, horários e serviços online' },
  { titulo: 'Biblioteca Virtual', url: '#', descricao: 'Acervo digital de livros e periódicos' },
  { titulo: 'Plataforma de E-Learning', url: '#', descricao: 'Aulas e materiais online' },
  { titulo: 'Email Institucional', url: '#', descricao: 'Webmail da FCH' },
]

const linksAcademicos = [
  { titulo: 'SciELO', url: 'https://scielo.org', descricao: 'Scientific Electronic Library Online' },
  { titulo: 'Google Scholar', url: 'https://scholar.google.com', descricao: 'Pesquisa de artigos científicos' },
  { titulo: 'RCAAP', url: 'https://www.rcaap.pt', descricao: 'Repositório Científico de Acesso Aberto de Portugal' },
  { titulo: 'Academia.edu', url: 'https://www.academia.edu', descricao: 'Rede social académica' },
]

const linksInstitucionais = [
  { titulo: 'Ministério do Ensino Superior', url: '#', descricao: 'Portal do MES' },
  { titulo: 'Reitoria da Universidade', url: '#', descricao: 'Site da Reitoria' },
  { titulo: 'Ordem dos Psicólogos', url: '#', descricao: 'Ordem profissional de Psicologia' },
  { titulo: 'Ordem dos Assistentes Sociais', url: '#', descricao: 'Ordem profissional de Serviço Social' },
]

const linksUteis = [
  { titulo: 'Normas APA', url: '#', descricao: 'Guia de citação APA' },
  { titulo: 'Mendeley', url: 'https://www.mendeley.com', descricao: 'Gestor de referências bibliográficas' },
  { titulo: 'Zotero', url: 'https://www.zotero.org', descricao: 'Ferramenta de gestão de pesquisa' },
  { titulo: 'DeepL', url: 'https://www.deepl.com', descricao: 'Tradutor online' },
]

export default function LinksUteisPage() {
  return (
    <>
      <PageHeader
        title="Links Úteis"
        description="Recursos online úteis para estudantes e comunidade académica."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Serviços Internos FCH" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {linksInternos.map((link, index) => (
              <Card key={index}>
                <CardContent className="py-4">
                  <a href={link.url} className="flex items-center justify-between group">
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-primary">{link.titulo}</h3>
                      <p className="text-sm text-gray-500">{link.descricao}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <SectionTitle title="Recursos Académicos" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {linksAcademicos.map((link, index) => (
              <Card key={index}>
                <CardContent className="py-4">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-primary">{link.titulo}</h3>
                      <p className="text-sm text-gray-500">{link.descricao}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <SectionTitle title="Instituições e Órgãos" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {linksInstitucionais.map((link, index) => (
              <Card key={index}>
                <CardContent className="py-4">
                  <a href={link.url} className="flex items-center justify-between group">
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-primary">{link.titulo}</h3>
                      <p className="text-sm text-gray-500">{link.descricao}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <SectionTitle title="Ferramentas de Apoio" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {linksUteis.map((link, index) => (
              <Card key={index}>
                <CardContent className="py-4">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-primary">{link.titulo}</h3>
                      <p className="text-sm text-gray-500">{link.descricao}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
