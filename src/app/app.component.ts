import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { CapTablePaginationComponent } from "./cap-table-pagination/cap-table-pagination.component";
import { ExportXLSService } from "./services/export-xls.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(private exportXlsService: ExportXLSService) {}

  private brcapUtil;
  funcionalidades = [];
  canais = [];
  colors = {};
  collapse = false;
  radio:any;
  radioSimple: any;
  selectSimple = [];
  mes;
  item = false;
  radios = [];
  combo;
  radioSelecionado = [];
  checkSelecionado1;
  checkSelecionado2;
  checkSelecionado3;
  data;
  select;
  naoAtivo = true;
  texto;
  erroMsg;
  desabilitar = false;
  aaaa = "Teste texto";
  off = false;
  on = true;
  mascara;
  loading = true;
  disabled = true;
  cidades: Array<any> = [];
  selectedItems: Array<any> = [];
  dropdownSettings = {};

  menu = [
    {
      codigo: "posvenda#gravame",
      nome: "Gravame",
      icone: "https://s3-sa-east-1.amazonaws.com/brasilcap-assets/dev/posvenda#gravame.svg",
      ativo: true,
      descricao: "Gravame",
      funcionalidades: [
        {
          codigo: "posvenda#gravame#associacao-de-gravame",
          nome: "Associação",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/associacao-gravame",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        },
        {
          codigo: "posvenda#gravame#consulta-de-gravame",
          nome: "Consulta de Gravame",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/consulta-gravame",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        }
      ]
    },
    {
      codigo: "posvenda#titulos",
      nome: "Títulos",
      icone: "https://s3-sa-east-1.amazonaws.com/brasilcap-assets/dev/posvenda#titulos.svg",
      ativo: true,
      descricao: "Títulos",
      funcionalidades: [
        {
          codigo: "posvenda#titulos#consulta-de-titulos-por-cpf",
          nome: "Consulta de Títulos por CPF",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/consulta-titulo-cpf",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        },
        {
          codigo: "posvenda#titulos#extrato-de-titulos",
          nome: "Consulta de Título",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/consulta-titulo-numero",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        }
      ]
    },
    {
      codigo: "posvenda#sorteio",
      nome: "Sorteio",
      icone: "https://s3-sa-east-1.amazonaws.com/brasilcap-assets/dev/posvenda#sorteio.svg",
      ativo: true,
      descricao: "Sorteio",
      funcionalidades: [
        {
          codigo: "posvenda#sorteio#consulta-sorteio",
          nome: "Consultar Sorteio",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/consulta-sorteio",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        },
        {
          codigo: "posvenda#sorteio#numeros-premiados",
          nome: "Consultar Números Premiados",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/numeros-premiados",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        },
        {
          codigo: "posvenda#sorteio#titulos-contemplados",
          nome: "Pesquisar Títulos Contemplados",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/titulo-contemplado",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        },
        {
          codigo: "posvenda#sorteio#verificar-apuracao",
          nome: "Verificar Apuração",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/verificar-apuracao",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        },
        {
          codigo: "posvenda#sorteio#controle-de-apuracao",
          nome: "Controlar de Apuração",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/controle-apuracao",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        },
        {
          codigo: "posvenda#sorteio#cadastro-de-sorteio",
          nome: "Cadastrar Sorteio ",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/cadastro-sorteio",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        },
        {
          codigo: "posvenda#sorteio#controle-liberacao",
          nome: "Controlar Liberação ",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/controle-liberacao",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        },
        {
          codigo: "posvenda#sorteio#liberacao-manual",
          nome: "Liberar Pagamento ",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/liberacao-manual",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        },
        {
          codigo: "posvenda#sorteio#valida-exigencia-legal",
          nome: "Liberar com Exigência Legal",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/liberacao-pagamento",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        },
        {
          codigo: "posvenda#sorteio#calendario-de-sorteios",
          nome: "Visualizar Calendário ",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/calendario-sorteio",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        },
        {
          codigo: "posvenda#sorteio#atas-de-sorteio",
          nome: "Gerar Ata de Sorteio",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/atas-sorteio",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        }
      ]
    },
    {
      codigo: "posvenda#atendimento",
      nome: "Atendimento",
      icone: "https://s3-sa-east-1.amazonaws.com/brasilcap-assets/dev/posvenda#atendimento.svg",
      ativo: true,
      descricao: "Atendimento",
      funcionalidades: [
        {
          codigo: "posvenda#atendimento#atendimento-clientes",
          nome: "Atender Clientes ",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/atendimento-clientes",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        },
        {
          codigo: "posvenda#atendimento#atendimento-demandas",
          nome: "Atender Demandas",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/atendimento-demandas",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        },
        {
          codigo: "posvenda#atendimento#controle-de-demandas",
          nome: "Controlar Demandas",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/controle-demandas",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        }
      ]
    },
    {
      codigo: "posvenda#protocolo",
      nome: "Protocolo",
      icone: "https://s3-sa-east-1.amazonaws.com/brasilcap-assets/dev/posvenda#protocolo.svg",
      ativo: true,
      descricao: "Protocolo",
      funcionalidades: [
        {
          codigo: "posvenda#protocolo#consulta-protocolo",
          nome: "Consultar Protocolo",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/consulta-protocolo",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        }
      ]
    },
    {
      codigo: "posvenda#cadastros",
      nome: "Cadastros",
      icone: "https://s3-sa-east-1.amazonaws.com/brasilcap-assets/dev/posvenda#cadastros.svg",
      ativo: true,
      descricao: "Cadastros",
      funcionalidades: [
        {
          codigo: "posvenda#cadastros#inclusao-nomes-premiados-pi",
          nome: "Inclusão Nomes Premiados PI",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/inclusao-nome-premiados-pi",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        }
      ]
    },
    {
      codigo: "posvenda#permissoes",
      nome: "Permissões",
      icone: "https://s3-sa-east-1.amazonaws.com/brasilcap-assets/dev/posvenda#permissoes.svg",
      ativo: true,
      descricao: "Permissões",
      funcionalidades: [
        {
          codigo: "posvenda#permissoes#permissoes",
          nome: "permissões",
          icone: null,
          ativo: true,
          rota: "/#/dashboard/permissoes",
          descricao: "teste",
          acao: ["incluir", "alterar", "pesquisar", "excluir", "bloquear"]
        }
      ]
    }
  ];

  table = [
    {
      Nome: "Teste 1",
      "E-mail": "Abc@gmail.com"
    },
    {
      Nome: "Teste 4",
      "E-mail": "Ab345345c@gmail.com"
    },
    {
      Nome: "Teste 3",
      "E-mail": "Ab21214c@gmail.com"
    },
    {
      Nome: "Teste 2",
      "E-mail": "Abc@gmail.com"
    }
  ];

  itemId;
  url = "https://dhfnhabwnl.execute-api.sa-east-1.amazonaws.com/dev/";

  // CAP-TABLE-PAGINAION
  @ViewChild(CapTablePaginationComponent)
  tablePagination: CapTablePaginationComponent;
  columns = ["ID", "NOME"];
  items = [[1, "JOÃO"], [2, "MARIA"], [3, "JOSÉ"], [4, "Anna"], [5, "Miguel"], [6, "Gabriel"], [7, "Raphael"], [8, "Pedro"], [9, "Paulo"], [10, "Joaquim"],
  [11, "JOÃO2"], [12, "MARIA2"], [13, "JOSÉ2"], [14, "Anna2"], [15, "Miguel2"], [16, "Gabriel2"], [17, "Raphael2"], [18, "Pedro2"], [19, "Paulo2"], [20, "Joaquim2"],
  [21, "JOÃO"], [22, "MARIA"], [23, "JOSÉ"], [24, "Anna"], [25, "Miguel"], [26, "Gabriel"], [27, "Raphael"], [28, "Pedro"]
  ];
  items2 = [[1, "JOÃO"], [2, "MARIA"], [3, "JOSÉ"], [4, "Anna"], [5, "Miguel"], [6, "Gabriel"], [7, "Raphael"], [8, "Pedro"], [9, "Paulo"], [10, "Joaquim"], [11, "olar"]
  ];

  rowOptions = ["Visualizar", "Editar", "Excluir"];

  listaPilotos = [
    {
      nome: 'Rogerinho do Ingá',
      veiculo: 'Sprinter Azul e Vermelha',
      signo: 'Capricórnio',
      altura: 1.7
    },
    {
      nome: 'Maurílio dos Anjos',
      veiculo: 'Kombi Branca 84',
      signo: 'Câncer',
      altura: 1.72
    },
    {
      nome: 'Julinho da Van',
      veiculo: 'Sprinter Branca',
      signo: 'Touro',
      altura: 1.8
    },
    {
      nome: 'Renan',
      veiculo: 'Towner Azul Bebê',
      signo: 'Áries',
      altura: 1.7
    },
  ];

  listaPilotos2 = [
    {
      nome: 'Rogerinho do Ingá',
      veiculo: 'Sprinter Azul e Vermelha',
      signo: 'Capricórnio',
      penduras: [
        { desc: 'cerveja fiado', valor: 23.50 },
        { desc: 'cerveja fiado', valor: 50.23 },
      ]
    },
    {
      nome: 'Maurílio dos Anjos',
      veiculo: 'Kombi Branca 84',
      signo: 'Câncer',
      penduras: [
        { desc: 'cerveja fiado', valor: 23.50 },
        { desc: 'cerveja fiado', valor: 50.23 },
      ]
    },
    {
      nome: 'Julinho da Van',
      veiculo: 'Sprinter Branca',
      signo: 'Touro',
      penduras: [
        { desc: 'cerveja fiado', valor: 23.50 },
        { desc: 'cerveja fiado', valor: 50.23 },
      ]
    },
    {
      nome: 'Renan',
      veiculo: 'Towner Azul Bebê',
      signo: 'Áries',
      penduras: [
        { desc: 'cerveja fiado', valor: 23.50 },
        { desc: 'cerveja fiado', valor: 50.23 },
      ]
    },
  ];

  metadadosPilotos = [
    {
      chave: 'nome',
      nome: 'Nome do Piloto'
    },
    {
      chave: 'veiculo',
      nome: 'Dirige:'
    },
    {
      chave: 'signo',
      nome: 'Signo do Zodíaco'
    },
    {
      chave: 'altura',
      nome: 'Altura',
      formato: '#,##0.00"m"'
    },
  ];

  metadadosPendura = {
    chave: 'penduras',
    detalhes: [
      {
        tamanho: 2,
        chave: 'desc',
        nome: 'Penduras'
      },
      {
        tamanho: 1,
        chave: 'valor',
        nome: 'Valor'
      },
    ]
  };

  variavel = "dfvfdfghgfhfggfhhfg"

  listaTipoPessoa = "dd"

  ngAfterViewInit() {
    if (this.tablePagination) {
      setTimeout(_ => {
        this.tablePagination.setPage(true);
      }, 0);
    }
  }

  // cpf;
  // changeMask(event) {
  //   var digit = event.key.replace(/\D/g, '');
  //   var value = this.cpf.replace(/\D/g, '');
  //   var size = value.concat(digit).length;
  //   if (size === 14) {
  //     this.mascara = "00.000.000/0000-00"
  //   } else if (size === 11) {
  //     this.mascara = "000.000.000-00000"
  //   } else{
  //     this.mascara = "";
  //   }
  // }

  toogleCollapse() {
    this.collapse = !this.collapse;
  }

  ngOnInit() {
    this.canais = [
      {
        label: "Opção 1",
        value: 1
      },
      {
        label: "Opção 2",
        value: 2
      },
      {
        label: "Opção 3",
        value: 3
      }
    ];

    this.radios = [
      {
        label: "Selecione opcao 1",
        value: 1
      },
      {
        label: "Selecione opcao 2",
        value: 2
      },
      {
        label: "Opção 3",
        value: 3
      }
    ];

    this.selectSimple = [
      {
        label: "opcao 1",
        value: 1
      },
      {
        label: "opcao 2",
        value: 2
      },
      {
        label: "Opção 3",
        value: 3
      }
    ];

    this.funcionalidades = [
      {
        modulo: "Usuarios",
        titulo: "Usuarios",
        icone: "menu",
        descricao: "administração dos usuarios do sistema",
        funcionalidades: [
          {
            id: "Usuarios#CadastroUsuarios",
            icon: "fa fa-home",
            title: "Cadastro Usuarios Teste Tamanho",
            url: "cadastrousuario",
            acoes: ["Incluir", "Excluir"],
            visible: false
          },
          {
            id: "Usuarios#Exclusão",
            icon: "fa fa-file-alt",
            title: "Exclusão Usuarios",
            url: "excluirusuario",
            acoes: [],
            visible: false
          }
        ]
      },
      {
        modulo: "Sistemas",
        titulo: "Sistemas",
        icone: "menu",
        descricao: "administração dos sistemas",
        funcionalidades: [
          {
            id: "Sistemas#CadastroSistema",
            icon: "fa fa-home",
            title: "Cadastro Sistema",
            url: "cadastrosistema",
            acoes: ["Incluir", "Excluir"],
            visible: false
          },
          {
            id: "Sistemas#ExcluirSistema",
            icon: "fa fa-file-alt",
            title: "Excluir Sistemas",
            url: "excluirsistema",
            acoes: [],
            visible: false
          }
        ]
      }
    ]

    this.cidades = [
      { value: 1, label: 'New Delhi' },
      { value: 2, label: 'Mumbai' },
      { value: 3, label: 'Bangalore' },
      { value: 4, label: 'Pune' },
      { value: 5, label: 'Chennai' },
      { value: 6, label: 'Navsari' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'value',
      textField: 'label',
      selectAllText: 'Selecionar todos',
      unSelectAllText: 'limpar seleção',
      allowSearchFilter: false,
      itemsShowLimit: 3
    };
  }

  event(event) {
    console.log("Event [" + event.type + "] ", event);
  }

  alerta() {
    alert("Submiteu");
  }

  teste(event) {
    console.log(event);
    this.naoAtivo = !this.naoAtivo;
  }

  campoValido(): boolean {
    this.erroMsg = "";
    if (this.texto && this.texto !== "" && !(this.texto.length < 10)) {
      this.erroMsg = "Campo inválido";
      return false;
    }
    this.erroMsg = "Campo Obrigatório";
    return true;
  }
  onChange(value) {
    console.log("Value change!! ",value);
  }
  async exemploExportarXLS() {
    return this.exportXlsService.gerarXls({
      linhas: this.listaPilotos,
      metadadosTabela: this.metadadosPilotos,
      nomeArquivo: 'exemploPilotos',
      titulo: 'Pilotos'
    });
  }

  async exemplo2ExportarXLS() {
    return this.exportXlsService.gerarXls({
      linhas: this.listaPilotos2,
      metadadosTabela: this.metadadosPilotos,
      metadadosDetalhe: this.metadadosPendura,
      nomeArquivo: 'exemplo2Pilotos',
      titulo: 'Pilotos'
    });
  }

  login(event) {
    alert("LOGOU!");
  }

  selFormaOnChange(item: any){
    console.log('item', item);
  }
}
