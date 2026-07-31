'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input, Textarea } from '@/components/ui/Input'

const contactSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  assunto: z.string().min(5, 'Assunto deve ter pelo menos 5 caracteres'),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

type ContactForm = z.infer<typeof contactSchema>

export default function ContatoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (_data: ContactForm) => {
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert('Mensagem enviada com sucesso! Entraremos em contacto em breve.')
    reset()
  }

  return (
    <>
      <PageHeader
        title="Contacto"
        description="Entre em contacto com a Faculdade de CiênciasHumanas."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle>Endereço</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Av. Pedro de Castro<br />
                      Van-Dúnem nº24<br />
                      Caixa Postal 2064<br />
                      Palanca, Luanda
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                      </div>
                      <CardTitle>Telefones</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li><strong>Geral:</strong> +244 222 123 456</li>
                      <li><strong>Secretaria:</strong> +244 222 123 457</li>

                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <CardTitle>Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li><strong>Geral:</strong> <a href="mailto:info@FCH.edu" className="text-primary hover:text-primary-dark dark:hover:text-blue-300">fch@ucan.edu</a></li>
                      <li><strong>Secretaria:</strong> <a href="mailto:secretaria@FCH.edu" className="text-primary hover:text-primary-dark dark:hover:text-blue-300">secretaria@FCH.edu</a></li>
                      
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-green-600" />
                      </div>
                      <CardTitle>Horário de Funcionamento</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li><strong>Segunda a Quinta:</strong> 08:00 - 17:00</li>
                      <li><strong>Sexta-feira:</strong> 08:00 - 12:00</li>
                      <li><strong>Sábado e Domingo:</strong> Fechado</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Envie-nos uma mensagem</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <Input
                      label="Nome completo"
                      placeholder="Seu nome"
                      error={errors.nome?.message}
                      {...register('nome')}
                    />
                    <Input
                      type="email"
                      label="Email"
                      placeholder="seu@email.com"
                      error={errors.email?.message}
                      {...register('email')}
                    />
                    <Input
                      label="Assunto"
                      placeholder="Assunto da mensagem"
                      error={errors.assunto?.message}
                      {...register('assunto')}
                    />
                    <Textarea
                      label="Mensagem"
                      placeholder="Escreva sua mensagem..."
                      rows={5}
                      error={errors.mensagem?.message}
                      {...register('mensagem')}
                    />
                    <Button type="submit" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? (
                        'Enviando...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
