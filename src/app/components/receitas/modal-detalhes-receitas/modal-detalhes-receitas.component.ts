import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-detalhes-receitas',
  templateUrl: './modal-detalhes-receitas.component.html',
  styleUrls: ['./modal-detalhes-receitas.component.scss']
})
export class ModalDetalhesReceitasComponent {
  public detalhesReceita; 
  public ingredientes: any;
  public modoPreparo: any;
  public outrasInformacoes: any;

  constructor(
    public matDialogRef: MatDialogRef<ModalDetalhesReceitasComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.detalhesReceita = data;
    console.log("Dados modal: ", this.detalhesReceita);
  }

  ngOnInit(): void {
    this.getIngredientes(); 
  }

  getIngredientes() {
    console.log("Dados modal ingrediente: ", this.detalhesReceita.receita.secao[0].conteudo.filter((entry: string) => /\S/.test(entry)));

    let ingredientesReceita = this.detalhesReceita.receita.secao.map(
    (item: { conteudo: any; }) => 
      item.conteudo
    ).filter((entry: string) => /\S/.test(entry)); 


    this.ingredientes = ingredientesReceita[0];
    this.modoPreparo = ingredientesReceita[1];

    if(ingredientesReceita.length > 2) {
      this.outrasInformacoes = ingredientesReceita[2];
    }
  }
  fecharModalReceitas(): void {
    this.matDialogRef.close();
  }
}
