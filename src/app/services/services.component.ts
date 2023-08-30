import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
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
}
