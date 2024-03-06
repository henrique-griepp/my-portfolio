

import IconEmail from '@/assets/img/envelope'
import IconGithub from '@/assets/img/github'
import IconInstagram from '@/assets/img/instagram'
import IconLinkedin from '@/assets/img/linkedin'


export function LinkHub (){

    return(<>
    <main className="container p-6 max-w-4xl flex flex-col items-center">
        <img className="m-6 w-40 rounded-full shadow-lg transform transition-transform scale-100 hover:scale-110" src="https://avatars.githubusercontent.com/u/104803272?v=4" alt="photo perfil" />
        <p className="m-6 max-w-lg text-center">Oi, eu sou o Henrique! Desenvolvedor Web apaixonado por transformar ideias em soluções inovadoras.</p>
        <div className=" m-2 flex flex-auto justify-around h-14 w-80">
           <a className="size-11 m-auto transform transition-transform scale-100 hover:scale-125" href="mailto:contato@grceh.com" target='_blank'><IconEmail /></a>
           <a className="size-10 m-auto transform transition-transform scale-100 hover:scale-125" href='https://github.com/henrique-griepp' target='_blank'><IconGithub/></a>
           <a className="size-10 m-auto transform transition-transform scale-100 hover:scale-125" href='https://www.instagram.com/henriquegc.code/' target='_blank'><IconInstagram/></a>
           <a className="size-10 m-auto transform transition-transform scale-100 hover:scale-125" href='https://www.linkedin.com/in/henriquegriepp/' target='_blank'><IconLinkedin/></a>
        </div>
    </main>
    </>
    )
}