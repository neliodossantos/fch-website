import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'

export const metadata: Metadata = {
  title: 'História',
  description: 'Conheça a história da Faculdade de Ciências Humanas da Universidade Católica de Angola.',
}

export default function HistoriaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre a FCH"
        title="Nossa História"
        description="Uma trajetória iniciada em 2003, dedicada à formação de profissionais de excelência em Ciências Humanas."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Fundação" />
            <p className="text-gray-700 mb-6 leading-relaxed dark:text-[#E4D9CC]">
              A Faculdade de Ciências Humanas (FCH) da Universidade Católica de Angola foi criada em
              10 de Março de 2003, constituindo uma das unidades orgânicas pioneiras da UCAN. A sua
              fundação representou um marco importante na consolidação do ensino superior privado em
              Angola e na expansão da formação universitária nas áreas das Ciências Humanas e Sociais.
            </p>
            <p className="text-gray-700 mb-12 leading-relaxed dark:text-[#E4D9CC]">
              A instalação e direcção inicial da Faculdade estiveram a cargo do Professor Doutor
              António Fernandes da Costa (em feliz memória), reconhecido académico e investigador
              angolano no domínio da Linguística, que assumiu a missão de estruturar esta unidade
              orgânica e lançar as bases do seu desenvolvimento institucional. Foi o Decano fundador
              da Faculdade e o primeiro Professor Catedrático da Faculdade e da Universidade.
            </p>

            <SectionTitle title="Primeiros Cursos" />
            <p className="text-gray-700 mb-6 leading-relaxed dark:text-[#E4D9CC]">
              A actividade académica da Faculdade iniciou-se com o curso de Línguas, Literatura e
              Administração — actualmente designado Línguas e Administração —, cuja primeira turma
              foi diplomada em 2007, demonstrando a capacidade da Faculdade em formar os seus
              primeiros quadros superiores.
            </p>
            <p className="text-gray-700 mb-12 leading-relaxed dark:text-[#E4D9CC]">
              Em resposta às necessidades crescentes do país nos domínios da saúde mental,
              desenvolvimento humano e gestão das organizações, a Faculdade procedeu, também em 2007,
              à criação do curso de Psicologia, nas opções Clínica e do Trabalho e das Organizações.
              A primeira turma ingressou na segunda metade da década de 2000, integrando estudantes de
              diferentes províncias do país, e contribuiu para a afirmação da Psicologia como área
              científica e profissional na UCAN. Desde então, centenas de profissionais formados pela
              Faculdade exercem funções nos sectores da saúde, educação, recursos humanos,
              administração pública, intervenção comunitária e investigação científica.
            </p>

            <SectionTitle title="Consolidação Institucional" />
            <p className="text-gray-700 mb-6 leading-relaxed dark:text-[#E4D9CC]">
              Ao longo da sua história, a FCH desenvolveu uma cultura académica assente na excelência
              do ensino, na promoção da investigação científica, na prestação de serviços à comunidade
              e na formação integral da pessoa humana. Este compromisso levou à criação de estruturas
              especializadas como o Centro Interdisciplinar de Ensino e Investigação (CIEI), criado em
              Outubro de 2020 em parceria com o Instituto Superior de Ciências da Saúde, e o
              Laboratório de Psicologia, que oferece projectos de extensão universitária como o
              Plantão Psicológico e diversos programas de voluntariado comunitário.
            </p>
            <p className="text-gray-700 mb-12 leading-relaxed dark:text-[#E4D9CC]">
              A Faculdade tem também investido na formação pós-graduada e na capacitação profissional,
              com programas como a Especialização em Gestão do Ensino Superior, a Pós-Graduação
              Profissional em Capacitação Pedagógica, a Pós-Graduação de Capacitação Profissional em
              Gestão de Pessoas 360º e a Pós-Graduação Profissional em Consulta Psicológica.
            </p>

            <SectionTitle title="A FCH Hoje" />
            <p className="text-gray-700 mb-6 leading-relaxed dark:text-[#E4D9CC]">
              Actualmente, a Faculdade de Ciências Humanas acolhe cerca de 365 estudantes distribuídos
              pelos seus cursos de graduação — 165 no curso de Psicologia e 200 no curso de Línguas e
              Administração. O seu corpo docente é constituído por 31 docentes, entre professores
              doutores, mestres e especialistas com reconhecida experiência académica e profissional.
            </p>
            <p className="text-gray-700 leading-relaxed dark:text-[#E4D9CC]">
              A direcção é actualmente assegurada por Nlando Matondo Faustino, na qualidade de
              Decano, auxiliado pela Drª Evanilse Diogo, Vice-Decana para a Graduação, e pelo Dr.
              Manuel Dala, Vice-Decano para as Pós-Graduações, Investigação e Extensão. Com parcerias
              nacionais e internacionais — nomeadamente com a Universidade Federal Fluminense (Brasil)
              —, a Faculdade continua a evoluir, mantendo o seu compromisso com a excelência académica,
              a investigação relevante e a responsabilidade social.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
