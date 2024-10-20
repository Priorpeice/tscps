import axios from 'axios';

export const handleVeriSubmit = async (
  e: React.FormEvent, 
  inputValue: string, 
  setOutputValue: React.Dispatch<React.SetStateAction<string>>
) => {
  e.preventDefault();
  try {
    const response = await axios.post('/api/verification', { question: inputValue });
    setOutputValue(response.data.object.response);
  } catch (error) {
    console.error('Error during verification:', error);
    setOutputValue('Verification failed. Please try again.');
  }
};
