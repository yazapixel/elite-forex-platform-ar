import { useState } from 'react';

export function App() {
  // Calculator state
  const [accountBalance, setAccountBalance] = useState<number>(10000);
  const [riskPercentage, setRiskPercentage] = useState<number>(1);
  const [stopLossPips, setStopLossPips] = useState<number>(30);

  // Calculation logic
  const riskAmount = (accountBalance * riskPercentage) / 100;
  // Standard lot risk calculation for major pairs (approx $10 per pip per standard lot)
  const pipValueStandard = 10;
  const calculatedLotSize = stopLossPips > 0 ? (riskAmount / (stopLossPips * pipValueStandard)).toFixed(2) : '0.00';

  return (
    <div className="app-container">
      {/* Header */}
      <header className="elite-header">
        <div className="brand-logo">
          إيليت <span>Elite</span>
        </div>
        <nav className="nav-links">
          <a href="#courses">الدورات التدريبية</a>
          <a href="#calculator">حاسبة المخاطر</a>
          <a href="#about">من نحن</a>
          <a href="#contact">تواصل معنا</a>
        </nav>
        <button className="header-cta">ابدأ التداول</button>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge">منصة التداول الاحترافية الأولى في العالم العربي</div>
        <h1 className="hero-title">
          ارتقِ بمستواك في سوق الفوركس مع أكاديمية <span>إيليت</span>
        </h1>
        <p className="hero-subtitle">
          نقدم لك استراتيجيات التداول المؤسسي، التحليل الفني المتقدم، وإدارة المخاطر الصارمة لتصبح متداولاً محترفاً ومستقلاً مالياً.
        </p>
        <div className="hero-actions">
          <a href="#courses" className="btn-primary">استعرض الدورات</a>
          <a href="#calculator" className="btn-secondary">حاسبة اللوت الذكية</a>
        </div>
      </section>

      {/* Stats Ribbon */}
      <div className="stats-ribbon">
        <div className="stat-card">
          <div className="stat-value">+4,500</div>
          <div className="stat-label">متداول متخرج</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">94%</div>
          <div className="stat-label">نسبة رضا الطلاب</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">12 عاماً</div>
          <div className="stat-label">خبرة في الأسواق المالية</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">24 / 7</div>
          <div className="stat-label">دعم وتحليل مستمر</div>
        </div>
      </div>

      {/* Courses Section */}
      <section id="courses" className="courses-section">
        <div className="section-header">
          <h2 className="section-title">برامجنا التدريبية المتخصصة</h2>
          <p className="section-desc">
            مصممة خصيصاً لتأخذك من الصفر وحتى الاحتراف الكامل بأسلوب منهجي وعملي مبني على صفقات حقيقية.
          </p>
        </div>

        <div className="courses-grid">
          {/* Course 1 */}
          <div className="course-card">
            <div>
              <div className="course-level">مستوى المبتدئين</div>
              <h3 className="course-title">أساسيات أسواق الفوركس</h3>
              <p className="course-desc">
                تعرف على آلية عمل سوق العملات، منصات التداول الأساسية، وكيفية قراءة الرسوم البيانية وفهم العقود.
              </p>
              <ul className="course-features">
                <li>مفاهيم النقاط والعقود (Pips & Lots)</li>
                <li>استخدام منصة ميتاتريدر باحتراف</li>
                <li>مقدمة في التحليل الفني الأساسي</li>
              </ul>
            </div>
            <div className="course-footer">
              <div className="course-price">299$ <span>/ الدورة</span></div>
              <button className="btn-enroll">سجل الآن</button>
            </div>
          </div>

          {/* Course 2 */}
          <div className="course-card featured">
            <div className="featured-badge">الأكثر طلباً</div>
            <div>
              <div className="course-level">مستوى المتداول المحترف</div>
              <h3 className="course-title">استراتيجيات السعر المتقدمة (Price Action)</h3>
              <p className="course-desc">
                تعلم قراءة حركة الشموع اليابانية، مستويات السيولة المؤسسية، ومناطق العرض والطلب بدقة متناهية.
              </p>
              <ul className="course-features">
                <li>استراتيجيات العرض والطلب المتقدمة</li>
                <li>تتبع الأموال الذكية (Smart Money)</li>
                <li>إدارة الصفقات الكبرى واقتناص الانعكاسات</li>
              </ul>
            </div>
            <div className="course-footer">
              <div className="course-price">699$ <span>/ الدورة</span></div>
              <button className="btn-enroll">سجل الآن</button>
            </div>
          </div>

          {/* Course 3 */}
          <div className="course-card">
            <div>
              <div className="course-level">مستوى الخبراء</div>
              <h3 className="course-title">برنامج النخبة الشامل (VIP Mentorship)</h3>
              <p className="course-desc">
                تدريب شخصي مباشر، جلسات تداول حية أسبوعياً، وبناء خطة رأس مال احترافية للشركات التمويلية.
              </p>
              <ul className="course-features">
                <li>جلسات إشراف فردية مباشرة</li>
                <li>دخول غرفة التداول الحية اليومية</li>
                <li>اجتياز اختبارات شركات التمويل بضمان</li>
              </ul>
            </div>
            <div className="course-footer">
              <div className="course-price">1,499$ <span>/ البرنامج</span></div>
              <button className="btn-enroll">انضم للنخبة</button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section id="calculator" className="calculator-section">
        <div className="section-header">
          <h2 className="section-title">حاسبة إدارة المخاطر وحجم اللوت</h2>
          <p className="section-desc">
            احسب حجم العقد المناسب لكل صفقة بناءً على حجم حسابك ونسبة المخاطرة المسموح بها بدقة.
          </p>
        </div>

        <div className="calc-container">
          <div className="calc-grid">
            <div className="calc-inputs">
              <div className="input-group">
                <label>رأس المال الحالي ($)</label>
                <input
                  type="number"
                  value={accountBalance}
                  onChange={(e) => setAccountBalance(Number(e.target.value))}
                  min={100}
                  step={100}
                />
              </div>

              <div className="input-group">
                <label>نسبة المخاطرة من الحساب (%)</label>
                <input
                  type="number"
                  value={riskPercentage}
                  onChange={(e) => setRiskPercentage(Number(e.target.value))}
                  min={0.1}
                  max={5}
                  step={0.1}
                />
              </div>

              <div className="input-group">
                <label>حجم وقف الخسارة (بالنقاط - Pips)</label>
                <input
                  type="number"
                  value={stopLossPips}
                  onChange={(e) => setStopLossPips(Number(e.target.value))}
                  min={5}
                  max={500}
                />
              </div>
            </div>

            <div className="calc-results">
              <div className="result-item">
                <span className="result-label">مبلغ المخاطرة بالدولار:</span>
                <span className="result-value">${riskAmount.toFixed(2)}</span>
              </div>
              <div className="result-item">
                <span className="result-label">حجم العقد المقترح (Lots):</span>
                <span className="result-value">{calculatedLotSize} Lot</span>
              </div>
              <div className="result-item">
                <span className="result-label">حالة إدارة المخاطر:</span>
                <span className="result-value" style={{ color: riskPercentage <= 2 ? '#10b981' : '#ef4444' }}>
                  {riskPercentage <= 2 ? 'آمنة ومثالية' : 'مخاطرة عالية'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="elite-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              إيليت <span>Elite</span>
            </div>
            <p>
              المنصة العربية الرائدة في تعليم وتدريب متداولي سوق الفوركس والأسواق المالية العالمية وفق أعلى المعايير المهنية.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>روابط سريعة</h4>
            <a href="#courses">الدورات التدريبية</a>
            <a href="#calculator">حاسبة المخاطر</a>
            <a href="#about">قصة نجاح إيليت</a>
          </div>

          <div className="footer-links-group">
            <h4>الدعم الفني</h4>
            <a href="#help">مركز المساعدة</a>
            <a href="#faq">الأسئلة الشائعة</a>
            <a href="#terms">شروط الاستخدام</a>
          </div>

          <div className="footer-links-group">
            <h4>تواصل معنا</h4>
            <a href="#support">support@elite-forex.com</a>
            <a href="#phone">+971 4 000 0000</a>
            <a href="#location">دبي، الإمارات العربية المتحدة</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>جميع الحقوق محفوظة منصة إيليت للتداول 2026.</p>
          <p>تحذير المخاطر: التداول ينطوي على مخاطر عالية، وقد تفقد رأس مالك.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
