export interface Category {
  id: number;
  name: string;
}

export type TransactionType = 'income' | 'outcome';

export interface Transaction {
  id: string;
  title: string;
  type: TransactionType;
  value: number;
  category: Category;
  created_at: string;
  formattedDate?: string;
  formattedValue?: string;
}

export interface TransactionsTableProps {
  transactions: Transaction[];
}

export interface TransactionRowProps {
  transaction: Omit<Transaction, 'id'>;
}

export interface Balance {
  income: number;
  outcome: number;
  total: number;
}
