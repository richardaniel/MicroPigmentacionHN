import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
  animations: [
    trigger('chatWindowAnimation', [
      state('open', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      state('closed', style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      transition('closed => open', [
        animate('0.3s ease-out')
      ]),
      transition('open => closed', [
        animate('0.3s ease-in')
      ])
    ])
  ]
})
export class ChatWindowComponent implements OnInit {
  isVisible = false;
  messages = [
    { user: 'bot', text: '¡Hola! ¿En qué puedo ayudarte con nuestros servicios de micropigmentación?' }
  ];
  userMessage: string = '';
  services: any[] = [];
  additionalInfo: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/services.json').subscribe(data => {
      this.services = data;
    });
    this.http.get<any>('assets/additional-info.json').subscribe(data => {
      this.additionalInfo = data;
    });
  }

  toggleChat() {
    this.isVisible = !this.isVisible;
  }

  sendMessage(message: string) {
    if (message.trim()) {
      this.messages.push({ user: 'user', text: message });

      // Preparar el contexto para el prompt
      const context = `
        Eres un asistente profesional para un negocio de micropigmentación en Honduras. 
        Lista de servicios y precios: ${JSON.stringify(this.services)}. 
        Información adicional: ${JSON.stringify(this.additionalInfo)}.
        Responde la siguiente pregunta de manera clara, profesional y en español: "${message}". 
        Si no sabes algo, sugiere contactar al negocio.
      `;

      // Enviar mensaje a la API de OpenAI
      this.http.post<any>('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-4o', // Usa 'gpt-4o' si tienes acceso
        messages: [
          { role: 'system', content: context },
          { role: 'user', content: message }
        ],
        max_tokens: 150,
        temperature: 0.7
      }, {
        headers: {
          // 'Authorization': `Bearer ${environment.openaiApiKey}`,
          'Content-Type': 'application/json'
        }
      }).subscribe({
        next: (response) => {
          const botResponse = response.choices[0].message.content.trim();
          this.messages.push({ user: 'bot', text: botResponse });
        },
        error: (error) => {
          console.error('Error en la API de OpenAI:', error);
          this.messages.push({ user: 'bot', text: 'Lo siento, hubo un error. Por favor, intenta de nuevo o contacta al negocio.' });
        }
      });

      this.userMessage = '';
    }
  }
}