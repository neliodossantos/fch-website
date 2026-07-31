import { Metadata } from 'next'
import { Phone, Clock, MapPin, FileText } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Marcação de Consulta',
  description: 'Como marcar uma consulta no Laboratório de Psicologia da FCH.',
}

export default function MarcacaoPage() {
  return (
    <>
      <PageHeader
        title="Marcação de Consulta"
        description="Informações para agendar uma consulta ou avaliação psicológica."
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
                    <CardTitle>Como Marcar</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    As marcações podem ser feitas das seguintes formas:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">1.</span>
                      <span>
                        <strong>Presencialmente</strong> - Na receção do Laboratório de Psicologia, 
                        Edifício B, Piso 1
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">2.</span>
                      <span>
                        <strong>Por telefone</strong> - +244 222 123 459, das 09:00 às 16:00
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">3.</span>
                      <span>
                        <strong>Por email</strong> - laboratorio.psicologia@FCH.edu
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="mb-6">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                    </div>
                    <CardTitle>Horário de Funcionamento</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Segunda a Quinta</span>
                      <span>09:00 - 12:00 | 14:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sexta-feira</span>
                      <span>09:00 - 12:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <CardTitle>Localização</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Edifício B, Piso 1<br />
                    Campus Universitário FCH<br />
                    Av. Principal, 1234
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-green-600" />
                    </div>
                    <CardTitle>Informações Importantes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-600">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Primeira Consulta</h4>
                      <p className="text-sm">
                        Na primeira consulta será feita uma triagem para encaminhamento 
                        ao serviço mais adequado.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Documentos</h4>
                      <p className="text-sm">
                        Traga o Bilhete de Identidade e, se menor de idade, o documento 
                        do responsável legal.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Cancelamentos</h4>
                      <p className="text-sm">
                        Em caso de impedimento, avise com pelo menos 24 horas de 
                        antecedência para remarcar.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Pagamento</h4>
                      <p className="text-sm">
                        O pagamento é feito na tesouraria antes de cada sessão.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Emergências:</strong> Em caso de urgência psicológica, 
                      procure o serviço de emergência do hospital mais próximo.
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <Button className="w-full">
                      Ligar para Marcar
                    </Button>
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
