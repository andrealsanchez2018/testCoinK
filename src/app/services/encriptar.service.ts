import { Injectable } from '@angular/core';
import { AES, enc, pad, mode, MD5 } from "crypto-js";
// import * as CryptoJS from 'crypto-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncriptarService {

  /* private static CONFIG = {
    mode: mode.ECB,
    padding: pad.Pkcs7
    };
    
    public encrypt(message: string): string {
    const toEncryptedArray = enc.Utf8.parse(message);
    const payload = AES.encrypt(toEncryptedArray, this.getKey(), EncriptarService.CONFIG);
    return payload.ciphertext.toString(enc.Base64);
    }
    
    public decrypt(message: string): string {
    const toEncryptArray = enc.Base64.parse(message);
    const payload = AES.decrypt({ ciphertext: toEncryptArray  }, this.getKey(), EncriptarService.CONFIG);
    return payload.toString(enc.Utf8);
    }
    
    private getKey() {
    return enc.Hex.parse(MD5(environment.key).toString());
    } */
  constructor() { }
}
