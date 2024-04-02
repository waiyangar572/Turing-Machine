interface Verifiers {
    [id: string]: (boolean | null)[][];
}

declare const verifiers: Verifiers;

export default verifiers;
