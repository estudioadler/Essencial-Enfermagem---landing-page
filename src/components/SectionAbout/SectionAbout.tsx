

export const SectionAbout = () => {
	return (
		<section className="flex flex-col md:flex-row gap-8 md:gap-0 px-6 md:px-16 pt-20">
			<div className="flex-1 flex flex-col gap-4">
				<span className="title-section">quem somos</span>
				<h2 className="text-4xl max-w-sm">A maior empresa de cuidadores de Minas</h2>
			</div>
			<div className="flex-1">
				<p>
					A Essencial Enfermagem é uma empresa especializada no cuidado
					ao idoso. Desde 2012 no mercado, desenvolvemos
					um serviço de excelência para pessoas que exigem qualidade e
					confiança. Seguro e prático para quem contrata, oferecendo as melhores
					oportunidades para os cuidadores, somos uma rede de confiança entre os
					profissionais e as famílias. 
				</p>
			</div>
		</section>
	);
};
