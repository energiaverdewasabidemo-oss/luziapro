import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Zap, User, Bot, Sparkles, Upload, FileText } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  hasWhatsAppButton?: boolean;
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose, initialMessage = '' }) => {
  const getInitialMessages = (): Message[] => [
    {
      id: 1,
      text: "¡Hola! Soy LUZIA 👋 Tu comparadora inteligente de luz y gas.",
      isUser: false,
      timestamp: new Date()
    },
    {
      id: 2,
      text: "¿Quieres saber cuánto puedes ahorrar en tu factura? Puedo analizar tu consumo y encontrar la tarifa más barata entre +1.000 compañías. ¿Empezamos?",
      isUser: false,
      timestamp: new Date()
    }
  ];

  const [messages, setMessages] = useState<Message[]>(getInitialMessages());
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const quickReplies = [
    "📄 Subir mi factura",
    "¿Cuánto puedo ahorrar?",
    "¿Cómo funciona?",
    "💬 Hablar con asistente"
  ];

  // Reset messages when chat is opened
  useEffect(() => {
    if (isOpen) {
      setMessages(getInitialMessages());
      setInputText('');
      setUploadedFile(null);
    }
  }, [isOpen]);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const redirectToWhatsApp = (message: string) => {
    const phoneNumber = '34621508300'; // 621 50 83 00 with country code
    const encodedMessage = encodeURIComponent(`Hola, vengo de luzia.pro y quiero ${message}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  
  const handleWhatsAppRedirect = () => {
    redirectToWhatsApp('comparar tarifas de luz y gas desde luzia.pro');
  };
  
  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };
  
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      
      // Auto-send message about file upload
      const fileMessage: Message = {
        id: messages.length + 1,
        text: `📄 He subido mi factura: ${file.name}`,
        isUser: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, fileMessage]);
      setIsTyping(true);
      
      // Start analysis simulation
      setTimeout(() => {
        const analysisMessage: Message = {
          id: messages.length + 2,
          text: "¡Perfecto! Analizando tu consumo y comparando con +1,000 tarifas... 🔍",
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, analysisMessage]);
        
        // Continue with typing indicator
        setTimeout(() => {
          const resultsMessage: Message = {
            id: messages.length + 3,
            text: "📊 ¡Análisis completado! He encontrado tarifas que pueden ahorrarte hasta €450/año",
            isUser: false,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, resultsMessage]);
          
          // Show WhatsApp button after 2 more seconds
          setTimeout(() => {
            const whatsappMessage: Message = {
              id: messages.length + 4,
              text: "Nuestra asistente especializada te ayudará a completar el cambio y gestionar todo el papeleo. ¡Es gratis y sin compromiso!",
              isUser: false,
              timestamp: new Date(),
              hasWhatsAppButton: true
            };
            setMessages(prev => [...prev, whatsappMessage]);
            setIsTyping(false);
          }, 2000);
        }, 1500);
      }, 1000);
    }
  };
  
  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Si ya subieron archivo
    if (uploadedFile) {
      return "Ya he recibido tu factura y está siendo analizada. Nuestra asistente te contactará por WhatsApp para ayudarte con el cambio de tarifa. ¿Necesitas ayuda con algo más?";
    }
    
    // Respuestas específicas para subir factura
    if (message.includes('subir') && message.includes('factura')) {
      return "¡Perfecto! Puedes subir tu factura directamente aquí usando el botón 📄 que está junto al campo de mensaje. También puedo conectarte con nuestra asistente por WhatsApp si prefieres. ¿Cómo quieres proceder?";
    }
    
    if (message.includes('factura') || message.includes('📄')) {
      return "¡Genial! Subir tu factura es la mejor forma de encontrar tu tarifa ideal. Te conectaré con nuestra asistente que analizará tu factura y te conseguirá la mejor oferta. ¿Continuamos por WhatsApp o prefieres que te llamemos?";
    }
    
    // Respuestas para comparar tarifas
    if (message.includes('tarifa') || message.includes('comparar')) {
      return "¡Perfecto! Para comparar tarifas y encontrar la más barata, lo mejor es que subas tu factura actual. Así puedo analizar tu consumo real y conseguirte el máximo ahorro. ¿Tienes tu factura a mano para subirla?";
    }
    
    if (message.includes('ahorrar') || message.includes('ahorro')) {
      return "¡Excelente! Nuestros usuarios ahorran una media de €487 al año. Para calcular tu ahorro exacto, necesito analizar tu factura actual. ¿Puedes subirla para que te consiga la mejor oferta personalizada?";
    }
    
    if (message.includes('funciona') || message.includes('cómo')) {
      return "¡Es súper fácil! 1️⃣ Subes tu factura 2️⃣ Analizo +1000 tarifas 3️⃣ Te muestro las mejores opciones 4️⃣ Te ayudo a cambiar y ahorrar. ¿Empezamos subiendo tu factura?";
    }
    
    if (message.includes('asistente') || message.includes('hablar') || message.includes('💬')) {
      return "¡Por supuesto! Te conectaré directamente con nuestra asistente especializada en energía. Ella te ayudará personalmente a encontrar la mejor tarifa y gestionar el cambio. ¿Prefieres WhatsApp o que te llame?";
    }
    
    if (message.includes('precio') || message.includes('coste') || message.includes('gratis')) {
      return "¡LUZIA es 100% GRATIS! No pagas nada. Solo ganamos si tú ahorras. Para empezar, sube tu factura y te conseguiré la mejor oferta sin coste alguno. ¿Empezamos?";
    }
    
    if (message.includes('tiempo') || message.includes('cuánto tarda')) {
      return "El cambio tarda 15-30 días y tu luz nunca se corta. Nosotros gestionamos todo el papeleo. Para empezar ya mismo, ¿puedes subir tu factura?";
    }
    
    if (message.includes('whatsapp') || message.includes('llamar') || message.includes('teléfono')) {
      setTimeout(() => {
        redirectToWhatsApp('comparar tarifas de luz y gas desde luzia.pro');
      }, 2000);
      return "¡Perfecto! Te estoy redirigiendo a WhatsApp donde nuestra asistente te ayudará personalmente. También puedes llamarnos al 621 50 83 00. ¡En 2 segundos te abro WhatsApp!";
    }
    
    return "Para ayudarte mejor, lo ideal es que subas tu factura de luz y gas. Así puedo analizar tu caso específico y conseguirte el máximo ahorro. ¿Tienes tu factura para subirla? Si prefieres, también puedo conectarte con nuestra asistente por WhatsApp.";
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = String(messageText || inputText);
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: textToSend,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    if (!messageText) setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(textToSend),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      
      // Check if user wants to upload bill or contact assistant
      const message = textToSend.toLowerCase();
      if (message.includes('subir') || message.includes('factura') || message.includes('📄')) {
        setTimeout(() => {
          const followUpMessage: Message = {
            id: messages.length + 3,
            text: "Te conectaré con nuestra asistente especializada que te ayudará a subir tu factura de forma segura y encontrar la mejor tarifa para ti. 📱",
            isUser: false,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, followUpMessage]);
          
          setTimeout(() => {
            redirectToWhatsApp('subir mi factura de luz y gas desde luzia.pro');
          }, 2000);
        }, 2000);
      }
    }, 1500);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="flex-1 bg-black/20 backdrop-blur-sm md:bg-transparent"
        onClick={onClose}
      />
      
      {/* Chat Panel */}
      <div className="w-full max-w-sm md:max-w-md bg-white shadow-2xl flex flex-col animate-slideInRight mr-0 md:mr-4 mt-0 md:mt-4 mb-0 md:mb-4 rounded-none md:rounded-2xl max-h-screen md:max-h-[calc(100vh-2rem)] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-800 to-cyan-500 text-white p-4 flex items-center justify-between rounded-none md:rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg">LUZIA</h3>
              <div className="flex items-center space-x-1 text-xs text-cyan-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Comparador de Luz y Gas</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-gray-50 min-h-0">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-2 max-w-[85%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.isUser 
                    ? 'bg-blue-600' 
                    : 'bg-gradient-to-r from-pink-400 to-rose-500'
                }`}>
                  {message.isUser ? (
                    <User className="h-3 w-3 md:h-4 md:w-4 text-white" />
                  ) : (
                    <Bot className="h-3 w-3 md:h-4 md:w-4 text-white" />
                  )}
                </div>
                <div className={`rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-3 ${
                  message.isUser
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-800 shadow-sm border border-gray-200'
                }`}>
                  <p className="text-xs md:text-sm leading-relaxed">{message.text}</p>
                  
                  {/* WhatsApp Button */}
                  {message.hasWhatsAppButton && (
                    <div className="mt-3 md:mt-4">
                      <button
                        onClick={handleWhatsAppRedirect}
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-xs md:text-sm transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 w-full justify-center"
                      >
                        <span>📱</span>
                        <span>CONTINUAR EN WHATSAPP</span>
                        <span>💬</span>
                      </button>
                    </div>
                  )}
                  
                  <span className={`text-xs mt-1 block ${
                    message.isUser ? 'text-blue-200' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2 max-w-[85%]">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Bot className="h-3 w-3 md:h-4 md:w-4 text-white" />
                </div>
                <div className="bg-white rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-3 shadow-sm border border-gray-200">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {messages.length <= 2 && (
          <div className="p-3 md:p-4 bg-white border-t border-gray-200 flex-shrink-0">
            <p className="text-xs text-gray-600 mb-2 md:mb-3 flex items-center">
              <Sparkles className="h-3 w-3 mr-1" />
              Respuestas rápidas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 md:px-3 py-2 rounded-lg transition-colors text-left"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-3 md:p-4 bg-white border-t border-gray-200 flex-shrink-0 rounded-none md:rounded-b-2xl">
          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.gif"
            onChange={handleFileUpload}
            className="hidden"
          />
          
          <div className="flex space-x-2">
            {/* File upload button */}
            <button
              onClick={triggerFileUpload}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white p-2 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group flex-shrink-0"
              title="Subir factura"
            >
              <Upload className="h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
            </button>
            
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={uploadedFile ? "Factura subida ✓ Escribe tu mensaje..." : "Escribe tu mensaje o sube tu factura..."}
              className="flex-1 border border-gray-300 rounded-lg px-3 md:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isTyping}
              className="bg-gradient-to-r from-blue-800 to-cyan-500 text-white p-2 rounded-lg hover:from-blue-900 hover:to-cyan-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
            >
              <Send className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>
          
          {/* File upload status */}
          {uploadedFile && (
            <div className="mt-2 flex items-center space-x-2 text-xs md:text-sm text-green-600 bg-green-50 px-2 md:px-3 py-1 md:py-2 rounded-lg">
              <FileText className="h-3 w-3 md:h-4 md:w-4" />
              <span className="truncate">Factura subida: {uploadedFile.name}</span>
              <span className="text-green-500">✓</span>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ChatBot;