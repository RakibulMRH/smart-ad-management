import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class OpenaiService {
  private readonly apiKey = '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'; // Ensure you have this in your .env file
  private readonly apiUrl = 'https://api.openai.com/v1/completions'; // Updated for gpt-3.5-turbo model

  async generateText(prompt: string): Promise<string> {
    try {
      const response = await axios.post(
        this.apiUrl,
        {
          model: "gpt-3.5-turbo",
          prompt,
          max_tokens: 50,
          temperature: 0.7,
        },
        { headers: { 'Authorization': `Bearer ${this.apiKey}` } }
      );
  
      console.log(response.data); // Add this line to log the response data
      console.log(process.env.OPENAI_API_KEY); // Ensure this prints your API key

      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('Error calling OpenAI API:', error.response?.data || error.message);
      throw new Error('Failed to generate text');
    }
  }  
}
