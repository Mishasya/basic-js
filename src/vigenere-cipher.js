const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (boolean) {
    this.boolean = boolean
  }
  encrypt(message, key) {
    this.message = message
    this.key = key
    if(!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    
  }
  decrypt(message, key) {
    this.message = message
    this.key = key
    if(!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    if(boolean) {
      return message.toUppercase()
    } else {
      return message.toUppercase().reverse()
    }
  }
}

// const directMachine = new VigenereCipheringMachine()
// const reverseMachine = new VigenereCipheringMachine(false)

module.exports = {
  VigenereCipheringMachine
};
