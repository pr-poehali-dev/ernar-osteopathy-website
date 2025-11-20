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
              <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-secondary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-secondary transition-colors">Обо мне</button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-secondary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('prices')} className="text-foreground hover:text-secondary transition-colors">Цены</button>
              <button onClick={() => scrollToSection('booking')} className="text-foreground hover:text-secondary transition-colors">Запись</button>
            </div>
            <Button onClick={() => scrollToSection('booking')} className="hidden md:inline-flex">
              Записаться
            </Button>
          </div>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Ернар Советович
              </h1>
              <p className="text-2xl text-secondary font-semibold mb-4">Остеопат • Биопрактик</p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Профессиональная остеопатическая помощь для восстановления здоровья и улучшения качества жизни. 
                Индивидуальный подход к каждому пациенту.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('booking')} className="text-lg">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на приём
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('about')}>
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/161050fa-4e14-4c34-9375-48d73cf852de/files/09695e79-d046-409c-bbe0-6ec511b73013.jpg" 
                alt="Остеопат Ернар Советович" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">Обо мне</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed animate-fade-in">
            <p>
              Остеопатия — это целостный подход к диагностике и лечению, направленный на восстановление 
              естественного баланса организма. Я работаю с пациентами всех возрастов, помогая им 
              справиться с различными проблемами опорно-двигательного аппарата и внутренних органов.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name="Award" size={32} className="text-secondary" />
                  </div>
                  <CardTitle>15+ лет</CardTitle>
                  <CardDescription>практического опыта</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name="Users" size={32} className="text-secondary" />
                  </div>
                  <CardTitle>2000+</CardTitle>
                  <CardDescription>пациентов</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name="Heart" size={32} className="text-secondary" />
                  </div>
                  <CardTitle>100%</CardTitle>
                  <CardDescription>индивидуальный подход</CardDescription>
                </CardHeader>
              </Card>
            </div>
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
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-xl">Первичная консультация</CardTitle>
                    <CardDescription className="mt-2">Диагностика и составление плана лечения (90 минут)</CardDescription>
                  </div>
                  <div className="text-3xl font-bold text-secondary">8 000 ₸</div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-xl">Повторный приём</CardTitle>
                    <CardDescription className="mt-2">Остеопатическое лечение (60 минут)</CardDescription>
                  </div>
                  <div className="text-3xl font-bold text-secondary">6 000 ₸</div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-xl">Детский приём</CardTitle>
                    <CardDescription className="mt-2">Остеопатия для детей 0-14 лет (45 минут)</CardDescription>
                  </div>
                  <div className="text-3xl font-bold text-secondary">5 000 ₸</div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-secondary">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      Абонемент на 5 сеансов
                      <span className="text-sm bg-secondary text-white px-3 py-1 rounded-full">-15%</span>
                    </CardTitle>
                    <CardDescription className="mt-2">Экономия 4 500 ₸</CardDescription>
                  </div>
                  <div className="text-3xl font-bold text-secondary">25 500 ₸</div>
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
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (777) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  ernar@osteopat.kz
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  г. Алматы, ул. Медицинская, 15
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
