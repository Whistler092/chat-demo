using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace reactchatapp.Services
{
    public class ChatService : IChatService
    {
        public Task<ChatMessage> CreateNewMessage(string senderName, string message)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<ChatMessage>> GetAllInitially()
        {
            throw new NotImplementedException();
        }
    }
}
