import { Balance } from '../types/transactions';
import formatValue from '../utils/formatValue';

interface FormattedBalance extends Balance {
  formattedIncome: string;
  formattedOutcome: string;
  formattedTotal: string;
}

const formatExpense = (balance: Balance): FormattedBalance => ({
  ...balance,
  formattedIncome: formatValue(balance.income),
  formattedOutcome: formatValue(balance.outcome),
  formattedTotal: formatValue(balance.total),
});

export default formatExpense;
