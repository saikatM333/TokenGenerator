// src/services/TokenService.js
class TokenService {
    static generateTokens(count, prefix, tokensPerRow) {
      const tokens = [];
      for (let i = 1; i <= count; i++) {
        tokens.push(`${prefix}${i}`);
      }
      return this.splitIntoRows(tokens, tokensPerRow);
    }
  
    static splitIntoRows(tokens, tokensPerRow) {
      const rows = [];
      for (let i = 0; i < tokens.length; i += tokensPerRow) {
        rows.push(tokens.slice(i, i + tokensPerRow));
      }
      return rows;
    }
  }
  
  export default TokenService;
  