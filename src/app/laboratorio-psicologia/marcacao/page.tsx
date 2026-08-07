import { Metadata } from 'next'
import { Phone, Clock, MapPin, FileText } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Marcação de Atendimento',
  description: 'Como marcar um atendimento no Laboratório de Psicologia da FCH.',
}

export default function MarcacaoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Laboratório de Psicologia"
        title="Marcação de Atendimento"
        description="Contactos e horários para agendar um atendimento psicológico."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Card className="mb-6">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle>Contactos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li>
                      <strong>Telefone:</strong> +244 923 820 314
                    </li>
                    <li>
                      <strong>Abuso Sexual:</strong> 923 820 314 / 937 094 918
                    </li>
                    <li>
                      <strong>Email:</strong> laboratorio.psicologia@ucan.edu ou
                      manasses.apolinario@ucan.edu
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 dark:bg-gray-700 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                    </div>
                    <CardTitle>Horário de Funcionamento</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <div className="flex justify-between">
                      <span>Horário geral</span>
                      <span>Seg-Sex, 08h00-16h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Abuso sexual</span>
                      <span>3ª-6ª 09h30-12h00 | 2ª-6ª 15h30-17h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Plantão Psicológico</span>
                      <span>Seg-Sex, 13h00-15h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Grupo de Apoio (Luto)</span>
                      <span>Sábados, 09h00-11h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Atendimento online</span>
                      <span>Manhã, tarde e noite</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 dark:bg-gray-700 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                    </div>
                    <CardTitle>Localização</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Av. Pedro de Castro Van-Dúnem, 24<br />
                    Palanca, Kilamba Kiaxi<br />
                    C.P. 2064, Luanda - Angola
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle>Informações Importantes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Atendimento 100% Gratuito</h4>
                      <p className="text-sm">
                        Todos os serviços do Laboratório são prestados de forma gratuita por
                        psicólogos voluntários e estudantes supervisionados.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Atendimento Online</h4>
                      <p className="text-sm">
                        Contacte um dos profissionais nos horários indicados via chamada de áudio
                        pelo WhatsApp. A escala é actualizada mensalmente.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Atendimento Presencial</h4>
                      <p className="text-sm">
                        O Plantão Psicológico e o atendimento a vítimas de abuso sexual decorrem
                        presencialmente no Laboratório de Psicologia da UCAN.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Torne-se Voluntário</h4>
                      <p className="text-sm">
                        O Laboratório conta com uma rede de psicólogos voluntários nacionais e
                        internacionais. Contacte-nos pelo email indicando nome, especialidade e
                        contacto.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-primary/5 dark:bg-primary/10 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-200">
                      <strong>Emergências:</strong> Em caso de urgência psicológica ou de risco
                      iminente, procure o serviço de emergência do hospital mais próximo.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
