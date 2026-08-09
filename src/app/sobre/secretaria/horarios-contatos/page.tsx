import { Metadata } from 'next'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Horários e Contactos da Secretaria',
  description: 'Horário de funcionamento e formas de contacto da Secretaria Académica da FCH.',
}

const horarios = [
  { dia: 'Segunda-feira', horario: '08:00 - 16:30 (pausa 13:00-14:00)' },
  { dia: 'Terça-feira', horario: '08:00 - 16:30 (pausa 13:00-14:00)' },
  { dia: 'Quarta-feira', horario: '08:00 - 16:30 (pausa 13:00-14:00)' },
  { dia: 'Quinta-feira', horario: '08:00 - 16:30 (pausa 13:00-14:00)' },
  { dia: 'Sexta-feira', horario: '08:00 - 16:30 (pausa 13:00-14:00)' },
  { dia: 'Sábado', horario: 'Fechado' },
  { dia: 'Domingo', horario: 'Fechado' },
]

export default function HorariosContactosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Secretaria Académica"
        title="Horários e Contactos"
        description="Saiba quando e como contactar a Secretaria Académica."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>Horário de Funcionamento</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {horarios.map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between py-2 ${
                        index < horarios.length - 1 ? 'border-b border-gray-100' : ''
                      }`}
                    >
                      <span className="font-medium text-gray-700 dark:text-gray-200">{item.dia}</span>
                      <span className={item.horario === 'Fechado' ? 'text-gray-400 dark:text-gray-500' : 'text-gray-600 dark:text-gray-200'}>
                        {item.horario}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
                  * Horários especiais durante feriados e períodos de férias académicas.
                </p>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 dark:bg-gray-700 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                    </div>
                    <CardTitle>Telefones</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-200">
                    <li><strong>Secretaria de Pós-Graduações:</strong> +244 927 609 890</li>
                    <li><strong>Laboratório de Psicologia:</strong> +244 923 820 314</li>
                    <li><strong>Coordenação de Estágios:</strong> +244 928 001 050</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 dark:bg-gray-700 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                    </div>
                    <CardTitle>Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-200">
                    <li>
                      <strong>Geral:</strong>{' '}
                      <a href="mailto:fch@ucan.edu" className="text-primary hover:text-primary-dark dark:hover:text-blue-300">
                        fch@ucan.edu
                      </a>
                    </li>
                    <li>
                      <strong>Pós-Graduações:</strong>{' '}
                      <a href="mailto:yola.filipe@ucan.edu" className="text-primary hover:text-primary-dark dark:hover:text-blue-300">
                        yola.filipe@ucan.edu
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle>Localização</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-200">
                    Av. Pedro de Castro Van-Dúnem, 24<br />
                    Palanca, Kilamba Kiaxi<br />
                    C.P. 2064, Luanda - Angola
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
