using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace reactchatapp.Services
{
    public interface IChatService
    {
        Task<IEnumerable<ChatMessage>> GetAllInitially();
        Task<ChatMessage> CreateNewMessage(string senderName, string message);
    }
}
