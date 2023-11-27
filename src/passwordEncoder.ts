export class VTPassWordEncoder {
    async encode(rawPassword: string): Promise<string> {
        return this.encodeInternal(rawPassword);
    }
    async matches(rawPassword: string, encodedPassword: string): Promise<boolean> {
        return await this.encodeInternal(rawPassword) === encodedPassword;
    }
    private async encodeInternal(str: string): Promise<string> {

        return new Promise((resolve, reject) => {
            str = 'a'.concat(str);
            const word = str.split('');
            const Base = [0, 11, 15];

            let inv = false;
            let retorno = '';

            if (
                ((Base[1] % 2 === 0) && (Base[2] % 2 === 0)) ||
                ((Base[1] % 2 !== 0) && (Base[2] % 2 !== 0))
            ) {
                if (str.length > 0) {
                    for (let i = 1; i < word.length; i++) {
                        if (i % 3 === 0) {
                            inv = !inv;
                        }

                        const t = str.charCodeAt(i);
                        if (t % 2 === 0) {
                            if (inv) {
                                const s = String.fromCharCode(t + Base[2]);
                                word[i] = s;
                            } else {
                                const s = String.fromCharCode(t + Base[1]);
                                word[i] = s;
                            }
                        } else {
                            if (inv) {
                                const s = String.fromCharCode(t + Base[1]);
                                word[i] = s;
                            } else {
                                const s = String.fromCharCode(t + Base[2]);
                                word[i] = s;
                            }
                        }
                        retorno = retorno.concat(word[i]);
                    }
                }
            }
            resolve(retorno)
        });
    }
}