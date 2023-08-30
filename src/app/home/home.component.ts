import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  skeletonCount = Array(5).fill(0);

  arrayInfo = [
    {name: 'Diego Martin Silva', description: 'Experto en seguridad cibernética con una profunda comprensión de las amenazas digitales actuales. Especializado en la implementación y optimización de servicios SOCaaS para proteger la infraestructura empresarial de manera proactiva.', image: ''},
    {name: 'Mauricio Maqueo Huerta', description: 'Con una vasta experiencia en ciberseguridad, Mauricio lidera nuestro equipo en la identificación y neutralización de amenazas cibernéticas. Su enfoque meticuloso garantiza que las vulnerabilidades sean abordadas antes de que se conviertan en problemas reales.', image: ''},
    {name: 'Eduardo Ramón Cepeda', description: 'Eduardo es un profesional apasionado por la seguridad de datos y la protección de redes. Su enfoque en el monitoreo constante y la respuesta rápida a incidentes garantiza que nuestros clientes estén siempre un paso adelante en la lucha contra el cibercrimen.', image: ''},
    {name: 'Rodrigo Aldahir Rosete Flores', description: 'Experto en análisis forense digital y mitigación de riesgos cibernéticos. Rodrigo aporta su profundo conocimiento en SOCaaS para descubrir y abordar las vulnerabilidades, manteniendo la integridad de la infraestructura digital de nuestros clientes.', image: ''},
    {name: 'Emilio Yoltic Martinez Gutierrez', description: 'Emilio es un líder en la implementación y gestión de soluciones de seguridad cibernética de última generación. Su experiencia en SOCaaS asegura que nuestros clientes cuenten con la defensa más sólida contra las crecientes amenazas digitales.', image: ''}
  ]
  
}
