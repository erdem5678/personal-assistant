import React, { useState } from 'react';
import { Calendar, CheckSquare, MessageSquare, Bell, Plus, Trash2, Clock } from 'lucide-react';

export default function PersonalAssistant() {
  const [activeTab, setActiveTab] = useState('gorevler');
  const [gorevler, setGorevler] = useState([
    { id: 1, baslik: 'Proje raporunu tamamla', tamamlandi: false, oncelik: 'yuksek', tarih: '2024-12-16' },
    { id: 2, baslik: 'Market alışverişi yap', tamamlandi: false, oncelik: 'orta', tarih: '2024-12-15' }
  ]);
  const [notlar, setNotlar] = useState([
    { id: 1, baslik: 'Toplantı Notları', icerik: 'Yarınki toplantı için hazırlık yap', tarih: '2024-12-15' }
  ]);
  const [hatirlaticilar, setHatirlaticilar] = useState([
    { id: 1, mesaj: 'Doktor randevusu', zaman: '14:00', tarih: '2024-12-16' }
  ]);

  const [yeniGorev, setYeniGorev] = useState('');
  const [yeniNot, setYeniNot] = useState({ baslik: '', icerik: '' });
  const [yeniHatirlatici, setYeniHatirlatici] = useState({ mesaj: '', zaman: '', tarih: '' });

  const gorevEkle = () => {
    if (yeniGorev.trim()) {
      setGorevler([...gorevler, {
        id: Date.now(),
        baslik: yeniGorev,
        tamamlandi: false,
        oncelik: 'orta',
        tarih: new Date().toISOString().split('T')[0]
      }]);
      setYeniGorev('');
    }
  };

  const gorevToggle = (id) => {
    setGorevler(gorevler.map(g =>
      g.id === id ? { ...g, tamamlandi: !g.tamamlandi } : g
    ));
  };

  const gorevSil = (id) => {
    setGorevler(gorevler.filter(g => g.id !== id));
  };

  const notEkle = () => {
    if (yeniNot.baslik.trim()) {
      setNotlar([...notlar, {
        id: Date.now(),
        baslik: yeniNot.baslik,
        icerik: yeniNot.icerik,
        tarih: new Date().toISOString().split('T')[0]
      }]);
      setYeniNot({ baslik: '', icerik: '' });
    }
  };

  const hatirlaticiEkle = () => {
    if (yeniHatirlatici.mesaj.trim() && yeniHatirlatici.zaman && yeniHatirlatici.tarih) {
      setHatirlaticilar([...hatirlaticilar, {
        id: Date.now(),
        ...yeniHatirlatici
      }]);
      setYeniHatirlatici({ mesaj: '', zaman: '', tarih: '' });
    }
  };

  const oncelikRengi = (oncelik) => {
    switch(oncelik) {
      case 'yuksek': return 'bg-red-100 text-red-700 border-red-300';
      case 'orta': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'dusuk': return 'bg-green-100 text-green-700 border-green-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">Kişisel Asistanım</h1>
            <p className="text-indigo-100">Günlük işlerinizi kolayca yönetin</p>
          </div>

          <div className="flex border-b bg-gray-50">
            <button
              onClick={() => setActiveTab('gorevler')}
              className={`flex-1 py-4 px-6 font-semibold flex items-center justify-center gap-2 transition-all ${activeTab === 'gorevler' ? 'bg-white text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <CheckSquare size={20} />
              Görevler
            </button>
            <button
              onClick={() => setActiveTab('notlar')}
              className={`flex-1 py-4 px-6 font-semibold flex items-center justify-center gap-2 transition-all ${activeTab === 'notlar' ? 'bg-white text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <MessageSquare size={20} />
              Notlar
            </button>
            <button
              onClick={() => setActiveTab('hatirlaticilar')}
              className={`flex-1 py-4 px-6 font-semibold flex items-center justify-center gap-2 transition-all ${activeTab === 'hatirlaticilar' ? 'bg-white text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Bell size={20} />
              Hatırlatıcılar
            </button>
          </div>

          <div className="p-6">
            {/* Görevler Tab */}
            {activeTab === 'gorevler' && (
              <div>
                <div className="mb-6 flex gap-2">
                  <input
                    type="text"
                    value={yeniGorev}
                    onChange={(e) => setYeniGorev(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && gorevEkle()}
                    placeholder="Yeni görev ekle..."
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                  />
                  <button
                    onClick={gorevEkle}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 flex items-center gap-2 font-semibold transition-all"
                  >
                    <Plus size={20} />
                    Ekle
                  </button>
                </div>

                <div className="space-y-3">
                  {gorevler.map(gorev => (
                    <div
                      key={gorev.id}
                      className={`p-4 rounded-lg border-2 transition-all ${gorev.tamamlandi ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200 hover:border-indigo-300'}`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={gorev.tamamlandi}
                          onChange={() => gorevToggle(gorev.id)}
                          className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                        />
                        <div className="flex-1">
                          <p className={`font-medium ${gorev.tamamlandi ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                            {gorev.baslik}
                          </p>
                          <div className="flex gap-2 mt-2">
                            <span className={`text-xs px-2 py-1 rounded border ${oncelikRengi(gorev.oncelik)}`}>
                              {gorev.oncelik === 'yuksek' ? 'Yüksek' : gorev.oncelik === 'orta' ? 'Orta' : 'Düşük'}
                            </span>
                            <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600 border border-gray-300">
                              {gorev.tarih}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => gorevSil(gorev.id)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Notlar Tab */}
            {activeTab === 'notlar' && (
              <div>
                <div className="mb-6 space-y-3">
                  <input
                    type="text"
                    value={yeniNot.baslik}
                    onChange={(e) => setYeniNot({...yeniNot, baslik: e.target.value})}
                    placeholder="Not başlığı..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                  />
                  <textarea
                    value={yeniNot.icerik}
                    onChange={(e) => setYeniNot({...yeniNot, icerik: e.target.value})}
                    placeholder="Not içeriği..."
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                  />
                  <button
                    onClick={notEkle}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 flex items-center gap-2 font-semibold transition-all"
                  >
                    <Plus size={20} />
                    Not Ekle
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {notlar.map(not => (
                    <div key={not.id} className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200 hover:border-yellow-300 transition-all">
                      <h3 className="font-bold text-gray-800 mb-2">{not.baslik}</h3>
                      <p className="text-gray-600 text-sm mb-2">{not.icerik}</p>
                      <span className="text-xs text-gray-500">{not.tarih}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hatırlatıcılar Tab */}
            {activeTab === 'hatirlaticilar' && (
              <div>
                <div className="mb-6 space-y-3">
                  <input
                    type="text"
                    value={yeniHatirlatici.mesaj}
                    onChange={(e) => setYeniHatirlatici({...yeniHatirlatici, mesaj: e.target.value})}
                    placeholder="Hatırlatıcı mesajı..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                  />
                  <div className="flex gap-3">
                    <input
                      type="date"
                      value={yeniHatirlatici.tarih}
                      onChange={(e) => setYeniHatirlatici({...yeniHatirlatici, tarih: e.target.value})}
                      className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                    />
                    <input
                      type="time"
                      value={yeniHatirlatici.zaman}
                      onChange={(e) => setYeniHatirlatici({...yeniHatirlatici, zaman: e.target.value})}
                      className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                  <button
                    onClick={hatirlaticiEkle}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 flex items-center gap-2 font-semibold transition-all"
                  >
                    <Plus size={20} />
                    Hatırlatıcı Ekle
                  </button>
                </div>

                <div className="space-y-3">
                  {hatirlaticilar.map(hatirlatici => (
                    <div key={hatirlatici.id} className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200 hover:border-purple-300 transition-all">
                      <div className="flex items-center gap-3">
                        <Bell className="text-purple-600" size={24} />
                        <div className="flex-1">
                          <p className="font-medium text-gray-800">{hatirlatici.mesaj}</p>
                          <div className="flex gap-3 mt-1">
                            <span className="text-sm text-gray-600 flex items-center gap-1">
                              <Calendar size={14} />
                              {hatirlatici.tarih}
                            </span>
                            <span className="text-sm text-gray-600 flex items-center gap-1">
                              <Clock size={14} />
                              {hatirlatici.zaman}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
