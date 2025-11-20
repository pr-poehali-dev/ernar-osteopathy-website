import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const { toast } = useToast();

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения записи.",
    });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const timeSlots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">Ернар Советович</div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-secondary transition-colors font-medium">Главная</button>
              <button onClick={() => scrollToSection('method')} className="text-foreground hover:text-secondary transition-colors font-medium">Методика</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-secondary transition-colors font-medium">Сообщество</button>
              <button onClick={() => scrollToSection('prices')} className="text-foreground hover:text-secondary transition-colors font-medium">Цены</button>
              <button onClick={() => scrollToSection('booking')} className="text-foreground hover:text-secondary transition-colors font-medium">Запись</button>
            </div>
            <Button onClick={() => scrollToSection('booking')} className="hidden md:inline-flex">
              Записаться
            </Button>
          </div>
        </nav>
      </header>

      <section id="hero" className="relative pt-32 pb-20 px-6 min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/161050fa-4e14-4c34-9375-48d73cf852de/files/09695e79-d046-409c-bbe0-6ec511b73013.jpg" 
            alt="Фон" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
                Ернар Советович
              </h1>
              <p className="text-3xl font-bold text-accent mb-4">Биопрактик • Остеопат</p>
              <p className="text-2xl text-foreground font-semibold mb-6 leading-relaxed">
                Моя авторская методика биодинамики помогает там, где медицина бессильна
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('booking')} className="text-lg bg-accent hover:bg-accent/90">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на приём
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('method')} className="border-2 border-secondary text-foreground hover:bg-secondary/10">
                  Узнать о методике
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/161050fa-4e14-4c34-9375-48d73cf852de/files/09695e79-d046-409c-bbe0-6ec511b73013.jpg" 
                alt="Ернар Советович" 
                className="rounded-2xl shadow-2xl w-full border-4 border-secondary"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="method" className="py-20 px-6 bg-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">Авторская методика биодинамики</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-foreground font-semibold">Помогает там, где медицина бессильна</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white hover:shadow-xl transition-shadow border-l-4 border-accent">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Методика включает:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-accent mt-1 flex-shrink-0" size={24} />
                    <span>Остеопатию</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-accent mt-1 flex-shrink-0" size={24} />
                    <span>Висцеральный массаж</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-accent mt-1 flex-shrink-0" size={24} />
                    <span>Точечное воздействие (восточная медицина)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-accent mt-1 flex-shrink-0" size={24} />
                    <span>Звуковую терапию</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-l-4 border-secondary">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Что даёт биодинамика:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <Icon name="Sparkles" className="text-secondary mt-1 flex-shrink-0" size={24} />
                    <span>Устраняет хронические боли</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Sparkles" className="text-secondary mt-1 flex-shrink-0" size={24} />
                    <span>Восстанавливает баланс организма</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Sparkles" className="text-secondary mt-1 flex-shrink-0" size={24} />
                    <span>Открывает энергетические каналы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Sparkles" className="text-secondary mt-1 flex-shrink-0" size={24} />
                    <span>Возвращает радость жизни</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">Как проходит сеанс?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="mx-auto mb-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Search" size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Диагностика</h3>
                  <p className="text-muted-foreground">Комплексная оценка состояния</p>
                </div>
                <div>
                  <div className="mx-auto mb-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Длительность</h3>
                  <p className="text-muted-foreground">1 час</p>
                </div>
                <div>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="TrendingUp" size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Результаты</h3>
                  <p className="text-muted-foreground">После 1–2 сеансов</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">Присоединяйтесь к сообществу</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-accent">
              <CardHeader>
                <div className="mb-4 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="MessageCircle" size={28} className="text-accent" />
                </div>
                <CardTitle className="text-xl">WhatsApp сообщество</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Делюсь важной и полезной информацией. Все скидки, акции и бонусы — для подписчиков первыми!
                </CardDescription>
                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                  <a href="https://chat.whatsapp.com/JdS7CipprOuGoFpzuhZeEa" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Присоединиться
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-primary">
              <CardHeader>
                <div className="mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Send" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Telegram канал</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Полезные советы, лайфхаки для здоровья и эксклюзивный контент о биодинамике.
                </CardDescription>
                <Button asChild variant="outline" className="w-full border-2 border-primary hover:bg-primary/10">
                  <a href="https://t.me/yernarpotok" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" className="mr-2" size={20} />
                    Подписаться
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">Услуги</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Activity" size={28} className="text-secondary" />
                </div>
                <CardTitle>Остеопатическая диагностика</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Комплексная оценка состояния организма с помощью мануальных техник. 
                  Выявление первопричин нарушений и составление индивидуального плана лечения.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Bone" size={28} className="text-secondary" />
                </div>
                <CardTitle>Структуральная остеопатия</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Работа с опорно-двигательным аппаратом: позвоночник, суставы, мышцы и связки. 
                  Устранение болей в спине, шее, конечностях.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="HeartPulse" size={28} className="text-secondary" />
                </div>
                <CardTitle>Висцеральная остеопатия</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Коррекция положения и функции внутренних органов. 
                  Нормализация работы пищеварительной, дыхательной и других систем.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Brain" size={28} className="text-secondary" />
                </div>
                <CardTitle>Краниосакральная терапия</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Мягкое воздействие на черепные кости и крестец. 
                  Помогает при головных болях, стрессе, нарушениях сна.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Baby" size={28} className="text-secondary" />
                </div>
                <CardTitle>Детская остеопатия</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Безопасная и эффективная помощь детям с рождения. 
                  Коррекция последствий родовых травм, задержки развития.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={28} className="text-secondary" />
                </div>
                <CardTitle>Биодинамическая остеопатия</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Тонкие энергетические техники для глубокого восстановления. 
                  Активация внутренних ресурсов организма.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">Цены на услуги</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-accent">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-2xl">Первый сеанс</CardTitle>
                    <CardDescription className="mt-2 text-base">Диагностика + лечение (60 минут)</CardDescription>
                  </div>
                  <div className="text-4xl font-bold text-accent">20 000 ₸</div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-secondary shadow-md">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      Курс от 6 сеансов
                      <span className="text-sm bg-secondary text-foreground px-3 py-1 rounded-full font-semibold">Выгодно</span>
                    </CardTitle>
                    <CardDescription className="mt-2 text-base">15 000 ₸ за сеанс • Экономия 30 000 ₸</CardDescription>
                  </div>
                  <div className="text-4xl font-bold text-secondary">15 000 ₸</div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-secondary/5 rounded-lg">
            <p className="text-center text-muted-foreground">
              <Icon name="Info" className="inline mr-2" size={18} />
              Оплата принимается наличными и картой. Возможна рассрочка.
            </p>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">Запись на приём</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
            <p className="mt-6 text-muted-foreground text-lg">
              Заполните форму, и я свяжусь с вами для подтверждения записи
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input id="name" placeholder="Введите ваше имя" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@mail.com" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Выберите дату *</Label>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="time">Время приёма *</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime} required>
                        <SelectTrigger id="time">
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Тип приёма *</Label>
                      <Select required>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Выберите услугу" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="first">Первичная консультация</SelectItem>
                          <SelectItem value="repeat">Повторный приём</SelectItem>
                          <SelectItem value="child">Детский приём</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Комментарий</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Опишите ваши жалобы или вопросы"
                        className="h-24"
                      />
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ернар Советович</h3>
              <p className="text-primary-foreground/80">
                Остеопат • Биопрактик<br />
                Профессиональная помощь для вашего здоровья
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p className="flex items-start gap-2">
                  <Icon name="MapPin" size={18} className="mt-1 flex-shrink-0" />
                  <span>г. Алматы, ул. Нажимеденова 10/4<br />
                  Вход в «Хозяюшка», 5 кабинет</span>
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={18} />
                  WhatsApp сообщество
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Send" size={18} />
                  Telegram канал
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">График работы</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Пн-Пт: 09:00 - 18:00</p>
                <p>Сб: 10:00 - 16:00</p>
                <p>Вс: Выходной</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>© 2024 Ернар Советович. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;