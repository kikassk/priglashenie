import React, { useState } from 'react';
import { Send, CheckCircle, Heart, Wine, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RsvpModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    status: 'attending',
    plusOne: 'no',
    drink: 'wine',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl border border-[#D5C3B5] shadow-2xl p-6 sm:p-8 overflow-hidden text-[#2C1E16]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8A6650] hover:text-[#2C1E16] text-xl p-2 rounded-full hover:bg-[#EFECE6] transition"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-6">
              <span className="font-handwriting text-2xl text-[#B89B86]">Подтверждение</span>
              <h3 className="font-serif text-3xl text-[#4A3326] font-medium">Ваше Присутствие</h3>
              <p className="text-xs text-[#8A6650] mt-1">Пожалуйста, ответьте до 1 октября 2026</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#6B4D3B] mb-1 font-medium">Ваше Имя и Фамилия *</label>
                <input
                  type="text"
                  required
                  placeholder="Анна Иванова"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#EFECE6]/60 border border-[#D5C3B5]/60 focus:outline-none focus:border-[#8A6650] text-sm text-[#2C1E16]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#6B4D3B] mb-1 font-medium">Сможете ли присутствовать?</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, status: 'attending'})}
                    className={`py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${formData.status === 'attending' ? 'bg-[#4A3326] text-white border-[#4A3326]' : 'bg-[#EFECE6]/40 border-[#D5C3B5]/60 text-[#6B4D3B]'}`}
                  >
                    ✨ С удовольствием приду!
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, status: 'declined'})}
                    className={`py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${formData.status === 'declined' ? 'bg-[#8A6650] text-white border-[#8A6650]' : 'bg-[#EFECE6]/40 border-[#D5C3B5]/60 text-[#6B4D3B]'}`}
                  >
                    💔 К сожалению, не смогу
                  </button>
                </div>
              </div>

              {formData.status === 'attending' && (
                <>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#6B4D3B] mb-1 font-medium">Будете ли вы с парой?</label>
                    <select
                      value={formData.plusOne}
                      onChange={(e) => setFormData({...formData, plusOne: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#EFECE6]/60 border border-[#D5C3B5]/60 focus:outline-none focus:border-[#8A6650] text-sm text-[#2C1E16]"
                    >
                      <option value="no">Приду один / одна</option>
                      <option value="yes">Буду с парой (+1)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#6B4D3B] mb-1 font-medium">Ваши напитки / Предпочтения</label>
                    <input
                      type="text"
                      placeholder="Игристое / Вино / Коктейли / Безалкогольные"
                      value={formData.drink}
                      onChange={(e) => setFormData({...formData, drink: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#EFECE6]/60 border border-[#D5C3B5]/60 focus:outline-none focus:border-[#8A6650] text-sm text-[#2C1E16]"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#6B4D3B] mb-1 font-medium">Пожелания или вопрос</label>
                <textarea
                  rows="2"
                  placeholder="Напишите пару тёплых слов..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#EFECE6]/60 border border-[#D5C3B5]/60 focus:outline-none focus:border-[#8A6650] text-sm text-[#2C1E16]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#4A3326] hover:bg-[#2C1E16] text-white rounded-xl font-serif text-lg tracking-wider transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2 mt-2"
              >
                <Send size={18} />
                <span>Отправить ответ</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 bg-[#B89B86]/20 text-[#4A3326] rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle size={36} />
            </div>
            <h3 className="font-serif text-3xl text-[#4A3326]">Спасибо!</h3>
            <p className="text-sm text-[#6B4D3B] max-w-xs mx-auto">
              Ваш ответ принят! До скорой встречи на самом лучшем празднике! ✨
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2 bg-[#8A6650] text-white rounded-full text-xs uppercase tracking-widest hover:bg-[#6B4D3B] transition"
            >
              Закрыть
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
