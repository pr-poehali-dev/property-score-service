import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [economic, setEconomic] = useState([60]);
  const [social, setSocial] = useState([50]);
  const [organizational, setOrganizational] = useState([70]);

  const totalScore = Math.round((economic[0] + social[0] + organizational[0]) / 3);

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-accent';
    if (score >= 50) return 'text-yellow-600';
    return 'text-destructive';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 70) return 'Высокий потенциал';
    if (score >= 50) return 'Средний потенциал';
    return 'Требует доработки';
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg">
              <Icon name="Building2" className="text-primary-foreground" size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Real Estate Scoring Platform</h1>
              <p className="text-sm text-muted-foreground">Система оценки проектов недвижимости</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-2">Калькулятор скоринга</h2>
              <p className="text-muted-foreground">
                Оцените потенциал вашего проекта по ключевым показателям
              </p>
            </div>

            <Card className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Icon name="TrendingUp" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Экономические показатели</h3>
                      <p className="text-sm text-muted-foreground">ROI, срок окупаемости, рентабельность</p>
                    </div>
                  </div>
                  <span className="text-2xl font-semibold text-primary">{economic[0]}</span>
                </div>
                <Slider
                  value={economic}
                  onValueChange={setEconomic}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-lg">
                      <Icon name="Users" className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Социальные показатели</h3>
                      <p className="text-sm text-muted-foreground">Востребованность, демография, инфраструктура</p>
                    </div>
                  </div>
                  <span className="text-2xl font-semibold text-secondary">{social[0]}</span>
                </div>
                <Slider
                  value={social}
                  onValueChange={setSocial}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-accent/10 p-2 rounded-lg">
                      <Icon name="FileCheck" className="text-accent" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Организационные показатели</h3>
                      <p className="text-sm text-muted-foreground">Команда, сроки, риски</p>
                    </div>
                  </div>
                  <span className="text-2xl font-semibold text-accent">{organizational[0]}</span>
                </div>
                <Slider
                  value={organizational}
                  onValueChange={setOrganizational}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Icon name="Info" size={20} className="text-primary" />
                Как интерпретировать результаты
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Badge className="bg-accent text-accent-foreground">70-100</Badge>
                  <p>Высокий потенциал — проект готов к реализации</p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="secondary">50-69</Badge>
                  <p>Средний потенциал — требуется оптимизация</p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="destructive">0-49</Badge>
                  <p>Низкий потенциал — необходима серьезная доработка</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-foreground/20 rounded-full">
                  <Icon name="Award" size={40} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm opacity-90 mb-2">Итоговая оценка проекта</p>
                  <div className={`text-7xl font-bold ${totalScore >= 70 ? 'text-white' : totalScore >= 50 ? 'text-yellow-200' : 'text-red-200'}`}>
                    {totalScore}
                  </div>
                  <p className="text-xl font-semibold mt-2">{getScoreLabel(totalScore)}</p>
                </div>
                <Progress value={totalScore} className="h-2 bg-primary-foreground/20" />
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="font-semibold text-foreground text-lg">Детализация по критериям</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">Экономика</span>
                    <span className={`font-semibold ${getScoreColor(economic[0])}`}>{economic[0]}%</span>
                  </div>
                  <Progress value={economic[0]} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">Социальные факторы</span>
                    <span className={`font-semibold ${getScoreColor(social[0])}`}>{social[0]}%</span>
                  </div>
                  <Progress value={social[0]} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">Организация</span>
                    <span className={`font-semibold ${getScoreColor(organizational[0])}`}>{organizational[0]}%</span>
                  </div>
                  <Progress value={organizational[0]} className="h-2" />
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="font-semibold text-foreground text-lg flex items-center gap-2">
                <Icon name="Target" size={20} className="text-primary" />
                Рекомендации
              </h3>
              <div className="space-y-3">
                {economic[0] < 70 && (
                  <div className="flex gap-3 p-3 bg-muted rounded-lg">
                    <Icon name="AlertCircle" size={20} className="text-destructive flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-foreground">Улучшите экономические показатели</p>
                      <p className="text-muted-foreground">Пересмотрите финансовую модель проекта</p>
                    </div>
                  </div>
                )}
                {social[0] < 70 && (
                  <div className="flex gap-3 p-3 bg-muted rounded-lg">
                    <Icon name="AlertCircle" size={20} className="text-destructive flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-foreground">Усильте социальную составляющую</p>
                      <p className="text-muted-foreground">Проанализируйте целевую аудиторию и спрос</p>
                    </div>
                  </div>
                )}
                {organizational[0] < 70 && (
                  <div className="flex gap-3 p-3 bg-muted rounded-lg">
                    <Icon name="AlertCircle" size={20} className="text-destructive flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-foreground">Оптимизируйте организацию</p>
                      <p className="text-muted-foreground">Проработайте риски и сроки реализации</p>
                    </div>
                  </div>
                )}
                {totalScore >= 70 && (
                  <div className="flex gap-3 p-3 bg-accent/10 rounded-lg">
                    <Icon name="CheckCircle2" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-foreground">Проект готов к реализации</p>
                      <p className="text-muted-foreground">Все показатели на высоком уровне</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            <div className="flex gap-3">
              <Button className="flex-1" size="lg">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать отчет
              </Button>
              <Button variant="outline" className="flex-1" size="lg">
                <Icon name="Save" size={20} className="mr-2" />
                Сохранить проект
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <Card className="p-6 text-center space-y-3 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto">
              <Icon name="BarChart3" className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-foreground">Методология оценки</h3>
            <p className="text-sm text-muted-foreground">
              Комплексный анализ на основе проверенных методик оценки недвижимости
            </p>
          </Card>

          <Card className="p-6 text-center space-y-3 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mx-auto">
              <Icon name="Database" className="text-secondary" size={24} />
            </div>
            <h3 className="font-semibold text-foreground">База проектов</h3>
            <p className="text-sm text-muted-foreground">
              Сохраняйте и сравнивайте результаты оценки различных проектов
            </p>
          </Card>

          <Card className="p-6 text-center space-y-3 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mx-auto">
              <Icon name="FileText" className="text-accent" size={24} />
            </div>
            <h3 className="font-semibold text-foreground">Отчеты и аналитика</h3>
            <p className="text-sm text-muted-foreground">
              Формируйте подробные отчеты для презентации инвесторам
            </p>
          </Card>
        </div>
      </main>

      <footer className="mt-16 border-t bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Real Estate Scoring Platform. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
              <a href="#" className="hover:text-primary transition-colors">Методология</a>
              <a href="#" className="hover:text-primary transition-colors">О платформе</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
