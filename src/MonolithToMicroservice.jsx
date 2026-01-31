import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MermaidDiagram from './MermaidDiagram';

const colors = {
  bgPrimary: '#0f172a',
  bgSecondary: '#1e293b',
  bgCard: '#334155',
  textPrimary: '#f8fafc',
  textSecondary: '#94a3b8',
  accent: '#a855f7',
  accentSecondary: '#6366f1',
  border: '#475569'
};

const styles = {
  container: {
    minHeight: '100%',
    backgroundColor: colors.bgPrimary,
    padding: '1.5rem',
    color: colors.textPrimary
  },
  header: {
    backgroundColor: colors.bgSecondary,
    borderLeft: '6px solid #a855f7',
    borderRadius: '16px',
    padding: '1.5rem',
    marginBottom: '1.5rem'
  },
  backButton: {
    backgroundColor: colors.bgCard,
    color: colors.textPrimary,
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.2s',
    fontSize: '0.9rem'
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #a855f7, #6366f1, #3b82f6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: '1rem 0 0.5rem'
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: '0.95rem',
    lineHeight: '1.6'
  },
  tabContainer: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1.5rem',
    borderBottom: `2px solid ${colors.border}`,
    overflowX: 'auto',
    paddingBottom: '0'
  },
  tab: (isActive) => ({
    padding: '0.75rem 1.25rem',
    fontWeight: '600',
    fontSize: '0.9rem',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '8px 8px 0 0',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
    backgroundColor: isActive ? 'rgba(168, 85, 247, 0.2)' : 'transparent',
    color: isActive ? '#a855f7' : colors.textSecondary,
    borderBottom: isActive ? '3px solid #a855f7' : '3px solid transparent',
    marginBottom: '-2px'
  }),
  card: {
    backgroundColor: colors.bgSecondary,
    borderRadius: '12px',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    border: `1px solid ${colors.border}`
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1rem'
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
    marginBottom: '0.75rem',
    color: colors.textSecondary,
    fontSize: '0.9rem',
    lineHeight: '1.5'
  },
  bullet: (color) => ({
    color: color || '#a855f7',
    marginTop: '0.25rem',
    flexShrink: 0
  }),
  badge: (color) => ({
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '600',
    backgroundColor: `${color}20`,
    color: color,
    marginRight: '0.5rem',
    marginBottom: '0.5rem'
  }),
  codeBlock: {
    backgroundColor: '#0d1117',
    borderRadius: '8px',
    padding: '1rem',
    fontFamily: 'monospace',
    fontSize: '0.8rem',
    overflowX: 'auto',
    color: '#e6edf3',
    border: '1px solid #30363d',
    lineHeight: '1.6'
  },
  metric: {
    backgroundColor: colors.bgCard,
    borderRadius: '12px',
    padding: '1.25rem',
    textAlign: 'center',
    border: `1px solid ${colors.border}`
  },
  metricValue: {
    fontSize: '2rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #10b981, #3b82f6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  metricLabel: {
    fontSize: '0.85rem',
    color: colors.textSecondary,
    marginTop: '0.25rem'
  },
  diagramBox: {
    backgroundColor: colors.bgCard,
    borderRadius: '8px',
    padding: '1rem',
    textAlign: 'center',
    border: `2px solid ${colors.border}`,
    margin: '0.5rem'
  }
};

