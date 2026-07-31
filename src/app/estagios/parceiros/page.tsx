import { Metadata } from 'next'
import { Building2, Globe } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Parceiros de Estágio',
  description: 'Instituições e empresas parceiras para estágios da FCH.',
}

const parceiros = {
  saude: [
    { nome: 'Hospital Central', tipo: 'Hospital Público', areas: ['Psicologia', 'Serviço Social'] },
    { nome: 'Clínica de Saúde Mental', tipo: 'Clínica Privada', areas: ['Psicologia'] },
    { nome: 'Centro de Saúde Comunitário', tipo: 'Público', areas: ['Serviço Social'] },
  ],
  social: [
    { nome: 'Cruz Vermelha', tipo: 'ONG', areas: ['Serviço Social'] },
    { nome: 'Cáritas', tipo: 'Instituição Social', areas: ['Serviço Social'] },
    { nome: 'Centro de Apoio à Criança', tipo: 'Público', areas: ['Serviço Social', 'Psicologia'] },
  ],
  comunicacao: [
    { nome: 'Jornal Nacional', tipo: 'Imprensa', areas: ['Comunicação Social'] },
    { nome: 'Rádio Nacional', tipo: 'Rádio', areas: ['Comunicação Social'] },
    { nome: 'Agência de Publicidade XYZ', tipo: 'Privada', areas: ['Comunicação Social'] },
  ],
  pesquisa: [
    { nome: 'Instituto de Estatística', tipo: 'Público', areas: ['Sociologia'] },
    { nome: 'Centro de Estudos Sociais', tipo: 'Investigação', areas: ['Sociologia', 'Serviço Social'] },
    { nome: 'Observatório Social', tipo: 'ONG', areas: ['Sociologia'] },
  ],
}

export default function ParceirosPage() {
  return (
    <>
      <PageHeader
        title="Parceiros de Estágio"
        description="Instituições e empresas que acolhem os nossos estagiários."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Área da Saúde" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {parceiros.saude.map((parceiro, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    <CardTitle className="text-base">{parceiro.nome}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">{parceiro.tipo}</p>
                  <div className="flex flex-wrap gap-1">
                    {parceiro.areas.map((area, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {area}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <SectionTitle title="Área Social" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {parceiros.social.map((parceiro, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    <CardTitle className="text-base">{parceiro.nome}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">{parceiro.tipo}</p>
                  <div className="flex flex-wrap gap-1">
                    {parceiro.areas.map((area, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {area}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <SectionTitle title="Comunicação e Media" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {parceiros.comunicacao.map((parceiro, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <CardTitle className="text-base">{parceiro.nome}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">{parceiro.tipo}</p>
                  <div className="flex flex-wrap gap-1">
                    {parceiro.areas.map((area, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {area}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <SectionTitle title="Investigação e Estatística" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {parceiros.pesquisa.map((parceiro, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    <CardTitle className="text-base">{parceiro.nome}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">{parceiro.tipo}</p>
                  <div className="flex flex-wrap gap-1">
                    {parceiro.areas.map((area, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {area}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
