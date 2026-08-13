import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Users, Building2, FileCheck } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Estágios',
  description: 'Coordenação de Estágios da FCH - supervisores, parceiros e candidaturas.',
}

const sections = [
  {
    icon: Users,
    title: 'Supervisores',
    description: 'Conheça os docentes responsáveis pela supervisão académica dos estágios.',
    href: '/estagios/supervisores',
  },
  {
    icon: Building2,
    title: 'Parceiros',
    description: 'Instituições e empresas parceiras que acolhem os nossos estagiários.',
    href: '/estagios/parceiros',
  },
  {
    icon: FileCheck,
    title: 'Candidatura',
    description: 'Informações e processo de candidatura a estágio.',
    href: '/estagios/candidatura',
  },
]

export default function EstagiosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mercado de trabalho"
        title="Estágios"
        description="A Coordenação de Estágios facilita a inserção dos estudantes no mercado de trabalho."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 dark:text-[#E4D9CC]">
              A Coordenação de Estágios, dirigida pela Licenciada Arieth Francisco Andrade, assegura a
              articulação entre a Faculdade e as instituições parceiras que acolhem os estudantes
              durante os estágios curriculares. O estágio na FCH é académico, supervisionado por
              professores da UCAN e orientado por profissionais das instituições parceiras, garantindo
              que a experiência prática dos estudantes esteja alinhada com os objectivos pedagógicos dos
              cursos.
            </p>
            <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-6">
              <h3 className="font-semibold text-primary mb-2">Estágio Curricular</h3>
              <p className="text-gray-600 dark:text-[#d8cfc4]">
                Presencial e obrigatório para o curso de Psicologia (opções Clínica e do Trabalho e das
                Organizações), realiza-se no 5º ano e tem a duração de 3 meses, equivalente a 288 horas.
                No final, o estudante apresenta um relatório de estágio. A Faculdade tem também
                apostado na implementação de estágio profissional, sobretudo para o curso de Línguas e
                Administração.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link key={section.href} href={section.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4 dark:text-[#d8cfc4]">{section.description}</p>
                    <span className="text-primary dark:text-blue-400 text-sm font-medium inline-flex items-center group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                      Saber mais <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-gray-50 rounded-lg p-6 dark:bg-[#1f1a16]">
            <h3 className="font-semibold text-primary mb-2">Psico-UCAN Consultoria Júnior</h3>
            <p className="text-gray-600 text-sm dark:text-[#d8cfc4]">
              Criado em 2021, é um projecto destinado à formação prática dos estudantes de Psicologia
              do Trabalho e das Organizações, proporcionando experiências reais de consultoria e
              intervenção organizacional. A forte componente prática dos cursos contribui para
              elevados níveis de empregabilidade dos graduados da Faculdade.
            </p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <h3 className="font-semibold text-primary mb-2">Galeria de Coordenadores</h3>
            <ul className="space-y-2 text-gray-700 dark:text-[#E4D9CC]">
              <li>Dr. Almeida de Sousa (2021–2023)</li>
              <li>Dra. Bráulia Jacinto (2023–2024)</li>
              <li>Arieth Andrade (Coordenadora actual)</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
