/* 

✅ Use toLowerCase() for general cases (faster, avoids unnecessary processing).
✅ Use toLocaleLowerCase(locale) when handling locale-specific text (e.g., Turkish, German).

*/

console.log("İstanbul".toLowerCase());
// Output: 'i̇stanbul' (Incorrect in Turkish)

console.log("İstanbul".toLocaleLowerCase("tr"));
// Output: 'istanbul' (Correct in Turkish)
