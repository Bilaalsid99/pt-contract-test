import type { AgreementAnswers } from "@/types/agreement";
import {
  clauseDefinitions,
  clauseServices,
  clausePayment,
  clauseCancellation,
  clauseLiability,
  clauseSignatures,
} from "./clauses";

export function assembleAgreementBody(a: AgreementAnswers): string {
  return [
    clauseDefinitions(a),
    clauseServices(a),
    clausePayment(a),
    clauseCancellation(a),
    clauseLiability(),
    clauseSignatures(a),
  ].join("\n");
}