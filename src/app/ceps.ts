export interface Cep {
  id: number;
  campo: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  siafi: string;
}

export const ceps = [
  {
    id: 1,
    campo: '01001000',
    logradouro: 'Praça da Sé',
    complemento: 'lado ímpar',
    bairro: 'Sé',
    localidade: 'São Paulo',
    uf: 'SP',
    ibge: '3550308',
    gia: '1004',
    siafi: '7107',
  },
  {
    id: 2,
    campo: 'absdcef1',
    logradouro: 'nenhum',
    complemento: 'nenhum',
    bairro: 'nenhum',
    localidade: 'nenhum',
    uf: 'nenhum',
    ibge: '0000000',
    gia: '0000',
    siafi: '0000',
  },
  {
    id: 3,
    campo: '10987654',
    logradouro: 'Parque Moinhos de Vento',
    complemento: 'desconhecido',
    bairro: 'Moinhos',
    localidade: 'Porto Alegre',
    uf: 'RS',
    ibge: '11223345',
    gia: '2000',
    siafi: '7800',
  },
];
