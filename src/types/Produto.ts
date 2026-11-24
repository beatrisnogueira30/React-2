export type Produto={
    id: number;
    nome: string;
    descricaoCurta: string;
    descricaoLonga: string;
    precoPorKg: number;
    imagem: string;
    categoriaIds: number[]
    ativo: boolean;
}

export type ProdutoRequest = Omit<Produto, 'id'>