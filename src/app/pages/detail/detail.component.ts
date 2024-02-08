import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  title: string | undefined;
  itemType: string | undefined;
  detailText: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.title = params['title'];
      this.itemType = params['type'];
      this.detailText = this.getDetailText(this.itemType || '');
    });
  }

  private getDetailText(itemType: string): string {
    switch(itemType) {
      case 'cctv':
        return `Oferujemy kompleksową instalację systemów wizyjnych telewizji przemysłowej CCTV, zapewniającą bezpieczeństwo i monitoring w różnych środowiskach przemysłowych. Nasze rozwiązania CCTV są dostosowane do indywidualnych potrzeb klienta oraz gwarantują wysoką jakość obrazu i niezawodność działania. Dzięki naszym usługom, klienci mogą monitorować swoje obiekty w czasie rzeczywistym oraz skutecznie reagować na wszelkie sytuacje nadzorowe. Zapewniamy profesjonalne doradztwo, montaż oraz konfigurację systemów CCTV, zapewniając pełną satysfakcję naszych klientów.`;
      case 'access-control':
        return `Nasza firma specjalizuje się w profesjonalnej instalacji systemów kontroli dostępu, zapewniających bezpieczeństwo oraz ograniczającym nieautoryzowany dostęp do obiektów. Dzięki naszym usługom, klienci mogą skutecznie zarządzać i monitorować dostęp do swoich pomieszczeń oraz zabezpieczyć wrażliwe obszary przed niepożądanymi osobami. Oferujemy kompleksowe rozwiązania dostosowane do indywidualnych potrzeb klienta, zapewniając nie tylko wysoką jakość instalacji, ale także profesjonalne doradztwo i obsługę posprzedażną. Działamy w sposób skuteczny i efektywny, dbając o pełną satysfakcję naszych klientów.`;
      case 'alarm-systems':
        return `Nasza firma świadczy kompleksowe usługi związane z instalacją systemów alarmowych, zapewniając klientom spokój i ochronę ich mienia. Dzięki naszym rozwiązaniom, klienci mogą skutecznie zabezpieczyć swoje domy, biura czy obiekty komercyjne przed włamaniem i innymi zagrożeniami. Oferujemy nowoczesne systemy alarmowe, które są łatwe w obsłudze i skutecznie reagują na wszelkie niebezpieczeństwa. Nasz doświadczony zespół specjalistów zapewnia profesjonalny montaż oraz konfigurację systemów, dostosowując je do indywidualnych potrzeb klienta. Gwarantujemy nie tylko wysoką jakość naszych usług, ale także pełne wsparcie i doradztwo techniczne na każdym etapie współpracy.`;
      case 'other-services':
        return `Nasza firma oferuje także szeroki zakres innych usług dostosowanych do indywidualnych potrzeb klientów. Dzięki naszemu doświadczeniu i ekspertyzie, jesteśmy w stanie zapewnić kompleksowe rozwiązania obejmujące różnorodne dziedziny. Niezależnie od tego, czy potrzebujesz instalacji systemów automatyki domowej, integracji systemów inteligentnego oświetlenia, czy też doradztwa w zakresie optymalizacji energii, możesz polegać na naszym profesjonalnym podejściu i wysokiej jakości usługach. Nasz zespół specjalistów z przyjemnością doradzi i dostosuje się do Twoich potrzeb.`;
      default:
        return '';
    }
  }
}
