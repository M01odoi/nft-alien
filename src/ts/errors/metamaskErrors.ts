import {IMetamaskError} from "@/ts/interfaces/IMetamaskError";

export const metamaskErrors: IMetamaskError = {
    'ACTION_REJECTED': 'You have rejected the MetaMask transaction',
    'CALL_EXCEPTION': "Please change metamask network to Goerli",
    'UNPREDICTABLE_GAS_LIMIT': "You are not the owner of this token",
    'INVALID_ARGUMENT': "This address does not exist",
}
