import { ProdutosService } from './../produtos.service';
import { IProduto, produtos } from './../produtos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto [] | undefined = produtos;

  constructor(
    private produtosService: ProdutosService

  ) { }

  ngOnInit(): void {
    this.produtos = this.produtosService.getAll();
  }

}
