(() => {
  "use strict";

  const articles = [
    {
      id: "tsk-sivil-memur-kadrolari",
      title: "TSK Sivil Memur Kadroları ve Meslek Grupları",
      category: "TSK",
      date: "30.10.2026",
      image: "article-01.png",
      excerpt: "Türk Silahlı Kuvvetleri bünyesindeki sivil görev alanlarını araştırmak için pratik bir başlangıç rehberi.",
      sections: [
        ["Görev alanını nasıl araştırmalı?", "Sivil personel ilanları, ihtiyaç duyulan meslek ve öğrenim alanına göre değişebilir. Önce güncel ilandaki unvanı, görev yerini ve özel şartları belirleyin; benzer isimli kadroların aynı nitelikleri istediğini varsaymayın."],
        ["İlanı karşılaştırma listesi", "Unvanı ve kontenjan bilgisini, mezuniyet şartını, varsa mesleki belge veya deneyim koşulunu ve başvuru yöntemini ayrı ayrı not edin. Böylece size uygun ilanları ölçülebilir biçimde karşılaştırabilirsiniz."],
        ["Başvuru öncesi", "Bu sayfa genel araştırma desteğidir. Kadro, görev yeri ve şartlar için yalnızca ilgili dönemin resmî ilanını esas alın."]
      ]
    },
    {
      id: "tsk-sivil-memur-basvuru",
      title: "TSK Sivil Memur Alımı ve Başvuru Süreci",
      category: "TSK",
      date: "30.10.2026",
      image: "article-02.png",
      excerpt: "Bir personel ilanını inceleme, belgeleri düzenleme ve başvuruyu takip etme adımlarını özetler.",
      sections: [
        ["İlanı baştan sona okuyun", "Başvuru tarihleri, kabul edilen unvanlar, aday şartları, belge biçimleri ve başvuru kanalı her ilanda ayrıca belirtilir. Başvuruya başlamadan önce ilan metnini ve eklerini birlikte okuyun."],
        ["Belgelerinizi düzenleyin", "İlanda istenen belgeler için bir kontrol listesi oluşturun. Dosya biçimi, güncellik, imza ve doğrulama koşullarını kontrol edin; istenmeyen kişisel belgeleri paylaşmayın."],
        ["Gönderimden sonra", "Başvurunun alındığına ilişkin ekranı veya kayıt numarasını saklayın. Sonuç ve duyuruları yalnızca ilanda belirtilen resmî kanallardan izleyin."]
      ]
    },
    {
      id: "tsk-sivil-memur-kpss",
      title: "TSK Sivil Memur Nasıl Olunur? Başvuru Şartları ve KPSS",
      category: "TSK",
      date: "30.10.2026",
      image: "article-03.png",
      excerpt: "Başvuru şartlarının ilana göre değiştiğini dikkate alarak KPSS ve meslek niteliklerini kontrol etme rehberi.",
      sections: [
        ["Şartları ilandan doğrulayın", "Kamu personeli alımlarında kabul edilen sınav türü, puan yılı ve taban koşul ilana göre belirlenebilir. Önce güncel ilanda yazan sınav bilgisini bulun; önceki yılların şartlarını otomatik olarak geçerli saymayın."],
        ["Nitelik kodlarını kontrol edin", "Mezuniyet alanı, diploma seviyesi ve varsa özel sertifika koşullarını ilandaki ifadelerle kendi belgeleriniz üzerinden karşılaştırın. Benzer program adlarının eşdeğer olduğunu varsaymayın."],
        ["Gerçekçi hazırlık", "Kendi puanınızı ve niteliklerinizi ilan koşullarına göre değerlendirin. Kesin uygunluk kararı ve puan değerlendirmesi için yetkili kurumun duyurusu esas alınmalıdır."]
      ]
    },
    {
      id: "tsk-sivil-memur-gorevler",
      title: "TSK Sivil Memur Nedir? Görevleri, Sınıfları ve Çalışma Şartları",
      category: "TSK",
      date: "30.10.2026",
      image: "article-04.png",
      excerpt: "Sivil personel ilanlarını görev, unvan ve çalışma yeri bakımından anlamaya yardımcı bir okuma rehberi.",
      sections: [
        ["Unvan ve görev tanımı", "Bir kadronun görevleri unvanından tek başına anlaşılamayabilir. İlan veya görev tanımındaki iş kapsamını, bağlı birimi ve istenen mesleki niteliği birlikte değerlendirin."],
        ["Çalışma koşullarını inceleyin", "Görev yeri, çalışma düzeni ve diğer koşullar ilgili duyuruda açıklanabilir. Bilgi eksikse varsayım yapmak yerine ilanda belirtilen başvuru veya iletişim kanalını kullanın."],
        ["Karar verirken", "Bir görevi kendi eğitim ve deneyiminizle karşılaştırın; kurum, kadro ve çalışma koşulları hakkındaki güncel bilgiyi resmî duyurudan doğrulayın."]
      ]
    },
    {
      id: "msu-adp-yerlestirme",
      title: "MSÜ Muvazzaf Subay ADP Hesaplama, Sınıflandırma ve Yerleştirme 2026",
      category: "MSÜ",
      date: "29.10.2026",
      image: "article-05.webp",
      excerpt: "Aday değerlendirme ve yerleştirme duyurularını takip ederken puan, tercih ve kontenjan kavramlarını ayırın.",
      sections: [
        ["ADP bilgisi nasıl okunur?", "Aday değerlendirme puanının bileşenleri ve kullanım amacı ilgili alım duyurusunda açıklanır. Farklı alım türlerinin puan yöntemlerini birbirine taşımayın."],
        ["Tercih ve sıralama", "Tercih sırası, kontenjan ve adayların değerlendirme sonuçları yerleştirme sürecinde önem taşıyabilir. Kesin kurallar ve varsa tercih değişikliği imkânı için yayımlanan güncel kılavuzu kontrol edin."],
        ["Sonuçları doğrulama", "Kişisel sonuçlar ve yerleştirme bilgileri için yalnızca yetkili resmî başvuru/duyuru ekranını kullanın. Bu sayfadaki bilgiler puan veya yerleşme garantisi değildir."]
      ]
    },
    {
      id: "msu-secim-asamalari",
      title: "MSÜ Muvazzaf Subay Seçim Aşamaları 2026: Spor, Sağlık, Mülakat ve Gerekli Belgeler",
      category: "MSÜ",
      date: "29.10.2026",
      image: "article-06.webp",
      excerpt: "Seçim aşamalarını önceden planlayın; sınav, fizikî değerlendirme, sağlık ve mülakat ayrıntılarını güncel kılavuzdan doğrulayın.",
      sections: [
        ["Aşamaları tek tek planlayın", "Seçim sürecindeki değerlendirme türleri ve sıraları alım türüne göre değişebilir. Duyurudaki bütün aşamaları takviminize aktarın ve her aşamanın hazırlık süresini ayrıca planlayın."],
        ["Fizikî hazırlık ve sağlık", "Fizikî yeterlilik ölçütleri ile sağlık değerlendirmesinde uygulanacak kurallar resmî belgede belirtilir. Güvenli ve kademeli çalışın; kişisel sağlık konularında sağlık uzmanına danışın."],
        ["Evrak ve mülakat", "İstenen evrakı çağrı metnindeki listeye göre hazırlayın. Mülakat için deneyiminizi ve motivasyonunuzu dürüst, açık ve kendi ifadelerinizle anlatmaya çalışın."]
      ]
    },
    {
      id: "msu-basvuru-rehberi",
      title: "MSÜ Muvazzaf Subay Başvurusu Nasıl Yapılır? 2026 Başvuru Rehberi",
      category: "MSÜ",
      date: "29.10.2026",
      image: "article-07.webp",
      excerpt: "Başvuru dönemi, gerekli bilgiler ve tercih adımlarını düzenli şekilde takip etmek için kontrol listesi.",
      sections: [
        ["Güncel başvuru duyurusunu bulun", "Başvuru adresi, tarihler ve aday kabul koşulları dönemsel olarak güncellenir. Daha önce kaydedilmiş bir bağlantı yerine başvuracağınız dönemin yetkili duyurusunu açın."],
        ["Formu dikkatle tamamlayın", "Kimlik, eğitim ve iletişim bilgilerini belgelerinizle karşılaştırarak girin. Tercih veya onay adımı varsa son gönderimden önce özet ekranını tekrar inceleyin."],
        ["Başvuru kaydını saklayın", "Başvuru tamamlandı bilgisini ve varsa kayıt numarasını güvenli şekilde saklayın. Sınav ve seçim aşamalarını resmî duyurulardan izleyin."]
      ]
    },
    {
      id: "msu-basvuru-sartlari",
      title: "MSÜ Muvazzaf Subay Başvuru Şartları 2026: Kimler Başvurabilir?",
      category: "MSÜ",
      date: "29.10.2026",
      image: "article-08.webp",
      excerpt: "Adaylık koşullarını başvurduğunuz alımın güncel resmî kılavuzundaki maddelerle karşılaştırın.",
      sections: [
        ["Kişisel koşulları kontrol edin", "Yaş, eğitim, sınav, sağlık ve diğer adaylık ölçütleri alım türüne ve döneme bağlı olarak farklılaşabilir. Bu nedenle genel internet listeleri yerine güncel resmî kılavuzdaki ölçütleri kullanın."],
        ["Kendi durumunuzu belgeleyin", "Her koşulun karşısına bunu kanıtlayan belgeyi ve varsa son tarihini yazın. Bir koşulun size uygulanıp uygulanmadığından emin değilseniz yetkili başvuru birimine danışın."],
        ["Değişiklikleri takip edin", "Başvuru döneminde yayımlanan ek duyuru veya düzeltmeler ilk kılavuzu güncelleyebilir. Başvuru kapanana kadar resmî duyuruları kontrol edin."]
      ]
    },
    {
      id: "hukuk-subay-adp",
      title: "Hukuk Sınıfı Subay Alımında Aday Değerlendirme Puanı (ADP) Nasıl Hesaplanır?",
      category: "Subaylık",
      date: "29.10.2026",
      image: "article-09.webp",
      excerpt: "Hukuk alanındaki alım duyurularında puanlama ve sıralama yöntemini resmî metinden izleme rehberi.",
      sections: [
        ["Puan yöntemini bulun", "Aday değerlendirme puanının hangi unsurlardan oluştuğu ve sıralamada nasıl kullanıldığı ilgili alım kılavuzunda tanımlanır. Önceki dönem formüllerinin aynı kalacağını varsaymayın."],
        ["Kişisel kayıtlarınızı düzenleyin", "Başvuru ve değerlendirme sonuçlarını yalnızca yetkili resmî ekranlardan takip edin. Kendi kayıtlarınız ile başvurudaki bilgilerin tutarlı olduğundan emin olun."],
        ["Sonuçların anlamı", "Puan tek başına seçilme veya yerleşme garantisi değildir; alımın tüm ölçütleri ve kontenjanı birlikte uygulanabilir. Kesin açıklama için resmî duyuruyu esas alın."]
      ]
    },
    {
      id: "hukuk-subay-secim",
      title: "Hukuk Sınıfı Subay Alımı Seçim Aşamaları Nelerdir?",
      category: "Subaylık",
      date: "29.10.2026",
      image: "article-10.webp",
      excerpt: "Hukuk sınıfı adayların değerlendirme aşamalarını planlaması için genel ve özgün bir rehber.",
      sections: [
        ["Aşama sırasını doğrulayın", "Başvuru, değerlendirme, mülakat ve diğer aşamaların sayısı ve sırası alım duyurusunda açıklanır. İlanlar arasında farklılık olabileceğinden başvurduğunuz dönemin çizelgesini kullanın."],
        ["Hazırlığı bölümlere ayırın", "Her aşamanın ölçtüğü becerileri ve istenecek belgeleri ayrı ayrı not edin. Mülakat için eğitim ve deneyiminizi gözden geçirin; sorulara kendi bilginizle yanıt verin."],
        ["Duyuruları takip edin", "Çağrı ve sonuç bilgileri kişiye özel olabilir. Tarih ve yer bilgilerini yetkili kurumun resmî kanallarından doğrulayın."]
      ]
    },
    {
      id: "hukuk-subay-basvuru",
      title: "Hukuk Sınıfı Subay Alımı: Başvuru Şartları ve 2026 Kontenjanları",
      category: "Subaylık",
      date: "29.10.2026",
      image: "article-11.webp",
      excerpt: "Hukuk sınıfına yönelik başvurularda nitelik ve kontenjan bilgisini doğru kaynaktan kontrol edin.",
      sections: [
        ["Kontenjan ve nitelik", "Kontenjanlar, kabul edilen mezuniyet ve meslek koşulları ilgili alım duyurusunda belirlenir. Başlık veya eski bir haber yerine güncel ilan ekindeki resmî tabloyu inceleyin."],
        ["Uygunluğu kontrol etme", "Diploma ve mesleki belgelerinizdeki bilgileri ilandaki niteliklerle karşılaştırın. Mesleki deneyim veya ek belge koşullarını gözden kaçırmayın."],
        ["Başvuru öncesi doğrulama", "Kontenjan ve şartlarda değişiklik olabileceği için bu sayfayı kesin başvuru kaynağı olarak kullanmayın; yetkili kurumun güncel ilanını esas alın."]
      ]
    },
    {
      id: "hukuk-subay-genel",
      title: "Hukuk Sınıfı Subay Nedir? Görevleri, Eğitimi ve Özlük Hakları",
      category: "Subaylık",
      date: "29.10.2026",
      image: "article-12.webp",
      excerpt: "Hukuk eğitimiyle askerî kariyer seçeneklerini araştırırken görev tanımı ve çalışma koşullarını inceleme rehberi.",
      sections: [
        ["Görev kapsamını öğrenin", "Hukuk alanındaki görevlerin kapsamı, kurumun ihtiyacına ve kadro tanımına göre değişebilir. Rolü yalnızca unvan üzerinden değil, yayımlanan görev açıklaması üzerinden araştırın."],
        ["Eğitim ve mesleki koşullar", "Aranan mezuniyet, deneyim ve meslekî yeterlilik şartları her alımda ayrıca belirtilir. Eğitim geçmişinizin kabulünü resmî ilan veya yetkili kurumdan doğrulayın."],
        ["Kariyer kararınızı verin", "Görev içeriğini, eğitim sürecini ve çalışma koşullarını kendi beklentilerinizle karşılaştırın. Özlük hakları konusunda güncel mevzuat ve resmî açıklamaları esas alın."]
      ]
    },
    {
      id: "msu-komutan-mulakat",
      title: "Komutanın Gözünden MSÜ Sözlü Mülakatı",
      category: "Mülakat",
      date: "26.10.2026",
      image: "article-13.png",
      excerpt: "Sözlü değerlendirmede açık iletişim, kendini tanıma ve hazırlık için uygulanabilir öneriler.",
      sections: [
        ["Kendinizi tanımaya hazırlanın", "Eğitim geçmişinizi, hedefinizi ve güçlü yönlerinizi kısa ve anlaşılır biçimde anlatmayı deneyin. Hazır kalıp cümleleri ezberlemek yerine kendi deneyiminizden örnekler seçin."],
        ["İletişim ve tutarlılık", "Soruyu dikkatle dinleyin, bilmediğiniz bir konuda tahmin yürütmek yerine bunu dürüstçe ifade edin. Cevaplarınızın başvuru bilgilerinizle tutarlı olmasına dikkat edin."],
        ["Mülakat günü", "Yer, saat ve gerekli belgeleri resmî çağrıdan doğrulayın. Ulaşım ve hazırlık için zaman payı bırakın; değerlendirme ölçütlerini yalnızca resmî açıklamalardan öğrenin."]
      ]
    },
    {
      id: "msu-mulakat-deneyimleri",
      title: "MSÜ Sözlü Mülakatında Adayların Edindiği Genel Tecrübeler",
      category: "Mülakat",
      date: "26.10.2026",
      image: "article-14.png",
      excerpt: "Aday deneyimlerini tek bir ölçüt sanmadan, kendi hazırlık planınızı kurmak için değerlendirin.",
      sections: [
        ["Deneyimleri nasıl okumalı?", "Aday anlatımları kişisel deneyimdir; başka bir dönemde aynı soruların veya uygulamanın tekrarlanacağını garanti etmez. Deneyimleri resmî kılavuzun yerine değil, hazırlık için fikir olarak görün."],
        ["Kendi örneklerinizi hazırlayın", "Neden bu yolu seçtiğiniz, nasıl hazırlandığınız ve ekip çalışmasına ilişkin örneklerinizi düşünün. Gerçek deneyimlerinizi kısa ve net biçimde anlatmayı çalışın."],
        ["Bilgiyi teyit edin", "Mülakatın şekli, yeri ve değerlendirme yöntemi için güncel çağrı metni ve resmî açıklamalara başvurun."]
      ]
    },
    {
      id: "msu-mulakat-onerileri",
      title: "Sözlü Mülakatta Dikkat Edilmesi Gerekenler",
      category: "Mülakat",
      date: "26.10.2026",
      image: "article-15.png",
      excerpt: "Mülakat öncesi hazırlık ve görüşme sırasında saygılı, açık iletişim için kısa kontrol listesi.",
      sections: [
        ["Hazırlık", "Başvurduğunuz programı ve kendi başvuru bilgilerinizi gözden geçirin. Olası sorulara ezberlenmiş metinler yerine kişisel ve dürüst yanıtlar hazırlayın."],
        ["Görüşme sırasında", "Soruyu sonuna kadar dinleyin, anlaşılır ve doğrudan yanıt verin. Bilmediğiniz bir konuda yanlış bilgi vermek yerine bunu açıkça belirtin."],
        ["Lojistik ve kurallar", "Giyim, belge ve geliş saatiyle ilgili talimatları yetkili kurumun çağrısından kontrol edin; çevrim içi söylentileri resmî kural olarak kabul etmeyin."]
      ]
    },
    {
      id: "msu-spor-testi-merkezi",
      title: "MSÜ Spor Testi Merkezi",
      category: "Jandarma",
      date: "30.10.2026",
      image: "article-16.webp",
      excerpt: "Fizikî yeterlilik sınavı hazırlığını güvenli, kademeli ve resmî ölçütlere dayalı biçimde planlayın.",
      sections: [
        ["Ölçütleri doğrulayın", "Test türü, parkur, tekrar sayısı ve değerlendirme yöntemi başvurulan alıma göre değişebilir. Hazırlığa başlamadan önce güncel kılavuzdaki test açıklamalarını bulun."],
        ["Güvenli antrenman", "Başlangıç seviyenize uygun, kademeli bir çalışma planı seçin ve dinlenmeye yer verin. Ağrı veya sağlık sorunu yaşarsanız çalışmayı durdurup sağlık uzmanından görüş alın."],
        ["Sınav günü", "Kıyafet, belge ve zamanlama talimatlarını çağrı metninden kontrol edin. Bu rehber resmî puanlama veya sağlık tavsiyesi yerine geçmez."]
      ]
    },
    {
      id: "jamyo-jsgf-sartlari",
      title: "2026 JAMYO ve JSGF Başvuru Şartları Değişti mi? 2025 ile Karşılaştırma",
      category: "Jandarma",
      date: "30.10.2026",
      image: "article-17.png",
      excerpt: "Farklı başvuru dönemlerinin koşullarını yan yana inceleyin; eski bilgiyi yeni döneme taşımayın.",
      sections: [
        ["Karşılaştırmayı doğru kurun", "İki dönemin resmî kılavuzlarını yan yana açıp yaş, eğitim, sınav, sağlık ve başvuru tarihlerini ayrı satırlarda karşılaştırın. Haber başlıkları yerine birincil duyuru metinlerini kullanın."],
        ["Değişiklikleri kaydedin", "Değişen koşulun hangi aday grubuna uygulandığını ve geçerlilik dönemini not edin. Benzer adlandırmaların aynı programa karşılık geldiğini doğrulamadan varsaymayın."],
        ["2026 başvurusu için", "Başvuru kararı vermeden önce 2026 dönemi için yayımlanmış güncel kılavuzu esas alın. Bu yerel özet resmî uygunluk tespiti değildir."]
      ]
    },
    {
      id: "jamyo-taban-puan-cagri",
      title: "2026 JAMYO Taban Puanı Düştü mü? 2025 ve 2026 Çağrı Sıraları Karşılaştırıldı",
      category: "Jandarma",
      date: "30.10.2026",
      image: "article-18.png",
      excerpt: "Puan, sıralama ve çağrı bilgisini birbirinden ayırarak yayımlanan resmî sonuçları okuyun.",
      sections: [
        ["Taban puan ve çağrı sırası", "Puan eşiği, aday sıralaması ve çağrı kapsamı farklı kavramlardır. Karşılaştırmada aynı sınav türünü, aday grubunu ve sonuç aşamasını kullandığınızdan emin olun."],
        ["Dönemleri karşılaştırma", "Resmî yayımlanmış sonuçları kaynak ve tarihleriyle kaydedin. Kontenjan veya başvuru koşulları değişmişse iki dönemin sayıları doğrudan eşdeğer olmayabilir."],
        ["Sonuç çıkarırken", "Geçmiş dönem verisi gelecekteki çağrıyı veya yerleşmeyi garanti etmez. Güncel durum için yetkili kurumun duyurusunu takip edin."]
      ]
    },
    {
      id: "pomem-pmyo-karsilastirma",
      title: "POMEM mi PMYO mu? 2026 Polislik Başvurusu Yapacaklar İçin Temel Farklar",
      category: "Polislik",
      date: "30.10.2026",
      image: "article-19.png",
      excerpt: "Eğitim yolu ve başvuru koşullarını kendi durumunuza göre resmî duyurular üzerinden kıyaslayın.",
      sections: [
        ["Programları karşılaştırın", "POMEM ve PMYO farklı eğitim ve aday kabul süreçlerine sahip olabilir. Eğitim seviyesi, sınav, yaş, başvuru takvimi ve eğitim süresi başlıklarını ayrı ayrı inceleyin."],
        ["Kişisel koşullarınızı eşleştirin", "Mevcut eğitim durumunuzu ve sınav bilgilerinizi her programın güncel ilanıyla karşılaştırın. Önceki dönem şartlarının aynen geçerli olduğunu varsaymayın."],
        ["Başvuru kararınız", "Kariyer hedefiniz, eğitim yolu ve resmî kabul koşullarını birlikte değerlendirin. Kesin ve güncel bilgi için yetkili kurumun kılavuzunu esas alın."]
      ]
    },
    {
      id: "astsubaylik-basvuru-rehberi",
      title: "Astsubaylık Başvurusu: Dönem, Tercih ve Belge Rehberi",
      category: "Astsubaylık",
      date: "30.10.2026",
      image: "astsubaylik-basvuru.svg",
      excerpt: "Başvuru dönemini, tercihleri ve istenen belgeleri güncel resmî kılavuza göre planlayın.",
      sections: [
        ["Başvuracağınız statüyü belirleyin", "Astsubay alım yolları ve aday kabul koşulları kuruma, statüye ve döneme göre değişebilir. Önce hangi alım ilanına başvuracağınızı netleştirin; farklı statülerin şartlarını birbirine karıştırmayın."],
        ["Kılavuzla uygunluğu karşılaştırın", "Eğitim, yaş, sınav, sağlık ve varsa meslek koşullarını kılavuzdaki maddelerle tek tek karşılaştırın. Diploma ve diğer kanıtlayıcı belgelerinizi ilan metnindeki şartlara göre hazırlayın."],
        ["Başvuru kaydını saklayın", "Başvuruyu yalnızca ilanda belirtilen resmî sistemden tamamlayın, tercih ve bilgileri son kez kontrol edin ve başvuru kaydını saklayın. Tarihler için başvuracağınız dönemin duyurusunu esas alın."]
      ]
    },
    {
      id: "astsubaylik-secim-asamalari",
      title: "Astsubaylık Seçim Aşamaları ve Hazırlık Planı",
      category: "Astsubaylık",
      date: "30.10.2026",
      image: "astsubaylik-secim-asamalari.svg",
      excerpt: "Aday değerlendirme adımlarını önceden öğrenip sınav, fizikî hazırlık ve mülakatı planlayın.",
      sections: [
        ["Aşamaları doğru kaynaktan öğrenin", "Uygulanacak sınav, evrak kontrolü, fizikî değerlendirme, sağlık incelemesi ve mülakat adımları alım türüne göre farklılaşabilir. Güncel kılavuz ve aday çağrısındaki sırayı izleyin."],
        ["Dengeli hazırlık yapın", "Yazılı sınav veya mülakat çalışmalarını küçük, düzenli hedeflere bölün. Fizikî çalışma yapıyorsanız seviyenize uygun ve kademeli ilerleyin; sağlıkla ilgili sorularda uzman görüşü alın."],
        ["Çağrı ve sonuç takibi", "Sınav yeri, saat, gerekli belge ve sonuç duyurularını yalnızca yetkili kurum kanallarından doğrulayın. Kişisel sonuçlarınızı herkese açık yerde paylaşmayın."]
      ]
    },
    {
      id: "astsubaylik-basvuru-sartlari",
      title: "Astsubaylık Başvuru Şartları: Eğitim, Sınav ve Sağlık Kontrol Listesi",
      category: "Astsubaylık",
      date: "30.10.2026",
      image: "astsubaylik-sartlari.svg",
      excerpt: "Adaylık koşullarını yaş, eğitim, sınav ve sağlık başlıklarında sistematik biçimde inceleyin.",
      sections: [
        ["Eğitim ve sınav koşulları", "İstenen mezuniyet düzeyi, program veya sınav puanı ilgili ilanda belirtilir. Mezuniyet bilgileriniz ve sınav sonucunuzun başvurulan alım tarafından kabul edildiğini resmî kılavuzdan doğrulayın."],
        ["Yaş ve diğer aday şartları", "Yaş hesabının hangi tarih esas alınarak yapıldığı dâhil, tüm kişisel koşullar ilan metninden kontrol edilmelidir. Önceki alım döneminin şartlarını yeni dönem için geçerli saymayın."],
        ["Sağlık ve doğrulama", "Sağlık değerlendirmesi ve kabul edilen belgeler için ilgili mevzuat ile güncel çağrı metnini esas alın; genel internet bilgisinden sağlık uygunluğu sonucu çıkarmayın. Emin olmadığınız bir koşulu yetkili başvuru birimine sorun."]
      ]
    }
  ];

  const categories = ["TSK", "MSÜ", "Subaylık", "Astsubaylık", "Jandarma", "Polislik", "Mülakat"];
  const sourceGuides = {
    TSK: [{ label: "MSB Personel Temin", url: "https://personeltemin.msb.gov.tr/" }],
    "MSÜ": [
      { label: "MSB Personel Temin", url: "https://personeltemin.msb.gov.tr/" },
      { label: "ÖSYM", url: "https://www.osym.gov.tr/" }
    ],
    Subaylık: [{ label: "MSB Personel Temin", url: "https://personeltemin.msb.gov.tr/" }],
    Astsubaylık: [
      { label: "MSB Personel Temin", url: "https://personeltemin.msb.gov.tr/" },
      { label: "Jandarma Genel Komutanlığı", url: "https://www.jandarma.gov.tr/" }
    ],
    Jandarma: [{ label: "Jandarma Genel Komutanlığı", url: "https://www.jandarma.gov.tr/" }],
    Polislik: [{ label: "Polis Akademisi Başkanlığı", url: "https://pa.edu.tr/" }],
    Mülakat: [
      { label: "MSB Personel Temin", url: "https://personeltemin.msb.gov.tr/" },
      { label: "Jandarma Genel Komutanlığı", url: "https://www.jandarma.gov.tr/" },
      { label: "Polis Akademisi Başkanlığı", url: "https://pa.edu.tr/" }
    ]
  };
  const storageKeys = {
    checklist: "askeriokullar.checklist.v1",
    events: "askeriokullar.events.v1",
    favorites: "askeriokullar.favorites.v1",
    studyPlan: "askeriokullar.study-plan.v1"
  };
  const backupStorageKeys = Object.values(storageKeys);
  const checklistItems = [
    "Başvuracağım dönemin güncel resmî kılavuzunu buldum.",
    "Yaş, eğitim ve diğer adaylık koşullarını kılavuzla karşılaştırdım.",
    "Sınav ve başvuru tarihlerimi kişisel takvimime ekledim.",
    "İstenen belgeler için kontrol listesi oluşturdum.",
    "Başvuru formundaki bilgileri belgelerimle karşılaştırdım.",
    "Başvuru tamamlandı kaydını veya numarasını sakladım.",
    "Sınav, çağrı ve sonuç duyurularını resmî kanallardan takip ediyorum."
  ];
  const interviewQuestions = [
    { topic: "Motivasyon", question: "Başvurduğunuz programı seçme nedeninizi kendi deneyimlerinizle nasıl açıklarsınız?", prompt: "Nedeninizi kısa bir örnekle destekleyin; ezberlenmiş sloganlar yerine kişisel motivasyonunuzu anlatın." },
    { topic: "Kendini tanıma", question: "Geliştirmeniz gerektiğini düşündüğünüz bir yönünüz nedir ve bunun üzerinde nasıl çalışıyorsunuz?", prompt: "Gerçekçi bir örnek, attığınız adım ve öğrendiğiniz sonucu birlikte ifade edin." },
    { topic: "Takım çalışması", question: "Bir ekip içinde anlaşmazlık yaşadığınızda çözüm bulmak için nasıl hareket edersiniz?", prompt: "Dinleme, ortak hedef belirleme ve kendi katkınızı açıklayan somut bir örnek seçin." },
    { topic: "Sorumluluk", question: "Üstlendiğiniz bir sorumluluğu zamanında tamamlamak için nasıl plan yaptınız?", prompt: "Öncelik, zaman planı ve sonuç üzerinden kendi deneyiminizi aktarın." },
    { topic: "Baskı altında karar", question: "Zaman baskısı altında karar vermeniz gereken bir durumu ve yaklaşımınızı anlatın.", prompt: "Durumu, değerlendirdiğiniz seçenekleri ve sonradan çıkardığınız dersi kısa tutun." },
    { topic: "İletişim", question: "Katılmadığınız bir görüşü saygılı ve yapıcı biçimde nasıl ifade edersiniz?", prompt: "Karşı tarafı dinleme, gerekçenizi net ifade etme ve çözüm arama biçiminizi açıklayın." },
    { topic: "Değerler", question: "Dürüstlük veya sorumluluk ilkenizi zor bir durumda nasıl uyguladınız?", prompt: "Mahrem bilgileri paylaşmadan, kendi davranış ve değerlendirmenize odaklanın." },
    { topic: "Öğrenme", question: "Yakın zamanda zorlandığınız bir konuyu öğrenmek için hangi adımları izlediniz?", prompt: "Kaynak seçimi, tekrar yöntemi ve ilerlemenizi nasıl değerlendirdiğinizi açıklayın." }
  ];

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
  const isValidDate = (value) => {
    if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const [year, month, day] = value.split("-").map(Number);
    if (year < 1000) return false;
    const date = new Date(Date.UTC(year, month - 1, day));
    return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
  };

  const readStorage = (key, fallback) => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : fallback;
    } catch (error) {
      console.error(`Kaydedilmiş site ayarı okunamadı (${key}).`, error);
      return fallback;
    }
  };

  const writeStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Site ayarı kaydedilemedi (${key}).`, error);
      return false;
    }
  };

  const header = (activeCategory = "all") => `
    <div class="topbar"><div class="container topbar-inner">
      <a href="./index.html" class="topbar-brand">Askeri Okullar Rehberlik Organizasyonu</a>
      <span>Özgün rehberler · Yerel araçlar · Reklamsız</span>
    </div></div>
    <header class="masthead"><div class="container masthead-inner">
      <a class="brand" href="./index.html" aria-label="Askeri Okullar ana sayfa">
        <span class="brand-mark" aria-hidden="true">AO</span>
        <span><strong>Askeri Okullar</strong><small>Rehberlik Organizasyonu</small></span>
      </a>
      <div class="header-actions">
        <a class="button button-outline" href="./index.html?favoriler=1#yazilar">Favoriler</a>
        <a class="button button-outline" href="./index.html#araclar">Aday araçları</a>
      </div>
    </div></header>
    <nav class="nav" aria-label="Ana menü"><div class="container nav-inner">
      <a href="./index.html" ${activeCategory === "all" ? 'aria-current="page"' : ""}>Anasayfa</a>
      ${categories.map((category) => `<a href="./index.html?kategori=${encodeURIComponent(category)}#yazilar" ${activeCategory === category ? 'aria-current="page"' : ""}>${escapeHtml(category)}</a>`).join("")}
    </div></nav>`;

  const footer = `
    <footer class="footer"><div class="container footer-inner">
      <a class="brand brand-footer" href="./index.html"><span class="brand-mark" aria-hidden="true">AO</span><span><strong>Askeri Okullar</strong><small>Bağımsız bilgilendirme ve hazırlık rehberi</small></span></a>
      <div class="footer-copy"><p>İçerikler genel bilgilendirme amaçlı, özgün hazırlanmış rehberlerdir. Başvuru, sınav ve sağlık koşulları için güncel resmî kılavuzları kontrol edin.</p><p>Bu sitede reklam betiği veya dış makale yönlendirmesi bulunmaz.</p></div>
      <span class="copyright">© ${new Date().getFullYear()} Askeri Okullar</span>
    </div></footer>`;

  const card = (article, favoriteIds) => `
    <article class="article-card">
      <a class="card-image" href="./index.html?yazi=${encodeURIComponent(article.id)}" aria-label="${escapeHtml(article.title)}">
        <img src="./images/${escapeHtml(article.image)}" alt="${escapeHtml(article.title)}" loading="lazy" decoding="async">
      </a>
      <button class="favorite-toggle" type="button" data-favorite="${escapeHtml(article.id)}" aria-pressed="${favoriteIds.includes(article.id)}" aria-label="${favoriteIds.includes(article.id) ? "Favorilerden çıkar" : "Favorilere ekle"}: ${escapeHtml(article.title)}">${favoriteIds.includes(article.id) ? "★" : "☆"}</button>
      <div class="card-copy">
        <div class="meta"><span>${escapeHtml(article.category)}</span><time>${escapeHtml(article.date)}</time></div>
        <h3><a href="./index.html?yazi=${encodeURIComponent(article.id)}">${escapeHtml(article.title)}</a></h3>
        <p>${escapeHtml(article.excerpt)}</p>
        <div class="card-actions"><a class="read-more" href="./index.html?yazi=${encodeURIComponent(article.id)}">Yazıyı oku <span aria-hidden="true">→</span></a><button class="print-link" type="button" data-print-article="${escapeHtml(article.id)}">Yazdır / PDF</button></div>
      </div>
    </article>`;

  const renderIndex = () => {
    const params = new URLSearchParams(location.search);
    const category = params.get("kategori") || "all";
    const search = (params.get("q") || "").trim();
    const favoritesOnly = params.get("favoriler") === "1";
    const featured = articles[0];
    const searchValue = escapeHtml(search);

    document.title = "Askeri Okullar | Aday Rehberleri ve Hazırlık Araçları";
    document.getElementById("app").innerHTML = `
      ${header(category)}
      <main>
        <section class="hero"><div class="container hero-layout">
          <div class="hero-copy">
            <span class="eyebrow">Adaylar için bağımsız rehber</span>
            <h1>Hedefine <span>bilgiyle</span> hazırlan.</h1>
            <p>Askerî okul ve kamu personeli başvurularını planlamak için özgün rehberler, kişisel kontrol listesi ve pratik hazırlık araçları.</p>
            <div class="hero-actions"><a class="button button-primary" href="#yazilar">Rehberleri keşfet</a><a class="button button-light" href="#araclar">Hazırlık araçları</a></div>
            <p class="hero-note">Reklamsız · Ücretsiz araçlar · Kişisel veriler cihazınızda kalır</p>
          </div>
          <a class="hero-image" href="./index.html?yazi=${encodeURIComponent(featured.id)}" aria-label="${escapeHtml(featured.title)}">
            <img src="./images/${escapeHtml(featured.image)}" alt="${escapeHtml(featured.title)}" fetchpriority="high">
            <span class="hero-image-label">GÜNCEL REHBER</span>
          </a>
        </div></section>
        <section class="section tools-section" id="araclar"><div class="container">
          <div class="section-heading"><div><span class="eyebrow">Planlı hazırlık</span><h2>Aday araçları</h2></div><p>Bilgiler tarayıcınızda saklanır; sunucuya gönderilmez.</p></div>
          <div class="tool-grid">
            <section class="tool-card" aria-labelledby="checklist-title">
              <span class="tool-number">01 / PLAN</span><h3 id="checklist-title">Başvuru kontrol listesi</h3>
              <p>Adımları tamamladıkça işaretleyin. İlerleme bu tarayıcıda saklanır.</p>
              <div id="checklist" class="checklist"></div>
              <div class="tool-foot"><span id="checklist-progress" aria-live="polite"></span><button class="text-button" type="button" id="reset-checklist">Listeyi sıfırla</button></div>
              <button class="print-link print-checklist" type="button" id="print-checklist">Kontrol listesini yazdır / PDF</button>
            </section>
            <section class="tool-card" aria-labelledby="net-title">
              <span class="tool-number">02 / DENEME</span><h3 id="net-title">Net hesaplayıcı</h3>
              <p>Deneme sonuçlarını girin. Bu araç resmî puan veya başarı sırası hesaplamaz.</p>
              <div class="net-controls"><label>Yanlış başına götürülen doğru
                <select id="penalty"><option value="4">4 yanlış = 1 doğru</option><option value="3">3 yanlış = 1 doğru</option><option value="0">Yanlış cezası yok</option></select>
              </label></div>
              <div class="net-table"><div class="net-row net-head"><span>Ders / test</span><span>Doğru</span><span>Yanlış</span><span>Net</span></div>
                ${["Türkçe", "Matematik", "Fen", "Sosyal"].map((subject, index) => `<label class="net-row"><span>${subject}</span><input aria-label="${subject} doğru" type="number" min="0" step="1" value="0" data-net="correct" data-index="${index}"><input aria-label="${subject} yanlış" type="number" min="0" step="1" value="0" data-net="wrong" data-index="${index}"><output data-net-output="${index}">0,00</output></label>`).join("")}
              </div><div class="net-total"><span>Toplam net</span><output id="total-net" aria-live="polite">0,00</output></div>
            </section>
            <section class="tool-card" aria-labelledby="calendar-title">
              <span class="tool-number">03 / TAKVİM</span><h3 id="calendar-title">Kişisel başvuru takvimi</h3>
              <p>Resmî duyurudan doğruladığınız tarihleri kendiniz ekleyin.</p>
              <form id="event-form" class="event-form">
                <label>Etkinlik adı<input name="title" maxlength="80" required placeholder="Örn. Başvuru kapanış tarihi"></label>
                <div class="event-form-row"><label>Tarih<input name="date" type="date" required></label><button class="button button-primary" type="submit">Ekle</button></div>
              </form>
              <p class="tool-footnote">Bu takvim resmî tarihleri otomatik çekmez. Tarihleri ilgili kurumun duyurusundan doğrulayın.</p>
              <ul id="event-list" class="event-list" aria-live="polite"></ul>
            </section>
            <section class="tool-card" aria-labelledby="study-plan-title">
              <span class="tool-number">04 / ÇALIŞMA</span><h3 id="study-plan-title">Kişisel çalışma planı</h3>
              <p>Sınav tarihine ve haftalık zamanına göre taslak plan oluşturun. İlerleme bu tarayıcıda saklanır.</p>
              <form id="study-plan-form" class="study-plan-form">
                <label>Hedef sınav tarihi<input name="examDate" type="date" required></label>
                <div class="event-form-row"><label>Haftalık saat<input name="hours" type="number" min="1" max="60" value="10" required></label><label>Haftalık oturum<input name="sessions" type="number" min="1" max="14" value="5" required></label></div>
                <button class="button button-primary" type="submit">Plan oluştur / güncelle</button>
              </form>
              <p class="tool-footnote">Plan genel bir çalışma taslağıdır; resmî sınav takvimi veya başarı garantisi değildir.</p>
              <div id="study-plan-output" class="study-plan-output" aria-live="polite"></div>
            </section>
            <section class="tool-card" aria-labelledby="interview-title">
              <span class="tool-number">05 / MÜLAKAT</span><h3 id="interview-title">Mülakat provası</h3>
              <p>Özgün pratik sorularını yanıtlayın. Yazdığınız yanıt cihazınıza kaydedilmez.</p>
              <div class="practice-question"><span id="interview-topic">Hazır mısınız?</span><p id="interview-question">Bir soru seçip kendinize süre tutarak yanıtlayın.</p></div>
              <button class="button button-outline" type="button" id="next-question">Soru getir</button>
              <label class="answer-label" for="interview-answer">Kendi yanıt taslağınız<textarea id="interview-answer" rows="4" maxlength="1200" placeholder="Yanıtınızı yalnızca kendiniz göreceksiniz; sayfa kapatılınca saklanmaz."></textarea></label>
              <div class="rating-list">
                <label>Netlik <input type="range" min="1" max="5" value="3" data-rating="clarity"></label>
                <label>Somut örnek <input type="range" min="1" max="5" value="3" data-rating="example"></label>
                <label>Samimiyet <input type="range" min="1" max="5" value="3" data-rating="honesty"></label>
              </div>
              <p id="interview-score" class="tool-footnote" aria-live="polite">Öz değerlendirme: 3/5 · Resmî değerlendirme değildir.</p>
            </section>
            <section class="tool-card" aria-labelledby="backup-title">
              <span class="tool-number">06 / GİZLİLİK</span><h3 id="backup-title">Yedekleme ve ayarlar</h3>
              <p>Favorileri, kontrol listesini, takvimi ve çalışma planını JSON dosyasıyla dışa aktarın veya geri yükleyin.</p>
              <div class="backup-actions"><button class="button button-primary" type="button" id="export-data">Yedeği indir</button><button class="button button-outline" type="button" id="import-data">Yedeği geri yükle</button></div>
              <input class="visually-hidden" type="file" id="import-file" accept="application/json,.json">
              <p id="backup-status" class="tool-footnote" aria-live="polite">Veriler yalnızca bu tarayıcıda tutulur; düzenli yedek alın.</p>
              <button class="text-button privacy-reset" type="button" id="clear-data">Bu cihazdaki tüm verileri sil</button>
            </section>
          </div>
        </div></section>
        <section class="section articles-section" id="yazilar"><div class="container">
          <div class="section-heading"><div><span class="eyebrow">Kütüphane</span><h2>${favoritesOnly ? "Favori rehberler" : searchValue ? "Arama sonuçları" : category === "all" ? "Son rehberler" : `${escapeHtml(category)} rehberleri`}</h2></div><span class="result-count" id="result-count"></span></div>
          <form id="search-form" class="search-form" role="search" action="./index.html" method="get">
            <label class="visually-hidden" for="site-search">Rehberlerde ara</label><input id="site-search" name="q" type="search" value="${searchValue}" placeholder="Başlık, konu veya kategori ara…" autocomplete="off">
            ${category !== "all" ? `<input type="hidden" name="kategori" value="${escapeHtml(category)}">` : ""}
            ${favoritesOnly ? '<input type="hidden" name="favoriler" value="1">' : ""}
            <button type="submit" class="button button-primary">Ara</button>
            ${search || category !== "all" ? '<a class="clear-search" href="./index.html#yazilar">Temizle</a>' : ""}
          </form>
          <div class="category-pills" aria-label="Kategori filtresi"><a href="./index.html#yazilar" ${category === "all" && !favoritesOnly ? 'aria-current="page"' : ""}>Tümü</a>${categories.map((item) => `<a href="./index.html?kategori=${encodeURIComponent(item)}#yazilar" ${category === item && !favoritesOnly ? 'aria-current="page"' : ""}>${escapeHtml(item)}</a>`).join("")}<a href="./index.html?favoriler=1#yazilar" ${favoritesOnly ? 'aria-current="page"' : ""}>★ Favoriler</a></div>
          <div class="article-grid" id="article-grid"></div>
          <p class="empty-state" id="empty-state" hidden>Bu ölçütlerle eşleşen rehber bulunamadı. Aramanızı veya kategoriyi değiştirebilirsiniz.</p>
        </div></section>
      </main>
      ${footer}`;

    const normalizedSearch = search.toLocaleLowerCase("tr-TR");
    const favoriteIds = readStorage(storageKeys.favorites, []).filter((id) => articles.some((article) => article.id === id));
    const filtered = articles.filter((article) => {
      const categoryMatch = category === "all" || article.category === category;
      const searchMatch = !normalizedSearch || `${article.title} ${article.category} ${article.excerpt} ${article.sections.map((section) => section.join(" ")).join(" ")}`.toLocaleLowerCase("tr-TR").includes(normalizedSearch);
      const favoriteMatch = !favoritesOnly || favoriteIds.includes(article.id);
      return categoryMatch && searchMatch && favoriteMatch;
    });
    document.getElementById("article-grid").innerHTML = filtered.map((article) => card(article, favoriteIds)).join("");
    document.getElementById("result-count").textContent = `${filtered.length} rehber`;
    document.getElementById("empty-state").hidden = filtered.length !== 0;
    initializeTools();
    initializeLibraryControls(favoriteIds);
  };

  function initializeLibraryControls(initialFavorites) {
    let favorites = initialFavorites;
    const grid = document.getElementById("article-grid");
    grid.addEventListener("click", (event) => {
      const favoriteButton = event.target.closest("[data-favorite]");
      if (favoriteButton) {
        const id = favoriteButton.dataset.favorite;
        favorites = favorites.includes(id) ? favorites.filter((favorite) => favorite !== id) : [...favorites, id];
        if (writeStorage(storageKeys.favorites, favorites)) renderIndex();
        return;
      }

      const printButton = event.target.closest("[data-print-article]");
      if (printButton) {
        const url = new URL("./index.html", location.href);
        url.searchParams.set("yazi", printButton.dataset.printArticle);
        url.searchParams.set("print", "1");
        location.href = url.href;
      }
    });
  }

  const renderArticle = (article) => {
    document.title = `${article.title} | Askeri Okullar`;
    const favoriteIds = readStorage(storageKeys.favorites, []);
    const sources = sourceGuides[article.category] || [];
    const isFavorite = favoriteIds.includes(article.id);
    document.getElementById("app").innerHTML = `
      ${header(article.category)}
      <main class="article-page"><div class="container article-container">
        <nav class="breadcrumbs" aria-label="Sayfa yolu"><a href="./index.html">Anasayfa</a><span aria-hidden="true">/</span><a href="./index.html?kategori=${encodeURIComponent(article.category)}#yazilar">${escapeHtml(article.category)}</a><span aria-hidden="true">/</span><span>${escapeHtml(article.title)}</span></nav>
        <article class="full-article">
          <img class="article-cover" src="./images/${escapeHtml(article.image)}" alt="${escapeHtml(article.title)}">
          <div class="article-body">
            <div class="meta"><span>${escapeHtml(article.category)}</span><time>Yayın: ${escapeHtml(article.date)}</time><time>İçerik kontrolü: 30.10.2026</time></div>
            <h1>${escapeHtml(article.title)}</h1><p class="article-lead">${escapeHtml(article.excerpt)}</p>
            ${article.sections.map(([heading, text]) => `<section><h2>${escapeHtml(heading)}</h2><p>${escapeHtml(text)}</p></section>`).join("")}
            <aside class="source-note"><strong>Güncellik ve kaynak takibi</strong><p>Bu özgün içerik resmî kurum duyurusu veya mevzuat metni değildir. Yayın tarihi ${escapeHtml(article.date)}; içerik kontrol tarihi 30.10.2026.</p><p>Başvuru, sınav, puanlama ve sağlık koşulları değişebilir. Kesin bilgi için güncel resmî kılavuz ve duyuruları kontrol edin:</p><ul>${sources.map((source) => `<li><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)} (resmî kaynak, yeni sekme)</a></li>`).join("")}</ul></aside>
            <div class="article-actions"><a class="button button-outline back-link" href="./index.html?kategori=${encodeURIComponent(article.category)}#yazilar">← ${escapeHtml(article.category)} rehberlerine dön</a><button class="button button-outline" type="button" data-article-favorite="${escapeHtml(article.id)}" aria-pressed="${isFavorite}">${isFavorite ? "★ Favorilerden çıkar" : "☆ Favorilere ekle"}</button><button class="button button-primary" type="button" id="print-article">Yazdır / PDF kaydet</button></div>
          </div>
        </article>
      </div></main>
      ${footer}`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.content = article.excerpt;
    const oldStructuredData = document.getElementById("article-structured-data");
    if (oldStructuredData) oldStructuredData.remove();
    const structuredData = document.createElement("script");
    structuredData.id = "article-structured-data";
    structuredData.type = "application/ld+json";
    const [publishedDay, publishedMonth, publishedYear] = article.date.split(".");
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
      datePublished: `${publishedYear}-${publishedMonth}-${publishedDay}`,
      dateModified: "2026-10-30",
      image: new URL(`./images/${article.image}`, location.href).href,
      author: { "@type": "Organization", name: "Askeri Okullar" },
      publisher: { "@type": "Organization", name: "Askeri Okullar" }
    });
    document.head.append(structuredData);
    document.querySelector("[data-article-favorite]").addEventListener("click", (event) => {
      const button = event.currentTarget;
      const favorites = readStorage(storageKeys.favorites, []);
      const next = favorites.includes(article.id)
        ? favorites.filter((id) => id !== article.id)
        : [...favorites, article.id];
      if (!writeStorage(storageKeys.favorites, next)) return;
      const active = next.includes(article.id);
      button.setAttribute("aria-pressed", String(active));
      button.textContent = active ? "★ Favorilerden çıkar" : "☆ Favorilere ekle";
    });
    document.getElementById("print-article").addEventListener("click", () => window.print());
    if (new URLSearchParams(location.search).get("print") === "1") {
      window.addEventListener("load", () => window.print(), { once: true });
    }
  };

  function initializeTools() {
    const checklistRoot = document.getElementById("checklist");
    const savedChecklist = readStorage(storageKeys.checklist, {});
    const progress = document.getElementById("checklist-progress");
    const renderChecklist = () => {
      checklistRoot.innerHTML = checklistItems.map((item, index) => `<label class="check-item"><input type="checkbox" data-check="${index}" ${savedChecklist[index] ? "checked" : ""}><span>${escapeHtml(item)}</span></label>`).join("");
      const completed = checklistItems.filter((_, index) => savedChecklist[index]).length;
      progress.textContent = `${completed}/${checklistItems.length} adım tamamlandı`;
    };
    renderChecklist();
    checklistRoot.addEventListener("change", (event) => {
      const checkbox = event.target.closest("[data-check]");
      if (!checkbox) return;
      savedChecklist[checkbox.dataset.check] = checkbox.checked;
      writeStorage(storageKeys.checklist, savedChecklist);
      renderChecklist();
    });
    document.getElementById("reset-checklist").addEventListener("click", () => {
      Object.keys(savedChecklist).forEach((key) => delete savedChecklist[key]);
      writeStorage(storageKeys.checklist, savedChecklist);
      renderChecklist();
    });
    document.getElementById("print-checklist").addEventListener("click", () => {
      const restorePrintMode = () => document.body.classList.remove("print-checklist-mode");
      window.addEventListener("afterprint", restorePrintMode, { once: true });
      document.body.classList.add("print-checklist-mode");
      window.print();
    });

    const penalty = document.getElementById("penalty");
    const updateNets = () => {
      const factor = Number(penalty.value);
      let total = 0;
      for (let index = 0; index < 4; index += 1) {
        const correct = Math.max(0, Number(document.querySelector(`[data-net="correct"][data-index="${index}"]`).value) || 0);
        const wrong = Math.max(0, Number(document.querySelector(`[data-net="wrong"][data-index="${index}"]`).value) || 0);
        const net = factor === 0 ? correct : correct - wrong / factor;
        total += net;
        document.querySelector(`[data-net-output="${index}"]`).textContent = net.toFixed(2).replace(".", ",");
      }
      document.getElementById("total-net").textContent = total.toFixed(2).replace(".", ",");
    };
    document.querySelector(".net-table").addEventListener("input", updateNets);
    penalty.addEventListener("change", updateNets);
    updateNets();

    const eventForm = document.getElementById("event-form");
    const eventList = document.getElementById("event-list");
    const events = readStorage(storageKeys.events, []);
    const renderEvents = () => {
      events.sort((left, right) => left.date.localeCompare(right.date));
      eventList.innerHTML = events.length ? events.map((item, index) => `<li><span><time datetime="${escapeHtml(item.date)}">${new Date(`${item.date}T12:00:00`).toLocaleDateString("tr-TR")}</time><strong>${escapeHtml(item.title)}</strong></span><button class="icon-button" type="button" data-remove-event="${index}" aria-label="${escapeHtml(item.title)} etkinliğini sil">Sil</button></li>`).join("") : '<li class="event-empty">Henüz tarih eklemediniz.</li>';
    };
    renderEvents();
    eventForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(eventForm);
      events.push({ title: String(formData.get("title")).trim(), date: String(formData.get("date")) });
      if (writeStorage(storageKeys.events, events)) {
        eventForm.reset();
        renderEvents();
      }
    });
    eventList.addEventListener("click", (event) => {
      const removeButton = event.target.closest("[data-remove-event]");
      if (!removeButton) return;
      events.splice(Number(removeButton.dataset.removeEvent), 1);
      writeStorage(storageKeys.events, events);
      renderEvents();
    });

    const studyForm = document.getElementById("study-plan-form");
    const studyOutput = document.getElementById("study-plan-output");
    let studyPlan = readStorage(storageKeys.studyPlan, null);
    if (studyPlan && isValidDate(studyPlan.examDate) && Number.isInteger(studyPlan.hours) && studyPlan.hours >= 1 && studyPlan.hours <= 60 && Number.isInteger(studyPlan.sessions) && studyPlan.sessions >= 1 && studyPlan.sessions <= 14) {
      studyForm.elements.examDate.value = studyPlan.examDate;
      studyForm.elements.hours.value = studyPlan.hours;
      studyForm.elements.sessions.value = studyPlan.sessions;
      if (!studyPlan.completed || typeof studyPlan.completed !== "object" || Array.isArray(studyPlan.completed)) studyPlan.completed = {};
    } else {
      studyPlan = null;
    }

    const renderStudyPlan = () => {
      if (!studyPlan) {
        studyOutput.innerHTML = '<p class="event-empty">Sınav tarihinizi girerek başlayın.</p>';
        return;
      }
      const today = new Date();
      const [examYear, examMonth, examDay] = studyPlan.examDate.split("-").map(Number);
      const daysRemaining = Math.max(0, Math.round((Date.UTC(examYear, examMonth - 1, examDay) - Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())) / 86400000));
      const weeks = Math.min(16, Math.max(1, Math.ceil(daysRemaining / 7)));
      const focuses = [
        "Mevcut seviyeni belirle ve temel konuları gözden geçir.",
        "Eksik olduğun konulardan planlı soru çöz; yanlışlarını sınıflandır.",
        "Kısa tekrar oturumları yap ve süre tutarak soru pratiği ekle.",
        "Bir deneme uygula; sonuçları konu konu analiz et.",
        "Önceki haftanın zorlandığın alanlarını yeniden çalış.",
        "Karma test çöz; yanlış defterini güncelle."
      ];
      const completedWeeks = studyPlan.completed || {};
      studyOutput.innerHTML = `
        <p class="plan-summary"><strong>${daysRemaining} gün</strong> kaldı · ${studyPlan.hours} saat / ${studyPlan.sessions} oturum haftalık hedef</p>
        ${daysRemaining > 112 ? '<p class="tool-footnote">Plan ilk 16 haftayı gösterir; sınav yaklaşınca yeni hedef tarihiyle güncelleyin.</p>' : ""}
        <div class="plan-weeks">${Array.from({ length: weeks }, (_, index) => {
          const week = index + 1;
          const checked = Boolean(completedWeeks[week]);
          const focus = focuses[(week - 1) % focuses.length];
          return `<label class="plan-week${checked ? " is-complete" : ""}"><input type="checkbox" data-plan-week="${week}" ${checked ? "checked" : ""}><span><strong>Hafta ${week}</strong><small>${studyPlan.sessions} oturum · yaklaşık ${(studyPlan.hours / studyPlan.sessions).toFixed(1).replace(".", ",")} saat/oturum</small><span>${focus}</span></span></label>`;
        }).join("")}</div>`;
    };
    renderStudyPlan();
    studyForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!studyForm.reportValidity()) return;
      const formData = new FormData(studyForm);
      const examDate = String(formData.get("examDate"));
      const today = new Date();
      const todayDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
      if (examDate <= todayDate) {
        studyOutput.innerHTML = '<p class="validation-message" role="alert">Lütfen bugünden sonraki bir sınav tarihi seçin.</p>';
        return;
      }
      studyPlan = {
        examDate,
        hours: Number(formData.get("hours")),
        sessions: Number(formData.get("sessions")),
        completed: {}
      };
      if (writeStorage(storageKeys.studyPlan, studyPlan)) renderStudyPlan();
    });
    studyOutput.addEventListener("change", (event) => {
      const weekCheckbox = event.target.closest("[data-plan-week]");
      if (!weekCheckbox || !studyPlan) return;
      studyPlan.completed = studyPlan.completed || {};
      studyPlan.completed[weekCheckbox.dataset.planWeek] = weekCheckbox.checked;
      writeStorage(storageKeys.studyPlan, studyPlan);
      renderStudyPlan();
    });

    const questionTopic = document.getElementById("interview-topic");
    const questionText = document.getElementById("interview-question");
    let previousQuestion = -1;
    document.getElementById("next-question").addEventListener("click", () => {
      const available = interviewQuestions.map((_, index) => index).filter((index) => index !== previousQuestion);
      previousQuestion = available[Math.floor(Math.random() * available.length)];
      const question = interviewQuestions[previousQuestion];
      questionTopic.textContent = question.topic;
      questionText.textContent = `${question.question} ${question.prompt}`;
      document.getElementById("interview-answer").value = "";
      document.getElementById("interview-answer").focus();
    });
    const ratings = Array.from(document.querySelectorAll("[data-rating]"));
    const updateInterviewScore = () => {
      const average = ratings.reduce((sum, rating) => sum + Number(rating.value), 0) / ratings.length;
      document.getElementById("interview-score").textContent = `Öz değerlendirme: ${average.toFixed(1).replace(".", ",")}/5 · Resmî değerlendirme değildir.`;
    };
    ratings.forEach((rating) => rating.addEventListener("input", updateInterviewScore));

    const backupStatus = document.getElementById("backup-status");
    document.getElementById("export-data").addEventListener("click", () => {
      const data = Object.fromEntries(backupStorageKeys.map((key) => [key, readStorage(key, key === storageKeys.favorites ? [] : {})]));
      const backup = { app: "askeriokullar", version: 1, savedAt: new Date().toISOString(), data };
      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
      const downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `askeriokullar-yedek-${new Date().toISOString().slice(0, 10)}.json`;
      link.click();
      window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
      backupStatus.textContent = "Yedek dosyası indirildi.";
    });

    const importInput = document.getElementById("import-file");
    document.getElementById("import-data").addEventListener("click", () => importInput.click());
    importInput.addEventListener("change", async () => {
      const [file] = importInput.files || [];
      if (!file) return;
      try {
        const backup = JSON.parse(await file.text());
        const data = backup && backup.data;
        if (backup.app !== "askeriokullar" || backup.version !== 1 || !data || typeof data !== "object") {
          throw new Error("Bu dosya desteklenen Askeri Okullar yedeği değil.");
        }
        const favorites = data[storageKeys.favorites];
        const checklist = data[storageKeys.checklist];
        const savedEvents = data[storageKeys.events];
        const savedPlan = data[storageKeys.studyPlan];
        if (!Array.isArray(favorites) || favorites.some((id) => !articles.some((article) => article.id === id))) {
          throw new Error("Yedekte geçersiz favori kayıtları var.");
        }
        if (!checklist || typeof checklist !== "object" || Array.isArray(checklist) || Object.entries(checklist).some(([key, value]) => !/^\d+$/.test(key) || Number(key) >= checklistItems.length || typeof value !== "boolean")) {
          throw new Error("Yedekte geçersiz kontrol listesi verisi var.");
        }
        if (!Array.isArray(savedEvents) || savedEvents.length > 250 || savedEvents.some((item) => !item || typeof item.title !== "string" || !item.title.trim() || item.title.length > 80 || !isValidDate(item.date))) {
          throw new Error("Yedekte geçersiz takvim kaydı var.");
        }
        if (savedPlan !== null && (!savedPlan || !isValidDate(savedPlan.examDate) || !Number.isInteger(savedPlan.hours) || savedPlan.hours < 1 || savedPlan.hours > 60 || !Number.isInteger(savedPlan.sessions) || savedPlan.sessions < 1 || savedPlan.sessions > 14 || !savedPlan.completed || typeof savedPlan.completed !== "object" || Array.isArray(savedPlan.completed) || Object.entries(savedPlan.completed).some(([week, complete]) => !/^\d+$/.test(week) || Number(week) < 1 || Number(week) > 16 || typeof complete !== "boolean"))) {
          throw new Error("Yedekte geçersiz çalışma planı var.");
        }
        for (const key of backupStorageKeys) {
          if (!writeStorage(key, data[key])) {
            throw new Error("Yedek tarayıcıya kaydedilemedi. Depolama alanınızı kontrol edin.");
          }
        }
        backupStatus.textContent = "Yedek geri yüklendi; sayfa yenileniyor.";
        window.setTimeout(() => location.reload(), 500);
      } catch (error) {
        console.error("Yedek içe aktarılamadı.", error);
        backupStatus.textContent = error instanceof SyntaxError ? "Dosya geçerli bir JSON yedeği değil." : error.message;
      } finally {
        importInput.value = "";
      }
    });

    document.getElementById("clear-data").addEventListener("click", () => {
      if (!window.confirm("Bu tarayıcıdaki favoriler, kontrol listesi, çalışma planı ve kişisel takvim silinsin mi?")) return;
      try {
        for (const key of backupStorageKeys) localStorage.removeItem(key);
        backupStatus.textContent = "Bu cihazdaki site verileri silindi.";
      } catch (error) {
        console.error("Site verileri silinemedi.", error);
        backupStatus.textContent = "Site verileri silinemedi. Tarayıcı depolama izinlerini kontrol edin.";
        return;
      }
      window.setTimeout(() => location.reload(), 300);
    });
  }

  const articleId = new URLSearchParams(location.search).get("yazi");
  const article = articles.find((item) => item.id === articleId);
  if (article) {
    renderArticle(article);
  } else {
    renderIndex();
  }
})();
