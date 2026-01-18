import { Sidebar } from "./Sidebar"

export function ContactUs() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-dark font-display text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-background-dark selection:bg-accent-neon/30">
        <header className="flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-4 border-b border-white/5 sticky top-0 bg-background-dark/80 backdrop-blur-md z-10 gap-4">
          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="material-symbols-outlined text-accent-neon text-2xl">mail</span>
            <h2 className="text-xl font-bold">Contact Us</h2>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center min-h-[calc(100vh-65px)]">
          <div className="mb-12">
            <h2 className="text-4xl font-black tracking-tight mb-2">Contact Us</h2>
            <p className="text-slate-500 dark:text-[#96c5a9]">Have questions or need technical support? We're here to help.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="size-14 rounded-2xl bg-accent-neon/10 flex items-center justify-center shrink-0 border border-accent-neon/20 hover:border-accent-neon/40 transition-all shadow-[0_0_15px_rgba(56,224,123,0.1)]">
                    <span className="material-symbols-outlined text-accent-neon text-3xl">alternate_email</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Email Support</h4>
                    <p className="text-slate-400 leading-relaxed mb-2 text-sm">Our technical team usually responds within 24 hours.</p>
                    <a className="text-accent-neon font-semibold hover:underline" href="mailto:support@dsaviz.io">support@dsaviz.io</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="size-14 rounded-2xl bg-accent-neon/10 flex items-center justify-center shrink-0 border border-accent-neon/20 hover:border-accent-neon/40 transition-all shadow-[0_0_15px_rgba(56,224,123,0.1)]">
                    <span className="material-symbols-outlined text-accent-neon text-3xl">share</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 font-display">Social Networks</h4>
                    <div className="flex gap-4 mt-4">
                      <SocialLink icon="brand_awareness" />
                      <SocialLink icon="group" />
                      <SocialLink icon="code" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 glass-card rounded-2xl border border-accent-neon/20 bg-accent-neon/5">
                <div className="flex items-center gap-3 text-accent-neon mb-2">
                  <span className="material-symbols-outlined">verified</span>
                  <span className="font-bold uppercase tracking-wider text-xs">Priority Response</span>
                </div>
                <p className="text-sm text-slate-400">Premium members receive priority support and direct access to our core engineering team.</p>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 lg:p-10 shadow-2xl relative border border-white/10">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-neon/10 blur-[80px] rounded-full pointer-events-none"></div>
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 ml-1">Your Name</label>
                  <input
                    className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-xl focus:outline-none focus:border-accent-neon transition-all placeholder:text-slate-600 text-white"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 ml-1">Email Address</label>
                  <input
                    className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-xl focus:outline-none focus:border-accent-neon transition-all placeholder:text-slate-600 text-white"
                    placeholder="john@university.edu"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 ml-1">Message</label>
                  <textarea
                    className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-xl focus:outline-none focus:border-accent-neon transition-all placeholder:text-slate-600 resize-none text-white"
                    placeholder="How can we help you with your algorithm studies?"
                    rows={5}
                  ></textarea>
                </div>
                <button className="w-full bg-accent-neon hover:bg-accent-neon/90 text-background-dark font-black py-4 rounded-xl transition-all flex items-center justify-center gap-2 transform active:scale-[0.98] shadow-lg shadow-accent-neon/20 uppercase tracking-widest text-sm">
                  <span className="material-symbols-outlined">send</span>
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function SocialLink({ icon }: { icon: string }) {
  return (
    <a className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-neon/20 transition-all border border-white/5 group" href="#">
      <span className="material-symbols-outlined text-slate-400 group-hover:text-accent-neon text-xl transition-colors">{icon}</span>
    </a>
  )
}
