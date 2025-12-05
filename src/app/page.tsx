"use client";

import Header from './components/Header';
import { useState } from 'react';
import Image from 'next/image'; 


type Props = {
  name?: string;  
  description?: string;
  date?: string;
};

export default function Home() {

 const [course, setCourse] = useState(''); 

  return (
    <div className="min-h-screen bg-zinc-500 ">
      <div>
        <Header />
      </div>

      <main className="flex w-full max-w-3xl items-center py-32 px-16  sm:items-start">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">

          <h1 className="text-5xl font-bold text-white sm:text-6xl">      
            Bem-Vindo ao nosso Site Educacional!  
          </h1>   
          <p>
            Descubra uma plataforma dedicada a fornecer recursos educacionais de alta qualidade
            para estudantes e educadores. Nossa missão é facilitar o aprendizado através de 
            conteúdos interativos, cursos abrangentes e uma comunidade colaborativa. 
            Junte-se a nós e transforme sua jornada educacional!
          </p>
          
          <div className="mt-4 w-full max-w-sm">
            <input 
              type="text" 
              placeholder="Pesquisar Cursos..." 
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
            />


          </div> 

          <div>
            <button className="mt-4 rounded bg-indigo-600 px-6 py-2 font-semibold text-white hover:bg-indigo-700">
              Pesquisar
            </button> 

            
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">      
              Cursos Populares  
            </h2>   
            <Image src="/cursos-populares.jpg" alt="Cursos Populares" width={600} height={400} className="mt-4 rounded-lg shadow-md"
            >

              </Image>             

          </div>


          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">      
              Últimas Notícias Educacionais  
            </h2>   
            <p className="mt-4 text-left">
              Fique atualizado com as últimas tendências e inovações no campo da educação. 
              Nossa seção de notícias oferece insights valiosos para estudantes e educadores. 
            </p>
          </div>


          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">    
              Depoimentos de Estudantes  
            </h2>   
            <p>
              Esta plataforma transformou minha maneira de aprender! 
              Os cursos são bem estruturados e os recursos são incríveis.
              </p>  
          </div>


          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">  
              Recursos para Educadores  
            </h2>   
            <p>
              Acesse uma variedade de recursos, incluindo planos de aula, materiais didáticos e ferramentas
              para aprimorar sua prática educacional.
              </p>   
          </div>


          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">  
              Eventos e Webinars  
            </h2>   
            <p className="mt-4 text-left">
              Fique atento aos nossos próximos eventos e webinars sobre as últimas tendências em educação e tecnologia. 
              </p> 
          </div>


          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">  
              Perguntas Frequentes  
            </h2>   
            <p className="mt-4 text-left">
              Encontre respostas para as perguntas mais comuns sobre nossa plataforma, cursos e recursos educacionais. 
            </p>  

          </div>
          <div>
            <p className=' '>
              Explore nosso site para descobrir mais sobre como podemos apoiar sua jornada educacional! 
            </p>

            <p className=' '>
              Junte-se a milhares de estudantes e educadores que já estão aproveitando os benefícios de nossa plataforma. 
            </p>


          </div>


          <div>
            <button className="mt-4 rounded bg-indigo-600 px-6 py-2 font-semibold text-white hover:bg-indigo-700">
              Inscreva-se Agora
            </button> 
          </div>



          <div>
            <p className="text-sm text-gray-300">
              © 2024 Plataforma Educacional. Todos os direitos reservados.
            </p>  
              
          </div>

        </div>
        
      </main>
    </div>
  );
}
