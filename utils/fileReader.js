const fs = require('fs');

const textFileReader = filePath => {
  try {  
    const data = fs.readFileSync(filePath, 'utf8');
    return data.toString()    
  } catch(e) {
    console.log('Error:', e.stack);
  }
}

module.exports = { textFileReader }