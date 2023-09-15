import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit{
  selected: any;
  cantidadesUsuarios = [1, 5, 10, 20, 50, 100];
  precioPorUsuarioExtra: number = 22;
  totalPrecioUsuariosExtras: number = 0;

  secondFormGroup = this._formBuilder.group({
    cantidadUsuariosExtras: ['']
  });
  isLinear = false;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  ngOnInit(): void {
    this.secondFormGroup.get('cantidadUsuariosExtras')!.valueChanges.subscribe((value:any) => {
      this.totalPrecioUsuariosExtras = value * this.precioPorUsuarioExtra;
    });
  }


  constructor(private _formBuilder: FormBuilder) {}


  public isBoxVisible1 = false;

  toggleBox1(): void {
    this.isBoxVisible1 = !this.isBoxVisible1;
  }

  public isBoxVisible2 = false;

  toggleBox2(): void {
    this.isBoxVisible2 = !this.isBoxVisible2;
  }

  public isBoxVisible3 = false;

  toggleBox3(): void {
    this.isBoxVisible3 = !this.isBoxVisible3;
  }
  
  public precioPerUser: any;
  public desc: any;
  public users: any;
  public price: any;
  selectItems() {
    if (this.firstFormGroup.get('firstCtrl')!.value === 'Basico') {
        this.price = '2000';
        this.desc = `
        Autorización para un máximo de 100 usuarios: Permitiendo la protección de un grupo esencial de usuarios en su organización.
        Monitoreo en Tiempo Real de Eventos de Seguridad: Vigilancia constante para identificar actividades anómalas.
        Detección y Alertas ante Amenazas Básicas: Notificaciones inmediatas sobre amenazas comunes.
        Reportes Mensuales de Actividades y Alertas: Resúmenes detallados para mantener a nuestros clientes informados.
        Acceso a Soporte Técnico durante Horas Hábiles: Asistencia técnica cuando más se necesita.
        Análisis de Vulnerabilidades Periódicas: Identificación y evaluación de posibles vulnerabilidades.
        Detección de Malware y Ransomware Avanzado: Protección contra amenazas de software malicioso.
        Análisis de Comportamiento de Usuarios: Identificación de patrones de comportamiento inusual.
        Alertas de Seguridad Priorizadas: Enfoque en las alertas más críticas.
        Soporte Técnico en Días Hábiles: Asistencia durante los días laborables para mantener la continuidad del servicio.
      `;
      this.users = '-100';
      this.precioPerUser = '22';
    } else if (this.firstFormGroup.get('firstCtrl')!.value === 'Intermedio') {
      this.users = '300-400';
      this.price = '9000';
      this.precioPerUser = '21';
      this.desc = `
        Autorización para un rango de entre 300 y 400 usuarios: Ideal para organizaciones medianas que requieren protección en un entorno más amplio.Monitoreo y Análisis Avanzado de Tráfico de Red: Supervisión exhaustiva de todas las actividades de red. Detección y Respuesta ante Amenazas Persistentes: Identificación y mitigación de amenazas de mayor complejidad.Gestión y Correlación Avanzada de Logs: Análisis de registros detallados para detectar patrones y eventos significativos.Evaluación Mensual de Vulnerabilidades y Reportes Detallados: Evaluación continua de la seguridad con informes exhaustivos.Alertas de Seguridad con Respuesta Remota: Respuesta inmediata a alertas críticas. Análisis de Amenazas en Tiempo Real: Identificación de amenazas en tiempo real para una respuesta más rápida. Análisis de Comportamiento de Aplicaciones: Evaluación del comportamiento de las aplicaciones para detectar anomalías.Evaluación Trimestral de Vulnerabilidades con Recomendaciones Específicas: Identificación de vulnerabilidades con soluciones personalizadas.Alertas de Seguridad con Análisis de Impacto: Alertas que incluyen una evaluación del impacto potencial.Soporte Técnico 24/7: Asistencia técnica disponible las 24 horas del día, los 7 días de la semana, para abordar cualquier situación de emergencia.`;
    } else {
      this.price = '17000';
      this.precioPerUser = '20';
      this.users = '600-1000'
      this.desc = `Nuestro paquete de servicio Premium está diseñado para brindar a las organizaciones una protección de seguridad cibernética de nivel superior y ofrece una serie de características avanzadas, que incluyen:
  Autorización para un rango de entre 600 y 1000 usuarios: Proporciona una cobertura extensa para grandes organizaciones.
  Monitoreo Exhaustivo de la Red y Sistemas Críticos: Supervisión en profundidad de todos los aspectos críticos de la red y los sistemas.
  Detección y Respuesta Proactiva ante Amenazas Complejas: Identificación y mitigación anticipada de amenazas altamente sofisticadas.
  Gestión Integral de Logs con Análisis Predictivo: Análisis avanzado de registros con capacidad predictiva para prevenir incidentes.
  Evaluación Mensual de Vulnerabilidades con Parches Recomendados: Identificación de vulnerabilidades con recomendaciones específicas de parches.
  Alertas de Seguridad con Inteligencia Contextual: Alertas enriquecidas con información contextual para una mejor comprensión.
  Análisis de Amenazas Avanzadas y APT (Amenazas Persistentes Avanzadas): Enfoque en la identificación de amenazas altamente avanzadas y persistentes.
  Respuesta Inmediata a Incidentes Críticos: Acción inmediata ante incidentes críticos de seguridad.
`;

    }
  }
}
