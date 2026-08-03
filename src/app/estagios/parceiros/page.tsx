import { Metadata } from 'next'
import { Building2 } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Parceiros de Estágio',
  description: 'Instituições e empresas parceiras para estágios da FCH.',
}

const parceirosInstitucionais = [
  'Ministério da Saúde',
  'Ministério da Família e Promoção da Mulher',
  'Companhia Aérea TAAG',
  'Empresa Huawei',
  'Banco Atlântico',
  'Sonangalp',
  'Nações Unidas - Gabinete da Coordenadora Residente em Angola',
  'Associação para a Promoção da Caridade',
  'Instituto de Desenvolvimento Local - FAS',
  'Banco BAI Micro Finanças - BMF',
  'Universidade de Coimbra - Faculdade de Medicina',
  'Ernst & Young Angola, Lda',
  'Programa das Nações Unidas para o Desenvolvimento - PNUD',
  'Universidade de Évora',
  'Universidade Católica Portuguesa',
]

const camposPsicologiaClinica = [
  'Hospital Divina Providência',
  'Hospital Cardeal Dom Alexandre Nascimento',
  'Hospital Josina Machel',
  'Hospital Geral dos Cajueiros',
]

const camposPsicologiaTrabalho = [
  'Companhia Aérea TAAG',
  'Empresa NOX',
  'Empresa Tribe Move',
  'Empresa Jobartis',
  'Instituto Dom Bosco - Área de RH',
  'Sociedade Mineira Catoca',
]

export default function ParceirosPage() {
  return (
    <>
      <PageHeader
        title="Parceiros de Estágio"
        description="Instituições e empresas que acolhem os nossos estagiários."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Parceiros Institucionais"
            subtitle="A FCH mantém uma ampla rede de instituições parceiras para a realização de estágios curriculares e profissionais"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {parceirosInstitucionais.map((parceiro, index) => (
              <Card key={index}>
                <CardContent className="py-4 flex items-center space-x-3">
                  <Building2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-700">{parceiro}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <SectionTitle title="Campos de Estágio - Psicologia, Opção Clínica" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {camposPsicologiaClinica.map((campo, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    <CardTitle className="text-base">{campo}</CardTitle>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <SectionTitle title="Campos de Estágio - Psicologia, Opção do Trabalho e das Organizações" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {camposPsicologiaTrabalho.map((campo, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    <CardTitle className="text-base">{campo}</CardTitle>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
