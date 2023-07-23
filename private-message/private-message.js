let cipherKey = getCipherKeyFromLocalStorage();

        function getCipherKeyFromLocalStorage() {
            const cipherKeyJson = localStorage.getItem('love_letter_cipher_key');
            return cipherKeyJson ? JSON.parse(cipherKeyJson) : {};
        }

        function saveCipherKeyToLocalStorage() {
            localStorage.setItem('love_letter_cipher_key', JSON.stringify(cipherKey));
        }

        function loveLetterCipher(message) {
            // Randomly shuffle the alphabet to create the cipher key if it's not generated yet
            if (Object.keys(cipherKey).length === 0) {
                const alphabet = 'abcdefghijklmnopqrstuvwxyz';
                const shuffledAlphabet = alphabet.split('').sort(() => 0.5 - Math.random()).join('');
                for (let i = 0; i < alphabet.length; i++) {
                    cipherKey[alphabet[i]] = shuffledAlphabet[i];
                }
                saveCipherKeyToLocalStorage();
            }

            // Convert the message to lowercase for case-insensitive cipher
            message = message.toLowerCase();

            // Replace each letter with its corresponding cipher letter
            const cipherMessage = Array.from(message, char => cipherKey[char] || char).join('');

            return cipherMessage;
        }

        function loveLetterDecipher(encryptedMessage) {
            // Convert the encrypted message to lowercase for case-insensitive deciphering
            encryptedMessage = encryptedMessage.toLowerCase();

            // Replace each letter with its corresponding original letter for decryption
            const decipherMessage = Array.from(encryptedMessage, char => {
                const originalChar = Object.keys(cipherKey).find(key => cipherKey[key] === char);
                return originalChar || char;
            }).join('');

            return decipherMessage;
        }

        function encryptMessage() {
            const messageInput = document.getElementById('message');
            const cipheredMessageDiv = document.getElementById('ciphered-message');

            const message = messageInput.value.trim();

            if (message !== '') {
                const cipheredMessage = loveLetterCipher(message);
                cipheredMessageDiv.innerHTML = `<p><strong>Encrypted Message:</strong></p><p class="message">${cipheredMessage}</p>`;
            } else {
                alert('Please enter a message to encrypt.');
            }
        }

        function decryptMessage() {
            const encryptedInput = document.getElementById('encrypted');
            const decryptedMessageDiv = document.getElementById('decrypted-message');

            const encryptedMessage = encryptedInput.value.trim();

            if (encryptedMessage !== '') {
                const decryptedMessage = loveLetterDecipher(encryptedMessage);
                decryptedMessageDiv.innerHTML = `<p><strong>Decrypted Message:</strong></p><p class="message">${decryptedMessage}</p>`;
            } else {
                alert('Please enter an encrypted message to decrypt.');
            }
        }