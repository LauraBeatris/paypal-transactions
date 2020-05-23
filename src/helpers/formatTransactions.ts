import { formatRelative, parseISO } from 'date-fns';
import { Transaction } from '../types/transactions';
import formatValue from '../utils/formatValue';

interface FormattedTransaction extends Transaction {
  formattedDate: string;
  formattedValue: string;
}

const formattedTransactions = (
  transactions: Transaction[],
): FormattedTransaction[] =>
  transactions?.map(transaction => ({
    ...transaction,
    formattedDate: formatRelative(
      parseISO(transaction.created_at),
      new Date(),
    ).toLowerCase(),
    formattedValue: formatValue(transaction.value),
  }));

export default formattedTransactions;
