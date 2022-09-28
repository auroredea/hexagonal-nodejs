import { dependencies } from "../dependencies";

// interface uniquement utilisée ici
export interface OnlineFetcher {
    response(name: string): Promise<boolean>;
}

// code basique (passe plat)
export const isOnline = async (name: string): Promise<boolean> => {
    return await dependencies.port.response(name);
};

