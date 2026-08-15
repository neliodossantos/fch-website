import { MapPin, Globe } from 'lucide-react'
import { FacebookIcon, InstagramIcon } from '@/components/icons/SocialIcons'

export function TopBar() {
  return (
    <div className="bg-primary dark:bg-[#151312] text-white dark:text-[#F5F0EA] py-2 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          {/* Lado Esquerdo - Informações */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Campus Universitário da Universidade Católica</span>
            </div>
          </div>
          
          {/* Lado Direito - Redes Sociais */}
          <div className="flex items-center space-x-3">
            <a 
              href="https://www.facebook.com/ucan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-200 dark:hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/ucan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-200 dark:hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
