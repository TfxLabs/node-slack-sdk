/* eslint-disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../WebClient';
export type AdminRolesAddAssignmentsResponse = WebAPICallResult & {
  error?:          string;
  needed?:         string;
  ok?:             boolean;
  provided?:       string;
  rejected_users?: RejectedUser[];
};

export interface RejectedUser {
  error?: string;
  id?:    string;
}