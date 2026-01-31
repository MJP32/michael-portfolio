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
  accent: '#0066cc',
  accentSecondary: '#0ea5e9',
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
    borderLeft: '6px solid #0066cc',
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
    background: 'linear-gradient(135deg, #0066cc, #0ea5e9, #06b6d4)',
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
    backgroundColor: isActive ? 'rgba(0, 102, 204, 0.2)' : 'transparent',
    color: isActive ? '#0066cc' : colors.textSecondary,
    borderBottom: isActive ? '3px solid #0066cc' : '3px solid transparent',
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
    color: color || '#0066cc',
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
    background: 'linear-gradient(135deg, #0066cc, #0ea5e9)',
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

export default function IonGroup({ onBack }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '📋 Overview' },
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
        <h1 style={styles.title}>⚡ OpenLink Derivatives Trading Platform</h1>
        <p style={styles.subtitle}>
          End-to-end client implementations of OpenLink derivatives trading platform, integrating market data feeds
          and developing custom solutions for swaps, options, and structured products.
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
                <h3 style={{ color: '#0066cc', fontWeight: '600', marginBottom: '0.75rem' }}>🎯 What is OpenLink?</h3>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#0066cc')}>•</span>
                  <span><strong>ETRM/CTRM Platform:</strong> Energy Trading & Risk Management system</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#0066cc')}>•</span>
                  <span><strong>Derivatives Trading:</strong> Swaps, options, futures, structured products</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#0066cc')}>•</span>
                  <span><strong>Risk Analytics:</strong> Real-time position management and P&L</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#0066cc')}>•</span>
                  <span><strong>Market Data:</strong> Integration with multiple data providers</span>
                </div>
              </div>
              <div>
                <h3 style={{ color: '#10b981', fontWeight: '600', marginBottom: '0.75rem' }}>✅ Key Deliverables</h3>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#10b981')}>•</span>
                  <span><strong>Client Implementations:</strong> End-to-end platform deployments</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#10b981')}>•</span>
                  <span><strong>Custom Scripts:</strong> JVS (OpenLink's internal language) development</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#10b981')}>•</span>
                  <span><strong>Data Integration:</strong> Market data feeds processing</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#10b981')}>•</span>
                  <span><strong>Workflow Automation:</strong> Derivatives lifecycle management</span>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>👨‍💻</span> My Contributions
            </h2>
            <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: colors.bgCard, borderRadius: '8px', borderLeft: '4px solid #0066cc' }}>
              <div style={{ color: colors.textSecondary, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <strong style={{ color: colors.textPrimary }}>Role:</strong> Technical Consultant | <strong style={{ color: colors.textPrimary }}>Duration:</strong> Nov 2010 – Apr 2014
              </div>
            </div>
            <div style={styles.grid}>
              <div>
                {[
                  'Led end-to-end client implementations of OpenLink derivatives trading platform',
                  'Conducted system analysis to understand platform capabilities and client requirements',
                  'Gathered requirements from traders and risk managers'
                ].map((item, i) => (
                  <div key={i} style={styles.listItem}>
                    <span style={styles.bullet('#0066cc')}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div>
                {[
                  'Developed custom scripts in JVS for derivatives workflows',
                  'Integrated market data feeds processing 100K+ price updates per second',
                  'Reduced client implementation time by 40% through reusable solution patterns'
                ].map((item, i) => (
                  <div key={i} style={styles.listItem}>
                    <span style={styles.bullet('#0066cc')}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🏗️</span> System Architecture
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <div style={{ ...styles.diagramBox, borderColor: '#3b82f6', flex: '1', minWidth: '150px' }}>
                <div style={{ fontSize: '1.5rem' }}>📊</div>
                <div style={{ fontWeight: '600', color: '#3b82f6' }}>Market Data</div>
                <div style={{ fontSize: '0.75rem', color: colors.textSecondary }}>100K+ updates/sec</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: colors.textSecondary }}>→</div>
              <div style={{ ...styles.diagramBox, borderColor: '#0066cc', flex: '1', minWidth: '150px' }}>
                <div style={{ fontSize: '1.5rem' }}>⚡</div>
                <div style={{ fontWeight: '600', color: '#0066cc' }}>OpenLink Engine</div>
                <div style={{ fontSize: '0.75rem', color: colors.textSecondary }}>ETRM Platform</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: colors.textSecondary }}>→</div>
              <div style={{ ...styles.diagramBox, borderColor: '#10b981', flex: '1', minWidth: '150px' }}>
                <div style={{ fontSize: '1.5rem' }}>📈</div>
                <div style={{ fontWeight: '600', color: '#10b981' }}>Risk Analytics</div>
                <div style={{ fontSize: '0.75rem', color: colors.textSecondary }}>Real-time P&L</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: colors.textSecondary }}>→</div>
              <div style={{ ...styles.diagramBox, borderColor: '#f59e0b', flex: '1', minWidth: '150px' }}>
                <div style={{ fontSize: '1.5rem' }}>📄</div>
                <div style={{ fontWeight: '600', color: '#f59e0b' }}>Reports</div>
                <div style={{ fontSize: '0.75rem', color: colors.textSecondary }}>Position Reports</div>
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🛠️</span> Technology Stack
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['OpenLink Endur', 'JVS Scripting', 'Oracle Database', 'Market Data Feeds', 'Derivatives Pricing', 'Risk Management', 'SQL/PL-SQL'].map(tech => (
                <span key={tech} style={styles.badge('#0066cc')}>{tech}</span>
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
              <span>🏗️</span> OpenLink ETRM Platform Architecture
            </h2>
            <MermaidDiagram chart={`
flowchart TB
    subgraph External["📊 External Data"]
        BBG[Bloomberg]:::external
        RTR[Reuters]:::external
        EXC[Exchanges]:::external
    end

    subgraph Integration["🔌 Integration Layer"]
        Feed[Feed Handlers]:::secondary
        Norm[Normalization]:::secondary
        Valid[Validation]:::secondary
    end

    subgraph Platform["⚡ OpenLink Endur"]
        Entry[Trade Entry]:::primary
        TValid[Validation]:::primary
        Pos[Positions]:::primary
        Pricing[Pricing]:::accent
        Risk[Risk Analytics]:::accent
        JVS[JVS Engine]:::highlight
    end

    subgraph Output["📄 Downstream"]
        Report[Reporting]:::database
        Integ[Integration]:::database
        Store[(Data Store)]:::database
    end

    BBG --> Feed
    RTR --> Feed
    EXC --> Feed
    Feed --> Norm --> Valid --> Pricing

    Entry --> TValid --> Pos
    Pos --> Pricing
    Pricing --> Risk
    Risk --> JVS

    Risk --> Report
    Pos --> Integ
    TValid --> Store
`} />
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📊</span> Market Data Processing Pipeline
            </h2>
            <MermaidDiagram chart={`
flowchart LR
    subgraph Sources["📊 Data Sources"]
        BBG[Bloomberg]:::external
        RTRS[Reuters]:::external
        Exch[Exchanges]:::external
    end

    subgraph Pipeline["🔄 Processing"]
        Feed[Feed Adapter]:::accent
        Norm[Normalize]:::accent
        Valid[Validate]:::accent
        Dist[Distribute]:::accent
    end

    subgraph Consumers["📥 Consumers"]
        Pricing[Pricing]:::primary
        PosMgmt[Positions]:::primary
        Risk[Risk]:::primary
        Curve[Curves]:::primary
    end

    BBG --> Feed
    RTRS --> Feed
    Exch --> Feed
    Feed --> Norm --> Valid --> Dist
    Dist --> Pricing
    Dist --> PosMgmt
    Dist --> Risk
    Dist --> Curve
`} />
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>💱</span> Derivatives Trade Lifecycle
            </h2>
            <MermaidDiagram chart={`
flowchart LR
    subgraph Entry["📥 Trade Entry"]
        TE[New Trade]:::external
    end

    subgraph Processing["⚙️ Trade Processing"]
        CAP[Capture]:::primary
        VAL[Validate]:::highlight
        BOOK[Book]:::primary
        CONF[Confirm]:::primary
    end

    subgraph Lifecycle["🔄 Lifecycle"]
        EVT[Events]:::accent
        SETTLE[Settlement]:::database
        RPT[Reporting]:::database
    end

    TE --> CAP --> VAL
    VAL -->|Pass| BOOK --> CONF --> EVT
    VAL -->|Fail| TE
    EVT --> SETTLE --> RPT
`} />
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📈</span> Risk Analytics & Reporting Architecture
            </h2>
            <MermaidDiagram chart={`
flowchart LR
    subgraph Input["📥 Input"]
        Positions[Position Data]:::secondary
    end

    subgraph Risk["⚡ Risk Calculations"]
        MR[Market Risk]:::primary
        CR[Credit Risk]:::primary
        LR[Liquidity Risk]:::primary
        Greeks[Greeks]:::accent
        VaR[VaR/CVaR]:::accent
        CVA[CVA/DVA]:::accent
    end

    subgraph Output["📊 Reporting"]
        ReportEng[Report Engine]:::highlight
        Traders[Traders]:::database
        RiskMgmt[Risk Mgmt]:::database
        Regulators[Regulators]:::external
    end

    Positions --> MR
    Positions --> CR
    Positions --> LR
    MR --> Greeks
    MR --> VaR
    CR --> CVA
    Greeks --> ReportEng
    VaR --> ReportEng
    CVA --> ReportEng
    ReportEng --> Traders
    ReportEng --> RiskMgmt
    ReportEng --> Regulators
`} />
          </div>
        </div>
      )}

      {/* Implementation Tab */}
      {activeTab === 'implementation' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📦</span> Derivatives Products Implemented
            </h2>
            <div style={styles.grid}>
              {[
                { name: 'Interest Rate Swaps', icon: '💱', desc: 'Fixed vs floating rate exchanges', color: '#3b82f6' },
                { name: 'Options', icon: '📊', desc: 'Calls, puts, exotic structures', color: '#10b981' },
                { name: 'Futures', icon: '📈', desc: 'Commodity and financial futures', color: '#f59e0b' },
                { name: 'Structured Products', icon: '🧩', desc: 'Custom hybrid instruments', color: '#8b5cf6' }
              ].map(item => (
                <div key={item.name} style={{ ...styles.diagramBox, borderColor: item.color }}>
                  <div style={{ fontSize: '1.5rem' }}>{item.icon}</div>
                  <div style={{ fontWeight: '600', color: item.color }}>{item.name}</div>
                  <div style={{ fontSize: '0.8rem', color: colors.textSecondary }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📡</span> Market Data Integration
            </h2>
            <p style={{ ...styles.subtitle, marginBottom: '1rem' }}>
              Integrated real-time market data feeds processing 100K+ price updates per second with zero data loss across multiple asset classes.
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
              {`// Market Data Feed Handler (Conceptual)
public class MarketDataFeedHandler {
    private final Map<String, PriceSubscription> subscriptions;
    private final RingBuffer<PriceUpdate> buffer;

    public void onPriceUpdate(String symbol, double bid, double ask) {
        PriceUpdate update = PriceUpdate.builder()
            .symbol(symbol)
            .bid(bid)
            .ask(ask)
            .timestamp(System.nanoTime())
            .build();

        // Publish to ring buffer for downstream consumers
        long sequence = buffer.next();
        buffer.get(sequence).copyFrom(update);
        buffer.publish(sequence);

        // Update position valuations
        positionService.revaluePositions(symbol, bid, ask);
    }

    public void subscribe(String symbol, Consumer<PriceUpdate> callback) {
        subscriptions.put(symbol, new PriceSubscription(symbol, callback));
        feedProvider.subscribe(symbol);
    }
}`}
            </SyntaxHighlighter>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🔧</span> Custom JVS Scripting
            </h2>
            <p style={{ ...styles.subtitle, marginBottom: '1rem' }}>
              Developed custom scripts in OpenLink's internal programming language (JVS) to implement derivatives workflows for swaps, options, and structured products.
            </p>
            <div style={styles.grid}>
              <div>
                <h3 style={{ color: '#10b981', fontWeight: '600', marginBottom: '0.75rem' }}>Workflow Automation</h3>
                {['Trade capture and validation', 'Position aggregation', 'P&L calculation', 'Settlement processing', 'Regulatory reporting'].map((item, i) => (
                  <div key={i} style={styles.listItem}>
                    <span style={styles.bullet('#10b981')}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div>
                <h3 style={{ color: '#3b82f6', fontWeight: '600', marginBottom: '0.75rem' }}>Integration Points</h3>
                {['Bloomberg/Reuters feeds', 'Trade repositories', 'Clearing houses', 'Back-office systems', 'Risk engines'].map((item, i) => (
                  <div key={i} style={styles.listItem}>
                    <span style={styles.bullet('#3b82f6')}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Tab */}
      {activeTab === 'results' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📊</span> Performance Metrics
            </h2>
            <div style={styles.grid}>
              {[
                { value: '100K+', label: 'Price Updates per Second' },
                { value: '0', label: 'Data Loss' },
                { value: '40%', label: 'Implementation Time Reduction' },
                { value: 'Multiple', label: 'Asset Classes Supported' },
                { value: 'Real-time', label: 'Position Valuation' },
                { value: 'End-to-End', label: 'Client Implementations' }
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
                <h3 style={{ color: '#10b981', fontWeight: '600', marginBottom: '0.75rem' }}>Technical Excellence</h3>
                {[
                  'Zero data loss market data integration',
                  'Reusable solution patterns and templates',
                  'Custom JVS scripts for derivatives workflows',
                  'Multi-asset class support',
                  'Real-time risk analytics'
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
                  'Faster client onboarding',
                  'Reduced implementation costs',
                  'Deep platform expertise',
                  'Trader and risk manager satisfaction',
                  'Scalable solution architecture'
                ].map((item, i) => (
                  <div key={i} style={styles.listItem}>
                    <span style={styles.bullet('#3b82f6')}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interview Q&A Tab */}
      {activeTab === 'interview' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🎯</span> Derivatives & Trading Questions
            </h2>
            {[
              {
                q: 'What is a derivative and what are the main types?',
                a: 'A derivative is a financial contract whose value derives from an underlying asset (stocks, bonds, commodities, currencies). Main types: Futures (obligation to buy/sell), Options (right but not obligation), Swaps (exchange of cash flows), and Forwards (customized futures). Used for hedging, speculation, and arbitrage.'
              },
              {
                q: 'Explain how an interest rate swap works.',
                a: 'Two parties exchange interest rate cash flows on a notional principal. Typically, one pays fixed rate, other pays floating (e.g., LIBOR/SOFR). Used to hedge interest rate risk or speculate on rate movements. No principal exchange - only net interest payments. Valued by discounting expected future cash flows.'
              },
              {
                q: 'What is ETRM/CTRM and why is it important?',
                a: 'Energy/Commodity Trading and Risk Management systems manage the full lifecycle of commodity trading: trade capture, position management, risk analytics, P&L, and regulatory reporting. Critical for energy companies, trading houses, and banks to manage complex portfolios, comply with regulations, and optimize trading strategies.'
              },
              {
                q: 'How do you handle real-time market data in a trading system?',
                a: 'Use message queues (Kafka, Solace) for reliable delivery, ring buffers for low-latency processing, and in-memory caches for quick lookups. Implement conflation for slow consumers, dead letter queues for failed messages, and monitoring for data quality. Ensure idempotent processing for at-least-once delivery.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 3 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#0066cc', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
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
              <span>☕</span> Java & Integration Questions
            </h2>
            {[
              {
                q: 'How do you ensure zero data loss in market data integration?',
                a: 'Use persistent messaging (Kafka with acks=all), sequence numbers for gap detection, replay capability from source, checksums for data integrity, and monitoring/alerting for anomalies. Implement circuit breakers for failing feeds and fallback to secondary sources. Log all received data for audit and replay.'
              },
              {
                q: 'What is the difference between synchronous and asynchronous data processing?',
                a: 'Synchronous: caller waits for response, simpler but blocks thread. Asynchronous: caller continues immediately, handles response via callback/future. For market data, async is essential - can\'t block on each of 100K updates/second. Use CompletableFuture, reactive streams, or message queues for async processing.'
              },
              {
                q: 'How do you optimize database queries for trading systems?',
                a: 'Use appropriate indexes (composite for common queries), partition tables by date, batch inserts/updates, connection pooling, prepared statements. Avoid N+1 queries, use fetch joins. Consider read replicas for reporting. For real-time, use in-memory caches (Redis) with write-behind to database.'
              },
              {
                q: 'Explain connection pooling and why it matters.',
                a: 'Connection pooling reuses database connections instead of creating new ones for each request. Creating connections is expensive (TCP handshake, authentication). Pools like HikariCP maintain warm connections, manage lifecycle, and prevent resource exhaustion. Configure min/max size based on load and database limits.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 3 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#ec4899', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
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
              <span>🗄️</span> Database & SQL Questions
            </h2>
            {[
              {
                q: 'What is PL/SQL and when would you use it?',
                a: 'PL/SQL is Oracle\'s procedural extension to SQL. Use for: stored procedures (reusable logic), triggers (automatic actions on data changes), functions (calculations), packages (organize related code). Benefits: reduced network round-trips, better performance for complex logic, and centralized business rules.'
              },
              {
                q: 'How do you handle large data volumes in Oracle?',
                a: 'Partitioning (range, list, hash), parallel query execution, materialized views for reporting, bulk operations (FORALL, BULK COLLECT), table compression, proper indexing strategy. For ETL: use external tables, SQL*Loader, or Data Pump. Monitor with AWR reports and tune accordingly.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 1 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#06b6d4', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
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
    </div>
  );
}
