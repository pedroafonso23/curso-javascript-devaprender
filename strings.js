// Tipo primitivo
const msg = 'boa tarde'

// Tipo objeto
const outraMsg = new String('bom dia')

console.log(outraMsg.length)
console.log(outraMsg[2])
console.log(msg.includes('boa'))
console.log(msg.includes('noite'))
console.log(msg.endsWith('tarde'))
console.log(msg.indexOf('tarde'))
console.log(msg.replace('tarde', 'noite'))
console.log(msg.trim())
console.log(msg.split(' '))