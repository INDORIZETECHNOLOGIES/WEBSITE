export default function Products() {
  return (
    <section className="section products-section" id="products" aria-labelledby="products-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Product Suite</div>
          <h2 className="section-title" id="products-heading">Flagship <span className="gradient-text-animated">AI Products</span></h2>
          <p className="section-subtitle">12+ industry-leading products built to solve real-world business challenges</p>
        </div>
        <div className="products-grid" role="list" aria-label="Products">
          <div className="product-chip reveal" role="listitem" id="prod-1"><span aria-hidden="true">💬</span> Chat Support Agent</div>
          <div className="product-chip reveal delay-1" role="listitem" id="prod-2"><span aria-hidden="true">⚖️</span> Paralegal Doc Review</div>
          <div className="product-chip reveal delay-2" role="listitem" id="prod-3"><span aria-hidden="true">🏛️</span> Courtroom Scribe</div>
          <div className="product-chip reveal delay-3" role="listitem" id="prod-4"><span aria-hidden="true">📄</span> Technical Documentation</div>
          <div className="product-chip reveal" role="listitem" id="prod-5"><span aria-hidden="true">📞</span> AVI Voice Agent</div>
          <div className="product-chip reveal delay-1" role="listitem" id="prod-6"><span aria-hidden="true">📝</span> Online Test Drills &amp; Exams</div>
          <div className="product-chip reveal delay-2" role="listitem" id="prod-7"><span aria-hidden="true">🏥</span> Medical Scribe</div>
          <div className="product-chip reveal delay-3" role="listitem" id="prod-8"><span aria-hidden="true">🚌</span> Metro / Bus Ticketing</div>
          <div className="product-chip reveal" role="listitem" id="prod-9"><span aria-hidden="true">📱</span> Social Media Manager</div>
          <div className="product-chip reveal delay-1" role="listitem" id="prod-10"><span aria-hidden="true">🌐</span> Hyper Local Communities</div>
          <div className="product-chip reveal delay-2" role="listitem" id="prod-11"><span aria-hidden="true">💊</span> Medical Essentials Delivery</div>
          <div className="product-chip reveal delay-3" role="listitem" id="prod-12"><span aria-hidden="true">🤖</span> Process Automation Engine</div>
          <div className="product-chip reveal delay-3" role="listitem" id="prod-12"><span aria-hidden="true">🔐</span> 20fourr</div>
        </div>
      </div>
    </section>
  );
}
