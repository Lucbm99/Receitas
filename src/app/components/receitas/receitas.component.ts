import { ModalDetalhesReceitasComponent } from './modal-detalhes-receitas/modal-detalhes-receitas.component';
import { Component, OnInit } from '@angular/core';
import { ReceitasService } from 'src/app/services/receitas.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {

  public receitas: any;
  showLoading: boolean = true;

  constructor(
    private _receitasService: ReceitasService,
    private _matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this._receitasService.getReceitas().subscribe((response) => {
      this.exibirSpinnerLoading(response);
      this.pegandoApenasAlgumasReceitas(response)
      this.removerReceitasDuplicadas();
    })
  }

  exibirSpinnerLoading(response: any) {
    if (response) {
      this.showLoading = false;
    }
  }

  pegandoApenasAlgumasReceitas(response: any) {
    this.receitas = response.slice(1, 403)
  }

  removerReceitasDuplicadas() {
    let filtrandoReceitasDuplicadas = this.receitas.filter(
    (value: { nome: any; }, index: any, array: any[]) => 
      index == array.findIndex((item: { nome: any; }) => 
        item.nome == value.nome
    ));
    this.receitas = filtrandoReceitasDuplicadas; 
  }

  exibirDetalhesReceitas(receita: any) {
    const dialogRef = this._matDialog.open(ModalDetalhesReceitasComponent, {
      data: { receita },
      width: '60vw',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