export default function MonolithToMicroservice({ onBack }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '📋 Overview' },
    { id: 'strategy', label: '🎯 Strategy' },
    { id: 'diagram', label: '🏗️ System Diagram' },
    { id: 'implementation', label: '⚙️ Implementation' },
    { id: 'results', label: '📊 Results' },
    { id: 'interview', label: '🎯 Interview Q&A' },
    { id: 'technical', label: '💻 Technical Q&A' }
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <button onClick={onBack} style={styles.backButton}>
          <span>←</span>
          <span>Back to Projects</span>
        </button>
        <h1 style={styles.title}>🔄 Monolith to Microservices Migration</h1>
        <p style={styles.subtitle}>
          Decomposed a monolithic VaR/CVaR risk calculation system into microservices using the Strangler Fig Pattern,
          eliminating vendor dependencies and achieving 40% performance improvement.
        </p>
      </div>

      {/* Tabs */}
      <div style={styles.tabContainer}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={styles.tab(activeTab === tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📝</span> Project Context
            </h2>
            <div style={styles.grid}>
              <div>
                <h3 style={{ color: '#ef4444', fontWeight: '600', marginBottom: '0.75rem' }}>🏢 Business Challenge</h3>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#ef4444')}>•</span>
                  <span><strong>Legacy Monolith:</strong> Tightly coupled VaR/CVaR risk calculation system</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#ef4444')}>•</span>
                  <span><strong>Vendor Lock-in:</strong> Expensive third-party vendor with annual licensing</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#ef4444')}>•</span>
                  <span><strong>Scalability Issues:</strong> Cannot scale individual components</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#ef4444')}>•</span>
                  <span><strong>Deployment Risk:</strong> Full system deployment for minor changes</span>
                </div>
              </div>
              <div>
                <h3 style={{ color: '#10b981', fontWeight: '600', marginBottom: '0.75rem' }}>✅ Solution Delivered</h3>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#10b981')}>•</span>
                  <span><strong>Strangler Fig Pattern:</strong> Gradual migration without big-bang</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#10b981')}>•</span>
                  <span><strong>Domain-Driven Design:</strong> Clear bounded contexts</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#10b981')}>•</span>
                  <span><strong>Event-Driven Architecture:</strong> Kafka for async communication</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#10b981')}>•</span>
                  <span><strong>Independent Deployments:</strong> CI/CD per service</span>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🏗️</span> Architecture Overview
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <div style={{ ...styles.diagramBox, borderColor: '#ef4444', flex: '1', minWidth: '200px' }}>
                <div style={{ fontSize: '2rem' }}>🏛️</div>
                <div style={{ fontWeight: '600', color: '#ef4444' }}>Monolith</div>
                <div style={{ fontSize: '0.8rem', color: colors.textSecondary }}>Legacy System</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', fontSize: '2rem', color: colors.textSecondary }}>→</div>
              <div style={{ ...styles.diagramBox, borderColor: '#f59e0b', flex: '1', minWidth: '200px' }}>
                <div style={{ fontSize: '2rem' }}>🔀</div>
                <div style={{ fontWeight: '600', color: '#f59e0b' }}>API Gateway</div>
                <div style={{ fontSize: '0.8rem', color: colors.textSecondary }}>Route & Transform</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', fontSize: '2rem', color: colors.textSecondary }}>→</div>
              <div style={{ ...styles.diagramBox, borderColor: '#10b981', flex: '1', minWidth: '200px' }}>
                <div style={{ fontSize: '2rem' }}>🧩</div>
                <div style={{ fontWeight: '600', color: '#10b981' }}>Microservices</div>
                <div style={{ fontSize: '0.8rem', color: colors.textSecondary }}>Independent Services</div>
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>👨‍💻</span> My Contributions
            </h2>
            <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: colors.bgCard, borderRadius: '8px', borderLeft: '4px solid #a855f7' }}>
              <div style={{ color: colors.textSecondary, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <strong style={{ color: colors.textPrimary }}>Role:</strong> Senior Java Developer (Contract) | <strong style={{ color: colors.textPrimary }}>Duration:</strong> Sep 2016 – Dec 2017
              </div>
            </div>
            <div style={styles.grid}>
              <div>
                {[
                  'Drove migration of Calypso vendor platform to in-house risk system, reducing licensing costs',
                  'Led monolith-to-microservices transformation using Java 8 and Spring Boot',
                  'Reduced deployment time from monthly to daily releases'
                ].map((item, i) => (
                  <div key={i} style={styles.listItem}>
                    <span style={styles.bullet('#a855f7')}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div>
                {[
                  'Optimized JVM performance for processing 100M+ daily scenarios',
                  'Achieved 300% throughput increase through optimization',
                  'Built multithreaded Java application reducing batch processing from 8 hours to 90 minutes'
                ].map((item, i) => (
                  <div key={i} style={styles.listItem}>
                    <span style={styles.bullet('#a855f7')}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🛠️</span> Technology Stack
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Java 8', 'Spring Boot', 'Microservices', 'JVM Optimization', 'Multithreading', 'Batch Processing'].map(tech => (
                <span key={tech} style={styles.badge('#a855f7')}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Strategy Tab */}
      {activeTab === 'strategy' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🌿</span> Strangler Fig Pattern
            </h2>
            <p style={{ ...styles.subtitle, marginBottom: '1rem' }}>
              Named after strangler fig trees that gradually grow around host trees, this pattern allows incremental migration
              from monolith to microservices without risky big-bang rewrites.
            </p>
            <div style={styles.grid}>
              <div style={{ ...styles.diagramBox, borderColor: '#3b82f6' }}>
                <div style={{ fontSize: '1.5rem' }}>1️⃣</div>
                <div style={{ fontWeight: '600', color: '#3b82f6', marginBottom: '0.5rem' }}>Identify Boundaries</div>
                <div style={{ fontSize: '0.85rem', color: colors.textSecondary }}>Map domain contexts and identify seams in the monolith</div>
              </div>
              <div style={{ ...styles.diagramBox, borderColor: '#8b5cf6' }}>
                <div style={{ fontSize: '1.5rem' }}>2️⃣</div>
                <div style={{ fontWeight: '600', color: '#8b5cf6', marginBottom: '0.5rem' }}>Create Facade</div>
                <div style={{ fontSize: '0.85rem', color: colors.textSecondary }}>API Gateway routes traffic to old or new services</div>
              </div>
              <div style={{ ...styles.diagramBox, borderColor: '#ec4899' }}>
                <div style={{ fontSize: '1.5rem' }}>3️⃣</div>
                <div style={{ fontWeight: '600', color: '#ec4899', marginBottom: '0.5rem' }}>Extract Service</div>
                <div style={{ fontSize: '0.85rem', color: colors.textSecondary }}>Build new microservice, migrate functionality</div>
              </div>
              <div style={{ ...styles.diagramBox, borderColor: '#10b981' }}>
                <div style={{ fontSize: '1.5rem' }}>4️⃣</div>
                <div style={{ fontWeight: '600', color: '#10b981', marginBottom: '0.5rem' }}>Redirect Traffic</div>
                <div style={{ fontSize: '0.85rem', color: colors.textSecondary }}>Gradually shift traffic to new service</div>
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📦</span> Service Decomposition
            </h2>
            <div style={styles.grid}>
              {[
                { name: 'Risk Calculation Service', icon: '📊', desc: 'VaR/CVaR computations', color: '#3b82f6' },
                { name: 'Portfolio Service', icon: '💼', desc: 'Portfolio management', color: '#10b981' },
                { name: 'Market Data Service', icon: '📈', desc: 'Real-time market feeds', color: '#f59e0b' },
                { name: 'Scenario Service', icon: '🎭', desc: 'Stress test scenarios', color: '#8b5cf6' },
                { name: 'Reporting Service', icon: '📄', desc: 'PDF/Excel generation', color: '#ec4899' },
                { name: 'Notification Service', icon: '🔔', desc: 'Alerts and notifications', color: '#06b6d4' }
              ].map(service => (
                <div key={service.name} style={{ ...styles.diagramBox, borderColor: service.color }}>
                  <div style={{ fontSize: '1.5rem' }}>{service.icon}</div>
                  <div style={{ fontWeight: '600', color: service.color }}>{service.name}</div>
                  <div style={{ fontSize: '0.8rem', color: colors.textSecondary }}>{service.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* System Diagram Tab */}
      {activeTab === 'diagram' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🏗️</span> Before & After: Monolith to Microservices
            </h2>
            <MermaidDiagram chart={`
flowchart TB
    subgraph Before["🏛️ BEFORE: Monolith"]
        CB[Clients]:::external --> MON[Calypso Monolith]:::danger
        MON --> DBS[(Oracle DB)]:::database
    end

    subgraph After["🧩 AFTER: Microservices"]
        CA[Clients]:::external --> GW[API Gateway]:::secondary

        GW --> Risk[Risk]:::primary
        GW --> Port[Portfolio]:::primary
        GW --> Mkt[Market Data]:::primary

        Risk --> K[Kafka]:::highlight
        Port --> K
        Mkt --> K

        K --> Rep[Reporting]:::accent
        K --> Not[Notifications]:::accent

        Risk --> DB1[(Postgres)]:::database
        Port --> DB2[(Postgres)]:::database
        Mkt --> RD[(Redis)]:::database
        Rep --> MG[(MongoDB)]:::database
    end

    Before -.->|Migration| After
`} />
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🌿</span> Strangler Fig Migration Pattern
            </h2>
            <MermaidDiagram chart={`
flowchart LR
    subgraph P1["1️⃣ Add Facade"]
        C1[Clients]:::external
        G1[Gateway]:::secondary
        M1[Monolith]:::danger
        C1 --> G1 --> M1
    end

    subgraph P2["2️⃣ First Service"]
        G2[Gateway]:::secondary
        M2[Monolith 70%]:::danger
        S1[Market Data]:::primary
        G2 --> M2
        G2 --> S1
    end

    subgraph P3["3️⃣ Extract More"]
        G3[Gateway]:::secondary
        M3[Monolith 30%]:::danger
        S2[Risk]:::primary
        S3[Portfolio]:::primary
        G3 --> M3
        G3 --> S2
        G3 --> S3
    end

    subgraph P4["4️⃣ Complete"]
        G4[Gateway]:::secondary
        MS1[Risk]:::accent
        MS2[Portfolio]:::accent
        MS3[Market]:::accent
        G4 --> MS1
        G4 --> MS2
        G4 --> MS3
    end

    P1 -.-> P2 -.-> P3 -.-> P4
`} />
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📊</span> Event-Driven Communication
            </h2>
            <MermaidDiagram chart={`
flowchart LR
    subgraph Publish["📤 Publish"]
        P[Portfolio Service]:::primary
    end

    subgraph Bus["📫 Kafka Event Bus"]
        K1[portfolio.updates]:::highlight
        K2[risk.completed]:::highlight
        K3[report.available]:::highlight
    end

    subgraph Consume["📥 Consumers"]
        R[Risk Service]:::primary
        Rep[Reporting Service]:::primary
    end

    P --> K1
    K1 --> R
    K1 --> Rep
    R --> K2
    K2 --> Rep
    Rep --> K3
`} />
          </div>
        </div>
      )}

      {/* Implementation Tab */}
      {activeTab === 'implementation' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>⚙️</span> Event-Driven Architecture
            </h2>
            <p style={{ ...styles.subtitle, marginBottom: '1rem' }}>
              Services communicate asynchronously through Apache Kafka, ensuring loose coupling and resilience.
            </p>
            <SyntaxHighlighter
              language="java"
              style={oneDark}
              customStyle={{
                borderRadius: '8px',
                fontSize: '0.85rem',
                margin: 0
              }}
            >
              {`// Risk Calculation Event Publisher
@Service
public class RiskEventPublisher {

    private final KafkaTemplate<String, RiskEvent> kafkaTemplate;

    public void publishCalculationComplete(RiskResult result) {
        RiskEvent event = RiskEvent.builder()
            .eventId(UUID.randomUUID().toString())
            .portfolioId(result.getPortfolioId())
            .var95(result.getVar95())
            .cvar95(result.getCvar95())
            .calculatedAt(Instant.now())
            .build();

        kafkaTemplate.send("risk.calculations.completed",
            result.getPortfolioId(), event);
    }
}

// Risk Event Consumer in Reporting Service
@KafkaListener(topics = "risk.calculations.completed")
public void handleRiskCalculated(RiskEvent event) {
    reportingService.generateRiskReport(event);
    notificationService.alertIfThresholdBreached(event);
}`}
            </SyntaxHighlighter>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🔄</span> API Gateway Routing
            </h2>
            <SyntaxHighlighter
              language="yaml"
              style={oneDark}
              customStyle={{
                borderRadius: '8px',
                fontSize: '0.85rem',
                margin: 0
              }}
            >
              {`# Kong API Gateway Configuration
services:
  - name: risk-service
    url: http://risk-service:8080
    routes:
      - name: risk-routes
        paths:
          - /api/v2/risk
        strip_path: true

  - name: legacy-monolith
    url: http://monolith:8080
    routes:
      - name: legacy-routes
        paths:
          - /api/v1
        # Gradually deprecate as services migrate

plugins:
  - name: rate-limiting
    config:
      minute: 1000
  - name: circuit-breaker
    config:
      threshold: 5
      timeout: 30`}
            </SyntaxHighlighter>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🗄️</span> Database per Service
            </h2>
            <div style={styles.grid}>
              {[
                { service: 'Risk Service', db: 'PostgreSQL', reason: 'Complex calculations, ACID transactions' },
                { service: 'Portfolio Service', db: 'PostgreSQL', reason: 'Relational data, foreign keys' },
                { service: 'Market Data', db: 'Redis + TimescaleDB', reason: 'Real-time caching, time-series' },
                { service: 'Reporting', db: 'MongoDB', reason: 'Flexible document storage' }
              ].map(item => (
                <div key={item.service} style={{ ...styles.diagramBox, borderColor: colors.accent }}>
                  <div style={{ fontWeight: '600', color: colors.textPrimary }}>{item.service}</div>
                  <div style={{ color: '#10b981', fontWeight: '600', margin: '0.25rem 0' }}>{item.db}</div>
                  <div style={{ fontSize: '0.8rem', color: colors.textSecondary }}>{item.reason}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Results Tab */}
      {activeTab === 'results' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📊</span> Key Metrics
            </h2>
            <div style={styles.grid}>
              {[
                { value: '300%', label: 'Throughput Increase' },
                { value: '8h → 90m', label: 'Batch Processing Time' },
                { value: '100M+', label: 'Daily Scenarios Processed' },
                { value: 'Monthly → Daily', label: 'Deployment Frequency' },
                { value: '0', label: 'Vendor Dependencies' },
                { value: 'Full Control', label: 'Customization Capability' }
              ].map(metric => (
                <div key={metric.label} style={styles.metric}>
                  <div style={styles.metricValue}>{metric.value}</div>
                  <div style={styles.metricLabel}>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>✅</span> Achievements
            </h2>
            <div style={styles.grid}>
              <div>
                <h3 style={{ color: '#10b981', fontWeight: '600', marginBottom: '0.75rem' }}>Technical Wins</h3>
                {[
                  'Migrated from Calypso vendor platform to in-house system',
                  'JVM performance optimization for high-volume processing',
                  'Multithreaded batch processing implementation',
                  'Spring Boot microservices architecture',
                  'Reduced vendor licensing costs significantly'
                ].map((item, i) => (
                  <div key={i} style={styles.listItem}>
                    <span style={styles.bullet('#10b981')}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div>
                <h3 style={{ color: '#3b82f6', fontWeight: '600', marginBottom: '0.75rem' }}>Business Impact</h3>
                {[
                  'Eliminated vendor licensing costs',
                  'Faster time-to-market for new features',
                  'Improved system reliability',
                  'Better resource utilization',
                  'Easier onboarding for new developers'
                ].map((item, i) => (
                  <div key={i} style={styles.listItem}>
                    <span style={styles.bullet('#3b82f6')}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📚</span> Lessons Learned
            </h2>
            <div style={styles.grid}>
              {[
                { title: 'Start Small', desc: 'Begin with low-risk, well-understood domains' },
                { title: 'Invest in Observability', desc: 'Monitoring is critical for distributed systems' },
                { title: 'Automate Everything', desc: 'CI/CD pipelines are essential for microservices' },
                { title: 'Design for Failure', desc: 'Circuit breakers, retries, and fallbacks' }
              ].map(lesson => (
                <div key={lesson.title} style={{ ...styles.diagramBox, borderColor: '#f59e0b' }}>
                  <div style={{ fontWeight: '600', color: '#f59e0b', marginBottom: '0.5rem' }}>{lesson.title}</div>
                  <div style={{ fontSize: '0.85rem', color: colors.textSecondary }}>{lesson.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Interview Q&A Tab */}
      {activeTab === 'interview' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🎯</span> Microservices Architecture Questions
            </h2>
            {[
              {
                q: 'What is the Strangler Fig pattern and when would you use it?',
                a: 'The Strangler Fig pattern gradually replaces a monolithic system by incrementally building microservices around it. Traffic is routed through a facade that directs requests to either the old monolith or new services. It\'s ideal for large legacy systems where big-bang rewrites are too risky.'
              },
              {
                q: 'What are the key differences between monolithic and microservices architectures?',
                a: 'Monoliths are single deployable units with shared databases and in-process communication. Microservices are independently deployable, have dedicated databases, communicate over network (HTTP/messaging), and can use different tech stacks. Microservices offer flexibility and scalability but add distributed system complexity.'
              },
              {
                q: 'How do you identify service boundaries when decomposing a monolith?',
                a: 'Use Domain-Driven Design to identify bounded contexts. Look for natural seams: modules with minimal dependencies, different data ownership, different scaling needs, or different change frequencies. Start with less critical domains to minimize risk while learning.'
              },
              {
                q: 'What is the database-per-service pattern and its challenges?',
                a: 'Each microservice owns its data and exposes it only through APIs. Challenges include: distributed transactions (use Saga pattern), data consistency (eventual consistency), joins across services (API composition or CQRS), and data duplication. Benefits include loose coupling and independent scaling.'
              },
              {
                q: 'How do you handle transactions across multiple microservices?',
                a: 'Use the Saga pattern: a sequence of local transactions where each service publishes events triggering the next step. For failures, execute compensating transactions to undo previous steps. Choreography (event-driven) or orchestration (central coordinator) approaches can be used.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 4 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#a855f7', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <span>Q{i + 1}:</span>
                  <span>{item.q}</span>
                </div>
                <div style={{ color: colors.textSecondary, paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <strong style={{ color: '#10b981' }}>A:</strong> {item.a}
                </div>
              </div>
            ))}
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📡</span> Event-Driven Architecture Questions
            </h2>
            {[
              {
                q: 'Why use Kafka for microservices communication?',
                a: 'Kafka provides durable, high-throughput event streaming. Benefits include: decoupled services (producers don\'t know consumers), event replay for debugging/recovery, natural audit log, multiple consumers per topic, and ordering guarantees within partitions. It enables event sourcing and CQRS patterns.'
              },
              {
                q: 'What is the difference between choreography and orchestration?',
                a: 'In choreography, services react to events independently without central control - more loosely coupled but harder to understand flow. In orchestration, a central coordinator directs the workflow - easier to understand but creates a single point of control. Choose based on complexity and coupling needs.'
              },
              {
                q: 'How do you ensure message ordering in a distributed system?',
                a: 'Use partition keys in Kafka to ensure related messages go to the same partition (ordered within partition). For strict global ordering, use a single partition (limits throughput). Consider if ordering is truly needed - often eventual consistency with idempotent consumers is sufficient.'
              },
              {
                q: 'How do you handle duplicate messages in event-driven systems?',
                a: 'Design consumers to be idempotent - processing the same message multiple times produces the same result. Use unique message IDs with deduplication tables, or design operations to be naturally idempotent (SET vs INCREMENT). This handles at-least-once delivery guarantees.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 3 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#3b82f6', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <span>Q{i + 1}:</span>
                  <span>{item.q}</span>
                </div>
                <div style={{ color: colors.textSecondary, paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <strong style={{ color: '#10b981' }}>A:</strong> {item.a}
                </div>
              </div>
            ))}
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🛡️</span> Resilience & Observability Questions
            </h2>
            {[
              {
                q: 'What is a circuit breaker and how does it work?',
                a: 'A circuit breaker prevents cascading failures by stopping calls to a failing service. States: Closed (normal operation), Open (fail fast without calling), Half-Open (test if service recovered). After threshold failures, it opens; after timeout, it tests with limited requests before fully closing.'
              },
              {
                q: 'How do you implement zero-downtime deployments?',
                a: 'Use blue-green deployments (two identical environments, switch traffic) or canary releases (gradual traffic shift to new version). Kubernetes rolling updates replace pods incrementally. Ensure backward-compatible APIs and database migrations. Health checks validate new instances before receiving traffic.'
              },
              {
                q: 'What observability tools and practices are essential for microservices?',
                a: 'Three pillars: Metrics (Prometheus/Grafana for dashboards and alerts), Logs (ELK stack with correlation IDs), and Traces (Jaeger/Zipkin for distributed tracing). Also: health checks, centralized configuration, service mesh for network observability. Without these, debugging distributed systems is nearly impossible.'
              },
              {
                q: 'How do you handle API versioning in microservices?',
                a: 'Common approaches: URL versioning (/v1/users), header versioning (Accept: application/vnd.api.v1+json), or query params. Maintain backward compatibility when possible. Use API gateways for version routing. Deprecate old versions gradually with clear timelines and client communication.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 3 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#f59e0b', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <span>Q{i + 1}:</span>
                  <span>{item.q}</span>
                </div>
                <div style={{ color: colors.textSecondary, paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <strong style={{ color: '#10b981' }}>A:</strong> {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technical Q&A Tab */}
      {activeTab === 'technical' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>☕</span> Java & Spring Boot Questions
            </h2>
            {[
              {
                q: 'What is Spring Boot auto-configuration and how does it work?',
                a: 'Auto-configuration automatically configures beans based on classpath dependencies and properties. Uses @Conditional annotations (e.g., @ConditionalOnClass, @ConditionalOnMissingBean). Spring Boot starters bundle related dependencies. spring.factories lists auto-configuration classes. Override defaults via application.properties or custom @Bean definitions.'
              },
              {
                q: 'Explain the difference between @Component, @Service, @Repository, and @Controller.',
                a: 'All are specializations of @Component for stereotype annotations. @Service: business logic layer, no special behavior. @Repository: data access layer, translates persistence exceptions. @Controller/@RestController: web layer, handles HTTP requests. They enable component scanning and provide semantic meaning for the layer architecture.'
              },
              {
                q: 'How does Spring\'s @Transactional annotation work?',
                a: 'Creates a proxy that manages transaction boundaries. Starts transaction before method, commits on success, rolls back on RuntimeException. Configurable: propagation (REQUIRED, REQUIRES_NEW), isolation level, rollbackFor. Requires public methods and proxy-based AOP. Self-invocation bypasses the proxy - use separate beans.'
              },
              {
                q: 'What is the difference between RestTemplate and WebClient?',
                a: 'RestTemplate is synchronous and blocking - simple but ties up thread during I/O. WebClient (Spring WebFlux) is non-blocking and reactive, using Project Reactor. WebClient scales better for high concurrency. RestTemplate is deprecated for new code. Use WebClient with .block() if you need synchronous behavior temporarily.'
              },
              {
                q: 'How do you implement graceful shutdown in Spring Boot?',
                a: 'Enable server.shutdown=graceful in properties. Set spring.lifecycle.timeout-per-shutdown-phase for timeout. Implement SmartLifecycle for custom shutdown logic. Stop accepting new requests, wait for in-flight requests to complete. Use @PreDestroy for cleanup. Kubernetes sends SIGTERM, then SIGKILL after terminationGracePeriodSeconds.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 4 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#10b981', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <span>Q{i + 1}:</span>
                  <span>{item.q}</span>
                </div>
                <div style={{ color: colors.textSecondary, paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <strong style={{ color: '#3b82f6' }}>A:</strong> {item.a}
                </div>
              </div>
            ))}
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🗄️</span> Database & Data Management Questions
            </h2>
            {[
              {
                q: 'How do you handle database migrations in microservices?',
                a: 'Use Flyway or Liquibase for version-controlled migrations. Each service owns its migrations. Run migrations on application startup or as separate init containers in Kubernetes. Never modify existing migrations. Use backward-compatible changes (add columns nullable, deprecate before removing). Blue-green deployments require compatible schemas.'
              },
              {
                q: 'What is the Outbox pattern and why is it important?',
                a: 'Write events to an "outbox" table in the same transaction as business data. A separate process (Debezium CDC or polling) publishes events to Kafka. Solves the dual-write problem: guarantees that if data is committed, the event will be published. Essential for reliable event-driven architectures.'
              },
              {
                q: 'Explain optimistic vs pessimistic locking.',
                a: 'Optimistic: assume no conflicts, use version column (@Version in JPA), fail on concurrent update with OptimisticLockException. Good for low contention. Pessimistic: lock row/table (SELECT FOR UPDATE), blocks other transactions. Use for high contention or critical sections. Optimistic scales better but requires retry logic.'
              },
              {
                q: 'How do you handle distributed caching with Redis in microservices?',
                a: 'Use Spring Cache abstraction with Redis backend (@Cacheable, @CacheEvict). Consider cache-aside vs write-through patterns. Handle cache stampede with locking or probabilistic early expiration. Use Redis Cluster for high availability. Set appropriate TTLs. Monitor hit rates. Implement circuit breaker for Redis failures.'
              },
              {
                q: 'What is CQRS and when would you use it?',
                a: 'Command Query Responsibility Segregation separates read and write models. Write model handles commands (updates), read model optimized for queries. Benefits: independent scaling, optimized data models, eventual consistency is acceptable. Use for complex domains with different read/write patterns. Adds complexity - not for simple CRUD.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 4 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#06b6d4', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <span>Q{i + 1}:</span>
                  <span>{item.q}</span>
                </div>
                <div style={{ color: colors.textSecondary, paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <strong style={{ color: '#3b82f6' }}>A:</strong> {item.a}
                </div>
              </div>
            ))}
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📡</span> Kafka & Messaging Questions
            </h2>
            {[
              {
                q: 'What is a Kafka partition and how does it affect ordering?',
                a: 'A partition is an ordered, immutable log of messages. Messages within a partition are strictly ordered; across partitions, no ordering guarantee. Use partition keys to ensure related messages (same entity ID) go to same partition. More partitions = more parallelism but more complexity. Consumer groups assign partitions to consumers.'
              },
              {
                q: 'Explain consumer groups and how they enable scaling.',
                a: 'A consumer group is a set of consumers sharing a group ID. Each partition is assigned to exactly one consumer in the group. Adding consumers redistributes partitions (up to partition count). Provides parallel processing and fault tolerance. If a consumer fails, its partitions are reassigned. Use multiple groups for different processing needs.'
              },
              {
                q: 'What is the difference between at-most-once, at-least-once, and exactly-once delivery?',
                a: 'At-most-once: ack before processing, may lose messages. At-least-once: ack after processing, may duplicate (default, use idempotent consumers). Exactly-once: Kafka transactions + idempotent producer + read_committed consumer, no loss or duplication. Exactly-once has overhead; often at-least-once with idempotency is sufficient.'
              },
              {
                q: 'How do you handle Kafka consumer lag?',
                a: 'Monitor lag with kafka-consumer-groups.sh or metrics (records-lag). Causes: slow processing, under-provisioned consumers, backpressure. Solutions: add consumers (up to partition count), increase batch size, optimize processing code, use parallel processing within consumer, or scale partitions. Alert on lag thresholds.'
              },
              {
                q: 'What is a dead letter queue and when would you use one?',
                a: 'DLQ holds messages that failed processing after retries. Prevents poison messages from blocking the queue. Implement: catch exceptions, after N retries send to DLQ topic. Monitor DLQ for investigation. Reprocess after fixing issues. Essential for production systems - never silently drop messages in financial systems.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 4 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#ec4899', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <span>Q{i + 1}:</span>
                  <span>{item.q}</span>
                </div>
                <div style={{ color: colors.textSecondary, paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <strong style={{ color: '#3b82f6' }}>A:</strong> {item.a}
                </div>
              </div>
            ))}
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🔧</span> Design Patterns & Architecture Questions
            </h2>
            {[
              {
                q: 'Explain the Saga pattern for distributed transactions.',
                a: 'Saga is a sequence of local transactions with compensating actions for rollback. Choreography: services emit events, others react. Orchestration: central coordinator directs flow. Example: Order saga - reserve inventory → charge payment → ship. If payment fails, compensate by releasing inventory. Each step must be idempotent and have a compensation.'
              },
              {
                q: 'What is the API Gateway pattern and what problems does it solve?',
                a: 'Single entry point for all client requests. Functions: routing, authentication, rate limiting, SSL termination, request transformation, response aggregation. Solves: clients don\'t need to know internal services, cross-cutting concerns in one place, protocol translation. Examples: Kong, Spring Cloud Gateway, AWS API Gateway.'
              },
              {
                q: 'How does the Bulkhead pattern prevent cascading failures?',
                a: 'Isolates components so failure in one doesn\'t affect others. Like ship bulkheads containing flooding. Implementation: separate thread pools per dependency, connection pool limits, Kubernetes resource limits. If payment service is slow, only its thread pool is exhausted - other services continue working.'
              },
              {
                q: 'What is the Sidecar pattern in microservices?',
                a: 'Deploy a helper container alongside the main application container. Sidecar handles cross-cutting concerns: logging, monitoring, security, networking. Main app is unaware of sidecar. Example: Envoy sidecar in service mesh handles mTLS, retries, circuit breaking. Benefits: separation of concerns, polyglot support, consistent infrastructure.'
              },
              {
                q: 'Explain the difference between synchronous and asynchronous communication patterns.',
                a: 'Synchronous (HTTP/gRPC): caller waits for response, simpler to understand, but creates coupling and can cause cascading failures. Asynchronous (Kafka/RabbitMQ): fire-and-forget or request-reply via messaging, better resilience and scalability, but eventual consistency and harder debugging. Use sync for queries, async for commands/events.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 4 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#8b5cf6', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <span>Q{i + 1}:</span>
                  <span>{item.q}</span>
                </div>
                <div style={{ color: colors.textSecondary, paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <strong style={{ color: '#3b82f6' }}>A:</strong> {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
