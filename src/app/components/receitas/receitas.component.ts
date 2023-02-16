import { Component, OnInit } from '@angular/core';
import { ReceitasService } from 'src/app/services/receitas.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {

  public receitas: any;
  public nomesReceitas: string = '';
  showLoading : boolean = true;

  constructor(
    private _receitasService: ReceitasService,
  ) { }

  ngOnInit(): void {
    this._receitasService.getReceitas().subscribe((response) => {
      if (response) {
        this.showLoading = false;
      }
      this.receitas = response;

      this.getNomesReceitas(); 
    })
  }

  getNomesReceitas() {
    let nomesReceitas = this.receitas.map((item: { nome: any; }) => item.nome)
    this.nomesReceitas = nomesReceitas;
  }
}
