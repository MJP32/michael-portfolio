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
  accent: '#6366f1',
  accentSecondary: '#3b82f6',
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
    borderLeft: '6px solid #6366f1',
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
    background: 'linear-gradient(135deg, #6366f1, #3b82f6, #06b6d4)',
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
    backgroundColor: isActive ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
    color: isActive ? '#6366f1' : colors.textSecondary,
    borderBottom: isActive ? '3px solid #6366f1' : '3px solid transparent',
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
    color: color || '#6366f1',
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
    background: 'linear-gradient(135deg, #6366f1, #3b82f6)',
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

export default function DarkPoolMatchingEngine({ onBack }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '📋 Overview' },
    { id: 'architecture', label: '🏗️ Architecture' },
    { id: 'diagram', label: '📐 System Diagram' },
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
        <h1 style={styles.title}>🌑 Dark Pool Matching Engine</h1>
        <p style={styles.subtitle}>
          High-performance order matching engine for dark pool trading with sub-microsecond latency,
          supporting 1M+ orders/sec with advanced anti-gaming logic and smart order routing.
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
                <h3 style={{ color: '#3b82f6', fontWeight: '600', marginBottom: '0.75rem' }}>🎯 What is a Dark Pool?</h3>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#3b82f6')}>•</span>
                  <span><strong>Private Exchange:</strong> Alternative trading system for large block orders</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#3b82f6')}>•</span>
                  <span><strong>Hidden Liquidity:</strong> Orders not visible to public markets</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#3b82f6')}>•</span>
                  <span><strong>Reduced Impact:</strong> Minimizes market impact for institutional trades</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#3b82f6')}>•</span>
                  <span><strong>Price Improvement:</strong> Often executes at midpoint or better</span>
                </div>
              </div>
              <div>
                <h3 style={{ color: '#10b981', fontWeight: '600', marginBottom: '0.75rem' }}>✅ Key Features Built</h3>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#10b981')}>•</span>
                  <span><strong>FIX Protocol:</strong> Industry-standard order submission (4.4/5.0)</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#10b981')}>•</span>
                  <span><strong>Hidden Order Book:</strong> Price-time priority with 20 levels</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#10b981')}>•</span>
                  <span><strong>Anti-Gaming Logic:</strong> Protection against predatory strategies</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#10b981')}>•</span>
                  <span><strong>Smart Order Routing:</strong> ML-based routing to 120+ venues</span>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🏗️</span> System Architecture
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <div style={{ ...styles.diagramBox, borderColor: '#3b82f6', flex: '1', minWidth: '150px' }}>
                <div style={{ fontSize: '1.5rem' }}>📥</div>
                <div style={{ fontWeight: '600', color: '#3b82f6' }}>Order Ingestion</div>
                <div style={{ fontSize: '0.75rem', color: colors.textSecondary }}>FIX Protocol</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: colors.textSecondary }}>→</div>
              <div style={{ ...styles.diagramBox, borderColor: '#10b981', flex: '1', minWidth: '150px' }}>
                <div style={{ fontSize: '1.5rem' }}>📊</div>
                <div style={{ fontWeight: '600', color: '#10b981' }}>Order Book</div>
                <div style={{ fontSize: '0.75rem', color: colors.textSecondary }}>Hidden Liquidity</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: colors.textSecondary }}>→</div>
              <div style={{ ...styles.diagramBox, borderColor: '#8b5cf6', flex: '1', minWidth: '150px' }}>
                <div style={{ fontSize: '1.5rem' }}>⚡</div>
                <div style={{ fontWeight: '600', color: '#8b5cf6' }}>Matching Engine</div>
                <div style={{ fontSize: '0.75rem', color: colors.textSecondary }}>&lt;1µs Latency</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: colors.textSecondary }}>→</div>
              <div style={{ ...styles.diagramBox, borderColor: '#f59e0b', flex: '1', minWidth: '150px' }}>
                <div style={{ fontSize: '1.5rem' }}>🔀</div>
                <div style={{ fontWeight: '600', color: '#f59e0b' }}>Smart Router</div>
                <div style={{ fontSize: '0.75rem', color: colors.textSecondary }}>120+ Venues</div>
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>👨‍💻</span> My Contributions
            </h2>
            <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: colors.bgCard, borderRadius: '8px', borderLeft: '4px solid #6366f1' }}>
              <div style={{ color: colors.textSecondary, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <strong style={{ color: colors.textPrimary }}>Role:</strong> Associate Vice President | <strong style={{ color: colors.textPrimary }}>Duration:</strong> Aug 2018 – Aug 2020
              </div>
            </div>
            <div style={styles.grid}>
              <div>
                {[
                  'Developed dark pool matching engine for anonymous order matching with low-latency algorithms',
                  'Architected Kafka-based streaming platform processing millions of messages for real-time calculations',
                  'Implemented Apache Flink for complex event processing, reducing data latency from seconds to milliseconds'
                ].map((item, i) => (
                  <div key={i} style={styles.listItem}>
                    <span style={styles.bullet('#6366f1')}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div>
                {[
                  'Built distributed caching layer using Oracle Coherence, reducing database load by 90%',
                  'Created RESTful APIs enabling integration with 20+ trading applications',
                  'Supported $3B+ daily volume with 99.999% uptime'
                ].map((item, i) => (
                  <div key={i} style={styles.listItem}>
                    <span style={styles.bullet('#6366f1')}>✓</span>
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
              {['Java', 'Apache Kafka', 'Apache Flink', 'Oracle Coherence', 'RESTful APIs', 'Real-time Streaming', 'Low-latency Systems'].map(tech => (
                <span key={tech} style={styles.badge('#6366f1')}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Architecture Tab */}
      {activeTab === 'architecture' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📥</span> Order Ingestion Gateway
            </h2>
            <div style={styles.grid}>
              {[
                { name: 'FIX 4.4/5.0 Protocol', icon: '📡', desc: 'Industry-standard messaging with session management', color: '#3b82f6' },
                { name: 'Sub-µs Latency', icon: '⚡', desc: 'Kernel bypass with DPDK, CPU pinning', color: '#10b981' },
                { name: '1M+ Orders/sec', icon: '📈', desc: 'Sharded queues, zero-copy networking', color: '#f59e0b' },
                { name: 'Multi-venue Support', icon: '🌐', desc: '120+ venues with failover logic', color: '#8b5cf6' }
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
              <span>📊</span> Hidden Order Book
            </h2>
            <p style={{ ...styles.subtitle, marginBottom: '1rem' }}>
              The order book maintains hidden liquidity with price-time priority matching and anti-gaming protections.
            </p>
            <div style={styles.grid}>
              <div>
                <h3 style={{ color: '#10b981', fontWeight: '600', marginBottom: '0.75rem' }}>Order Types Supported</h3>
                {['Limit Orders', 'Market Orders', 'Iceberg Orders', 'Pegged Orders', 'Minimum Quantity', 'IOC/FOK Orders'].map((item, i) => (
                  <div key={i} style={styles.listItem}>
                    <span style={styles.bullet('#10b981')}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div>
                <h3 style={{ color: '#ef4444', fontWeight: '600', marginBottom: '0.75rem' }}>Anti-Gaming Features</h3>
                {['Minimum resting time', 'Order-to-trade ratio limits', 'Pattern detection', 'Spoofing prevention', 'Layering detection', 'Quote stuffing blocks'].map((item, i) => (
                  <div key={i} style={styles.listItem}>
                    <span style={styles.bullet('#ef4444')}>🛡️</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🔀</span> Smart Order Router
            </h2>
            <p style={{ ...styles.subtitle, marginBottom: '1rem' }}>
              ML-based routing engine that optimizes execution across 120+ venues based on historical fill rates,
              market conditions, and cost analysis.
            </p>
            <div style={styles.grid}>
              {[
                { venue: 'Dark Pools', pct: '45%', color: '#6366f1' },
                { venue: 'Lit Exchanges', pct: '30%', color: '#3b82f6' },
                { venue: 'ATS', pct: '15%', color: '#10b981' },
                { venue: 'Internalizers', pct: '10%', color: '#f59e0b' }
              ].map(item => (
                <div key={item.venue} style={{ ...styles.diagramBox, borderColor: item.color }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: '700', color: item.color }}>{item.pct}</div>
                  <div style={{ fontWeight: '600', color: colors.textPrimary }}>{item.venue}</div>
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
              <span>📐</span> High-Level System Architecture
            </h2>
            <MermaidDiagram chart={`
graph TD
    subgraph Clients["🖥️ Clients"]
        C1[Hedge Fund A]:::external
        C2[Asset Manager B]:::external
        C3[Prop Trading C]:::external
    end

    subgraph Gateway["🔌 FIX Gateway"]
        FIX[FIX Protocol Handler]:::secondary
        VAL[Message Validator]:::secondary
    end

    subgraph Core["⚡ Core Engine"]
        SOR[Smart Order Router]:::accent
        ME[Matching Engine]:::primary
        OB[Order Book]:::primary
        RISK[Risk Engine]:::highlight
    end

    subgraph PostTrade["📊 Post-Trade"]
        CLR[Clearing]:::database
        REP[Reporting]:::database
    end

    C1 --> FIX
    C2 --> FIX
    C3 --> FIX
    FIX --> VAL --> SOR
    SOR --> ME
    ME --> OB
    OB --> ME
    ME --> RISK
    ME --> CLR
    ME --> REP
`} />
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🔄</span> Order Lifecycle Flow
            </h2>
            <MermaidDiagram chart={`
graph LR
    subgraph Input["📥 Order Entry"]
        NEW[New Order]:::external
    end

    subgraph Validation["✅ Validation"]
        VAL[Validate]:::highlight
        RISK[Risk Check]:::highlight
    end

    subgraph Matching["⚡ Matching"]
        BOOK[Order Book]:::secondary
        MATCH[Match Engine]:::primary
    end

    subgraph Output["📤 Execution"]
        EXEC[Execute Trade]:::accent
        REPORT[Report]:::database
    end

    NEW --> VAL --> RISK
    RISK -->|Pass| BOOK
    RISK -->|Fail| REJ[Rejected]:::danger
    BOOK --> MATCH
    MATCH -->|Match| EXEC --> REPORT
    MATCH -->|No Match| BOOK
`} />
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>⚡</span> Low-Latency Data Path
            </h2>
            <MermaidDiagram chart={`
graph LR
    EX[Exchange Feed]:::external --> FPGA[FPGA NIC]:::accent
    FPGA --> KB[Kernel Bypass]:::highlight
    
    subgraph App["🚀 User Space"]
        KB --> RING[Ring Buffer]:::secondary
        RING --> LOGIC[Business Logic]:::primary
        LOGIC --> OUT[Output Buffer]:::secondary
    end
    
    OUT --> NET[Network]:::external
`} />
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🔀</span> Smart Order Router Architecture
            </h2>
            <MermaidDiagram chart={`
graph TD
    ORD[Incoming Orders]:::external --> SOR[Smart Order Router]:::primary

    subgraph ML["🤖 ML Models"]
        FILL[Fill Predictor]:::accent
        LAT[Latency Model]:::accent
        COST[Cost Analyzer]:::accent
    end

    SOR --> FILL
    SOR --> LAT
    SOR --> COST
    FILL --> SOR
    LAT --> SOR
    COST --> SOR

    SOR --> SCORE[Venue Scorer]:::highlight
    SCORE --> SPLIT[Order Splitter]:::highlight

    subgraph Venues["🏛️ Execution Venues"]
        V1[Dark Pools 45%]:::secondary
        V2[Lit Exchanges 30%]:::secondary
        V3[ATS 15%]:::secondary
        V4[Internalizers 10%]:::secondary
    end

    SPLIT --> V1
    SPLIT --> V2
    SPLIT --> V3
    SPLIT --> V4
`} />
          </div>
        </div>
      )}

      {/* Implementation Tab */}
      {activeTab === 'implementation' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>⚡</span> Lock-Free Order Queue
            </h2>
            <p style={{ ...styles.subtitle, marginBottom: '1rem' }}>
              High-performance lock-free data structures using CAS operations for maximum throughput.
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
              {`// Lock-free Order Queue using LMAX Disruptor pattern
public class LockFreeOrderQueue {
    private final AtomicReferenceArray<Order> ringBuffer;
    private final AtomicLong writeIndex = new AtomicLong(0);
    private final AtomicLong readIndex = new AtomicLong(0);

    public boolean enqueue(Order order) {
        long current = writeIndex.get();
        long next = current + 1;

        // CAS operation for lock-free write
        if (writeIndex.compareAndSet(current, next)) {
            int index = (int)(current % ringBuffer.length());
            ringBuffer.set(index, order);
            return true;
        }
        return false;
    }

    public Order dequeue() {
        long current = readIndex.get();
        if (current >= writeIndex.get()) return null;

        if (readIndex.compareAndSet(current, current + 1)) {
            int index = (int)(current % ringBuffer.length());
            return ringBuffer.getAndSet(index, null);
        }
        return null;
    }
}`}
            </SyntaxHighlighter>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🔄</span> Matching Algorithm
            </h2>
            <SyntaxHighlighter
              language="java"
              style={oneDark}
              customStyle={{
                borderRadius: '8px',
                fontSize: '0.85rem',
                margin: 0
              }}
            >
              {`// Price-Time Priority Matching Engine
public class MatchingEngine {
    private final TreeMap<Price, LinkedList<Order>> bids;  // Descending
    private final TreeMap<Price, LinkedList<Order>> asks;  // Ascending

    public List<Fill> match(Order incomingOrder) {
        List<Fill> fills = new ArrayList<>();
        TreeMap<Price, LinkedList<Order>> oppositeBook =
            incomingOrder.isBuy() ? asks : bids;

        while (incomingOrder.getRemainingQty() > 0) {
            Map.Entry<Price, LinkedList<Order>> bestLevel =
                oppositeBook.firstEntry();

            if (bestLevel == null || !isPriceMatch(incomingOrder, bestLevel))
                break;

            for (Order restingOrder : bestLevel.getValue()) {
                Fill fill = executeTrade(incomingOrder, restingOrder);
                fills.add(fill);

                if (incomingOrder.getRemainingQty() == 0) break;
            }
        }

        if (incomingOrder.getRemainingQty() > 0) {
            addToBook(incomingOrder);  // Rest in book
        }
        return fills;
    }
}`}
            </SyntaxHighlighter>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📊</span> FIX Message Handler
            </h2>
            <SyntaxHighlighter
              language="java"
              style={oneDark}
              customStyle={{
                borderRadius: '8px',
                fontSize: '0.85rem',
                margin: 0
              }}
            >
              {`// FIX Protocol Message Handler
@Component
public class FIXMessageHandler implements Application {

    @Override
    public void fromApp(Message message, SessionID sessionID) {
        String msgType = message.getHeader().getString(MsgType.FIELD);

        switch (msgType) {
            case MsgType.NEW_ORDER_SINGLE:
                handleNewOrder(message);
                break;
            case MsgType.ORDER_CANCEL_REQUEST:
                handleCancelRequest(message);
                break;
            case MsgType.ORDER_CANCEL_REPLACE_REQUEST:
                handleModifyRequest(message);
                break;
        }
    }

    private void handleNewOrder(Message message) {
        Order order = Order.builder()
            .clOrdId(message.getString(ClOrdID.FIELD))
            .symbol(message.getString(Symbol.FIELD))
            .side(message.getChar(Side.FIELD))
            .price(message.getDouble(Price.FIELD))
            .quantity(message.getInt(OrderQty.FIELD))
            .build();

        matchingEngine.submitOrder(order);
    }
}`}
            </SyntaxHighlighter>
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
                { value: '$3B+', label: 'Daily Trading Volume' },
                { value: '99.999%', label: 'System Uptime' },
                { value: '90%', label: 'Database Load Reduction' },
                { value: 'sec → ms', label: 'Latency Improvement' },
                { value: '20+', label: 'Integrated Trading Apps' },
                { value: 'Millions', label: 'Messages Processed' }
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
                  'Low-latency matching algorithms for anonymous order pairing',
                  'Kafka-based streaming for real-time calculations',
                  'Apache Flink for complex event processing',
                  'Oracle Coherence distributed caching layer',
                  'RESTful API integration across front-office systems'
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
                  'Best execution for institutional clients',
                  'Reduced market impact by 40%',
                  'Increased fill rates by 25%',
                  'Full regulatory compliance (MiFID II)',
                  'Transaction cost analysis (TCA) reports'
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
              <span>🛡️</span> Risk & Compliance
            </h2>
            <div style={styles.grid}>
              {[
                { name: 'Position Limits', desc: 'Real-time position monitoring', icon: '📊', color: '#ef4444' },
                { name: 'Credit Checks', desc: 'Pre-trade credit validation', icon: '💳', color: '#3b82f6' },
                { name: 'Circuit Breakers', desc: 'Automatic halt on anomalies', icon: '⚡', color: '#f59e0b' },
                { name: 'Audit Trail', desc: 'Complete order lifecycle logging', icon: '📝', color: '#10b981' }
              ].map(item => (
                <div key={item.name} style={{ ...styles.diagramBox, borderColor: item.color }}>
                  <div style={{ fontSize: '1.5rem' }}>{item.icon}</div>
                  <div style={{ fontWeight: '600', color: item.color }}>{item.name}</div>
                  <div style={{ fontSize: '0.8rem', color: colors.textSecondary }}>{item.desc}</div>
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
              <span>🎯</span> Technical Interview Questions
            </h2>
            {[
              {
                q: 'What is a dark pool and why do institutions use them?',
                a: 'A dark pool is a private exchange for trading securities where orders are not visible to the public market. Institutions use them to execute large block orders without revealing their trading intentions, which helps minimize market impact and achieve better execution prices.'
              },
              {
                q: 'Explain the price-time priority matching algorithm.',
                a: 'Price-time priority means orders are matched first by the best price (highest bid or lowest ask), and when multiple orders have the same price, they are matched in the order they were received (FIFO). This ensures fair execution and rewards early order placement.'
              },
              {
                q: 'How do you achieve sub-microsecond latency in a matching engine?',
                a: 'Key techniques include: lock-free data structures using CAS operations, kernel bypass networking (DPDK/RDMA), CPU pinning and NUMA-aware memory allocation, zero-copy messaging, pre-allocated object pools to avoid GC, and mechanical sympathy with cache-line optimization.'
              },
              {
                q: 'What is the LMAX Disruptor pattern and why use it?',
                a: 'The Disruptor is a high-performance inter-thread messaging library using a ring buffer. It achieves low latency by avoiding locks, using memory barriers instead, pre-allocating entries, and ensuring cache-friendly sequential access. It can process millions of events per second with consistent latency.'
              },
              {
                q: 'How do you prevent gaming/manipulation in a dark pool?',
                a: 'Anti-gaming measures include: minimum resting time for orders, order-to-trade ratio limits, pattern detection for spoofing/layering, randomized execution delays, minimum quantity requirements, and monitoring for quote stuffing. These protect natural investors from predatory HFT strategies.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 4 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#6366f1', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
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
              <span>💻</span> System Design Questions
            </h2>
            {[
              {
                q: 'How would you design a matching engine to handle 1M+ orders per second?',
                a: 'Use sharded order books by symbol, lock-free queues with ring buffers, batch processing where possible, separate hot path (matching) from cold path (logging/reporting), horizontal scaling with consistent hashing, and in-memory data structures with async persistence.'
              },
              {
                q: 'How do you ensure exactly-once execution in a distributed matching engine?',
                a: 'Use idempotency keys for each order, sequence numbers for gap detection, synchronous replication before acknowledgment, and a journal/write-ahead log. The matching engine should be deterministic so replicas produce identical results from the same input sequence.'
              },
              {
                q: 'Explain your approach to smart order routing across 120+ venues.',
                a: 'Use ML models trained on historical fill rates, venue latency profiles, and cost analysis. Implement real-time feature updates for current market conditions. Route to venues with best probability of fill at optimal price, considering explicit (fees) and implicit (market impact) costs.'
              },
              {
                q: 'How do you handle failover in a low-latency trading system?',
                a: 'Hot standby replicas receiving the same order stream, sub-millisecond heartbeat detection, automatic promotion with no order loss using synchronized journals, and circuit breakers to reject new orders during failover. Client sessions seamlessly reconnect to the new primary.'
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
              <span>📡</span> FIX Protocol Questions
            </h2>
            {[
              {
                q: 'What is the FIX protocol and why is it important in trading?',
                a: 'FIX (Financial Information eXchange) is the industry-standard messaging protocol for electronic trading. It defines message formats for order submission, execution reports, market data, and session management. Its importance lies in enabling interoperability between trading systems worldwide.'
              },
              {
                q: 'How do you handle FIX session recovery after a disconnect?',
                a: 'FIX uses sequence numbers for message ordering. On reconnect, perform a resend request (35=2) for missed messages using BeginSeqNo and EndSeqNo. The counterparty replays messages from their journal. Implement gap fill (35=4) for admin messages that don\'t need replay.'
              },
              {
                q: 'What\'s the difference between IOC, FOK, and GTC order types?',
                a: 'IOC (Immediate-Or-Cancel) executes immediately for available quantity and cancels the rest. FOK (Fill-Or-Kill) must execute completely or be cancelled entirely. GTC (Good-Till-Cancelled) remains active until filled or explicitly cancelled. Each serves different trading strategies.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 2 ? `1px solid ${colors.border}` : 'none' }}>
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
              <span>☕</span> Java & Concurrency Questions
            </h2>
            {[
              {
                q: 'What is CAS (Compare-And-Swap) and how does it enable lock-free programming?',
                a: 'CAS is an atomic CPU instruction that compares a memory location to an expected value and swaps it with a new value only if they match. Java\'s AtomicInteger, AtomicReference use CAS internally. It enables lock-free algorithms by allowing threads to retry operations without blocking, avoiding deadlocks and context switches.'
              },
              {
                q: 'Explain the difference between volatile, synchronized, and Atomic classes.',
                a: 'volatile ensures visibility (writes are immediately visible to other threads) but not atomicity. synchronized provides both visibility and mutual exclusion but blocks threads. Atomic classes (AtomicInteger, AtomicLong) provide atomic operations using CAS without blocking, ideal for counters and single-variable updates.'
              },
              {
                q: 'How does the Java Memory Model affect concurrent programming?',
                a: 'JMM defines how threads interact through memory. Key concepts: happens-before relationships, visibility guarantees, and reordering rules. Without proper synchronization, threads may see stale values due to CPU caches and compiler optimizations. volatile, synchronized, and Atomic classes establish happens-before relationships.'
              },
              {
                q: 'What is a ring buffer and why is it used in high-performance systems?',
                a: 'A ring buffer is a fixed-size circular array where producers and consumers use modulo arithmetic to wrap around. Benefits: cache-friendly sequential access, no memory allocation during operation, predictable memory footprint, and lock-free implementation possible with CAS on head/tail pointers.'
              },
              {
                q: 'How do you avoid garbage collection pauses in latency-critical Java applications?',
                a: 'Techniques include: object pooling (pre-allocate and reuse objects), primitive collections (Trove, Eclipse Collections), off-heap storage (DirectByteBuffer, Chronicle), value types, avoiding autoboxing, using ZGC or Shenandoah for low-pause GC, and pre-sizing collections to avoid resizing.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 4 ? `1px solid ${colors.border}` : 'none' }}>
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
              <span>🗃️</span> Data Structures & Algorithms Questions
            </h2>
            {[
              {
                q: 'Why use TreeMap vs HashMap for an order book?',
                a: 'TreeMap maintains sorted order by key (price levels) with O(log n) operations, essential for finding best bid/ask quickly. HashMap has O(1) average but no ordering. Order books need sorted prices for matching, making TreeMap (or skip lists) the standard choice despite slightly higher complexity.'
              },
              {
                q: 'How would you implement a time-priority queue for orders at the same price?',
                a: 'Use a LinkedList or ArrayDeque at each price level in the TreeMap. New orders append to the tail (O(1)), matching removes from head (O(1)). For cancellations, maintain an order ID to node mapping for O(1) removal. This preserves FIFO ordering required for price-time priority.'
              },
              {
                q: 'What data structure would you use for O(1) order lookup by ID?',
                a: 'HashMap<OrderId, Order> provides O(1) average lookup. For memory efficiency with millions of orders, consider primitive-keyed maps like Long2ObjectOpenHashMap from fastutil. Store references to orders also in the order book structure for quick removal during cancellation.'
              },
              {
                q: 'Explain how consistent hashing helps in distributed order routing.',
                a: 'Consistent hashing maps symbols to server partitions using a hash ring. When servers are added/removed, only 1/n keys need remapping (vs all keys in modulo hashing). Each symbol consistently routes to the same partition, maintaining order book integrity while allowing horizontal scaling.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 3 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#14b8a6', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
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
              <span>🔧</span> Design Patterns Questions
            </h2>
            {[
              {
                q: 'What design patterns are commonly used in trading systems?',
                a: 'Producer-Consumer (order queues), Observer (market data distribution), Strategy (different matching algorithms), Command (order operations), State (order lifecycle), Factory (order type creation), and Flyweight (shared symbol/instrument data). The Disruptor pattern is specifically designed for high-throughput event processing.'
              },
              {
                q: 'How does the Command pattern apply to order management?',
                a: 'Each order operation (New, Cancel, Modify) is encapsulated as a command object with execute() and undo() methods. Benefits: operations are serializable for journaling/replay, support for undo (order cancellation), queuing of commands, and separation of request creation from execution timing.'
              },
              {
                q: 'Explain the Publisher-Subscriber pattern for market data distribution.',
                a: 'Publishers (matching engine) emit events without knowing subscribers. Subscribers register interest in specific topics (symbols). A message broker routes events to interested subscribers. This decouples producers from consumers, allows multiple subscribers, and enables filtering. In trading, used for trade/quote dissemination.'
              },
              {
                q: 'How would you implement the Circuit Breaker pattern for external venue connections?',
                a: 'Track failure counts per venue. States: Closed (normal), Open (fail fast after threshold failures), Half-Open (test with limited requests after timeout). Implementation: failure counter, state machine, configurable thresholds/timeouts. Libraries like Resilience4j provide ready implementations. Prevents cascade failures when venues are down.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 3 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#8b5cf6', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
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
              <span>🗄️</span> Database & Persistence Questions
            </h2>
            {[
              {
                q: 'Why use Chronicle Queue or similar for order journaling instead of a database?',
                a: 'Chronicle Queue provides microsecond persistence with memory-mapped files, sequential writes (optimal for SSDs), zero-copy reads, and replay capability. Traditional databases add milliseconds of latency. For audit/compliance, async replication to a database is done separately from the hot path.'
              },
              {
                q: 'How do you handle database writes without impacting matching latency?',
                a: 'Use write-behind caching: match in-memory, acknowledge immediately, async persist to database. Implement LMAX-style event sourcing: journal all events, rebuild state on restart. Use separate read replicas for queries. The matching engine should never wait for database I/O.'
              },
              {
                q: 'What is event sourcing and why is it useful for trading systems?',
                a: 'Event sourcing stores all state changes as immutable events rather than current state. Benefits: complete audit trail (regulatory requirement), replay for debugging/recovery, time-travel queries, and rebuilding projections. The order book can be reconstructed by replaying the event journal from any point.'
              },
              {
                q: 'How would you design the database schema for trade history queries?',
                a: 'Use time-series optimized storage (TimescaleDB, ClickHouse). Partition by date for efficient range queries. Indexes on symbol, account, timestamp. Denormalize for read performance. Separate OLTP (recent trades) from OLAP (historical analysis). Consider columnar storage for analytics workloads.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 3 ? `1px solid ${colors.border}` : 'none' }}>
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
