export interface Transaction {
  id: string;
  title: string;
  income: number;
  outcome: number;
  category: string;
  created_at: string;
}

export interface TransactionsTableProps {
  transactions: Transaction[];
}

export interface TransactionRowProps {
  transaction: Omit<Transaction, 'id'>;
}
