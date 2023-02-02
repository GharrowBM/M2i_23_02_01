interface Client {
  firstname: string;
  lastname: string;
  numeroIdNat?: number;

  acheter?: () => number;
}

interface ClientRegulier extends Client {
  pointFid: number;
}

export {Client, ClientRegulier}