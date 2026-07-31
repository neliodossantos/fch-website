import { Metadata } from 'next'
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Contactos da Associação de Estudantes',
  description: 'Entre em contacto com a Associação de Estudantes da FCH.',
}

export default function ContactosAEPage() {
  return (
    <>
      <PageHeader
        title="Contactos"
        description="Entre em contacto com a Associação de Estudantes da FCH."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle>Localização</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-200">
                    Gabinete da Associação de Estudantes<br />
                    Edifício Principal, Piso 1, Sala 101<br />
                    Campus Universitário FCH
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                    </div>
                    <CardTitle>Horário de Atendimento</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-200">
                    Segunda a Sexta: 10:00 - 12:00 | 14:00 - 16:00<br />
                    <span className="text-sm text-gray-500 dark:text-gray-500">Fechado aos fins de semana e feriados</span>
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <CardTitle>Telefone e Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-200">
                    <li className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                      +244 222 123 460
                    </li>
                    <li className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                      <a href="mailto:ae@FCH.edu" className="text-primary hover:text-primary-dark dark:hover:text-blue-300">
                        ae@FCH.edu
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Redes Sociais</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-200 mb-6 text-justify">
                    Siga-nos nas redes sociais para ficar a par das nossas actividades e novidades!
                  </p>
                  <div className="space-y-4">
                    <a
                      href="#"
                      className="flex items-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                    >
                      <Facebook className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">Facebook</p>
                        <p className="text-sm text-gray-500 dark:text-gray-300">@aeFCH</p>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-center p-4 rounded-lg bg-pink-50 dark:bg-pink-900/20 hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors"
                    >
                      <Instagram className="w-6 h-6 text-pink-600 dark:text-pink-400 mr-4" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">Instagram</p>
                        <p className="text-sm text-gray-500 dark:text-gray-300">@ae_FCH</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Fale Connosco</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-200 mb-4 text-justify">
                    Tem sugestões, reclamações ou ideias? A AE-FCH está aqui para ouvir os estudantes!
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-200 space-y-2">
                    <li>• Atendimento presencial no gabinete</li>
                    <li>• Envio de mensagem por email</li>
                    <li>• Mensagem privada nas redes sociais</li>
                    <li>• Caixa de sugestões no átrio do edifício</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
