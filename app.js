// ===== MOCK DATA =====
const workers = [
  { id: 1, name: "Ramesh Kumar", initials: "RK", skill: "Carpenter", exp: 6, city: "Noida", area: "Sector 62", rate: 400, rating: 4.9, reviews: 48, jobs: 48, available: true, bio: "Experienced carpenter specialising in furniture making, door/window fitting, and wooden flooring. Available across Noida and Greater Noida.", skills: ["Furniture", "Door fitting", "Flooring", "Repair"], color: "#FFF7ED", colorText: "#C2410C" },
  { id: 2, name: "Mohan Singh", initials: "MS", skill: "Painter", exp: 4, city: "Delhi", area: "Lajpat Nagar", rate: 350, rating: 4.2, reviews: 31, jobs: 31, available: true, bio: "Professional painter with expertise in interior and exterior painting. Provides wall texturing and waterproofing services.", skills: ["Interior", "Exterior", "Texture", "Waterproofing"], color: "#EFF6FF", colorText: "#1E40AF" },
  { id: 3, name: "Suresh Patel", initials: "SP", skill: "Plumber", exp: 8, city: "Ghaziabad", area: "Indirapuram", rate: 500, rating: 4.7, reviews: 62, jobs: 62, available: false, bio: "Expert plumber handling all kinds of pipe fitting, leakage repair, and bathroom installations.", skills: ["Pipe fitting", "Leakage repair", "Bathroom", "Tank"], color: "#F0FDF4", colorText: "#166534" },
  { id: 4, name: "Ajay Verma", initials: "AV", skill: "Electrician", exp: 5, city: "Noida", area: "Sector 18", rate: 450, rating: 4.4, reviews: 27, jobs: 27, available: true, bio: "Certified electrician for wiring, switchboard repair, fan/AC installation, and inverter setup.", skills: ["Wiring", "Switchboard", "Fan/AC", "Inverter"], color: "#FAEEDA", colorText: "#854F0B" },
  { id: 5, name: "Prakash Yadav", initials: "PY", skill: "Labour", exp: 3, city: "Greater Noida", area: "Sector 1", rate: 250, rating: 4.0, reviews: 18, jobs: 18, available: true, bio: "Hard working general labour available for construction, loading/unloading, and site work.", skills: ["Construction", "Loading", "Digging", "Site work"], color: "#EEEDFE", colorText: "#3C3489" },
  { id: 6, name: "Deepak Mishra", initials: "DM", skill: "Carpenter", exp: 10, city: "Delhi", area: "Dwarka", rate: 600, rating: 5.0, reviews: 74, jobs: 74, available: true, bio: "Master carpenter with 10 years of experience. Specialises in modular kitchen, wardrobe, and custom furniture.", skills: ["Modular kitchen", "Wardrobe", "Custom furniture", "Polish"], color: "#E1F5EE", colorText: "#085041" },
  { id: 7, name: "Vikas Sharma", initials: "VS", skill: "Plumber", exp: 6, city: "Delhi", area: "Rohini", rate: 480, rating: 4.5, reviews: 39, jobs: 39, available: true, bio: "Skilled plumber for all plumbing needs including RO installation, geyser fitting, and pipeline work.", skills: ["RO install", "Geyser", "Pipeline", "Tap repair"], color: "#F0FDF4", colorText: "#166534" },
  { id: 8, name: "Raju Tiwari", initials: "RT", skill: "Painter", exp: 7, city: "Noida", area: "Sector 45", rate: 380, rating: 4.6, reviews: 55, jobs: 55, available: false, bio: "Expert painter for residential and commercial projects. Specialises in Asian Paints texture work.", skills: ["Asian paints", "Texture", "Polish", "Commercial"], color: "#EFF6FF", colorText: "#1E40AF" },
  { id: 9, name: "Sanjay Labour", initials: "SL", skill: "Labour", exp: 5, city: "Ghaziabad", area: "Vaishali", rate: 280, rating: 3.9, reviews: 14, jobs: 14, available: true, bio: "Available for all types of manual labour work including moving furniture, construction assistance.", skills: ["Moving", "Construction", "Cleaning", "Demolition"], color: "#EEEDFE", colorText: "#3C3489" }
];

const workerReviews = {
  1: [
    { name: "Amit Sharma", initials: "AS", rating: 5, comment: "Very professional, finished the work on time. Highly recommend!", date: "Mar 28, 2025" },
    { name: "Priya Gupta", initials: "PG", rating: 4, comment: "Good work, slightly delayed but quality was great.", date: "Mar 15, 2025" },
    { name: "Rahul Verma", initials: "RV", rating: 5, comment: "Excellent craftsmanship. Made a beautiful study table.", date: "Feb 28, 2025" }
  ],
  2: [
    { name: "Sneha Joshi", initials: "SJ", rating: 4, comment: "Clean work, no mess left behind. Will book again.", date: "Mar 20, 2025" },
    { name: "Karan Mehta", initials: "KM", rating: 4, comment: "Good painter, reasonable price.", date: "Mar 5, 2025" }
  ],
  3: [
    { name: "Deepa Singh", initials: "DS", rating: 5, comment: "Fixed the leakage perfectly. Very skilled.", date: "Apr 1, 2025" },
    { name: "Manish Rao", initials: "MR", rating: 5, comment: "Quick and efficient. No issues after repair.", date: "Mar 25, 2025" }
  ]
};

// ===== APP STATE =====
const state = {
  currentUser: null,
  currentPage: 'home',
  selectedWorker: null,
  activeTab: 'bookings',
  bookings: [
    { id: 1, workerId: 1, workerName: "Ramesh Kumar", workerInitials: "RK", skill: "Carpenter", service: "Furniture making", date: "2025-04-05", time: "10:00", duration: 2, status: "pending", price: 800, address: "A-12, Sector 62, Noida", description: "Need a wooden study table" },
    { id: 2, workerId: 2, workerName: "Mohan Singh", workerInitials: "MS", skill: "Painter", service: "Interior painting", date: "2025-03-28", time: "09:00", duration: 4, status: "completed", price: 1400, address: "B-5, Lajpat Nagar, Delhi", description: "Paint bedroom walls" },
    { id: 3, workerId: 3, workerName: "Suresh Patel", workerInitials: "SP", skill: "Plumber", service: "Leakage repair", date: "2025-04-06", time: "14:00", duration: 1, status: "accepted", price: 500, address: "C-3, Indirapuram", description: "Kitchen pipe leaking" }
  ],
  workerBookings: [
    { id: 1, customerName: "Chirag Jaiswal", customerInitials: "CJ", service: "Furniture making", date: "2025-04-05", time: "10:00", duration: 2, status: "pending", price: 800, address: "A-12, Sector 62, Noida", description: "Need a wooden study table made, size 4x2 ft." },
    { id: 2, customerName: "Neha Sharma", customerInitials: "NS", service: "Door fitting", date: "2025-04-06", time: "14:00", duration: 1, status: "accepted", price: 400, address: "D-7, Dwarka, Delhi", description: "Main door hinges need replacement." },
    { id: 3, customerName: "Rohan Gupta", customerInitials: "RG", service: "Flooring", date: "2025-04-08", time: "11:00", duration: 4, status: "completed", price: 1600, address: "E-15, Sector 44, Noida", description: "Wooden flooring in living room." }
  ],
  filterSkill: 'all',
  filterCity: 'all',
  filterRating: 'all',
  filterAvail: 'all',
  searchQuery: '',
  reviewRating: 0
};

// ===== UTILS =====
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show ' + type;
  setTimeout(() => t.className = 'toast', 2800);
}

function stars(r) {
  let s = '';
  for (let i = 1; i <= 5; i++) s += i <= Math.round(r) ? '★' : '☆';
  return s;
}

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ===== NAVIGATION =====
function navigate(page, data = null) {
  if (data) state.selectedWorker = data;
  state.currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.add('page-hidden'));
  const el = document.getElementById('page-' + page);
  if (el) {
    el.classList.remove('page-hidden');
    window.scrollTo(0, 0);
    renderPage(page);
  }
}

function renderPage(page) {
  switch (page) {
    case 'home': renderHome(); break;
    case 'workers': renderWorkers(); break;
    case 'worker-profile': renderWorkerProfile(); break;
    case 'booking': renderBookingPage(); break;
    case 'customer-dashboard': renderCustomerDashboard(); break;
    case 'worker-dashboard': renderWorkerDashboard(); break;
    case 'login': renderLogin(); break;
    case 'register': renderRegister(); break;
  }
}

// ===== HOME PAGE =====
function renderHome() {
  const featuredHTML = workers.filter(w => w.available).slice(0, 3).map(w => workerCardHTML(w)).join('');
  document.getElementById('featured-workers').innerHTML = featuredHTML;
}

function workerCardHTML(w) {
  return `
    <div class="worker-card" onclick="navigate('worker-profile', ${w.id})">
      <div class="worker-top">
        <div class="avatar" style="background:${w.color};color:${w.colorText}">${w.initials}</div>
        <div class="worker-info" style="flex:1;">
          <h3>${w.name}</h3>
          <p>${w.skill} · ${w.exp} yrs exp</p>
          <div class="stars">${stars(w.rating)} <span style="color:var(--text-muted);font-size:11px;">${w.rating} (${w.reviews})</span></div>
          <span class="badge ${w.available ? 'badge-available' : 'badge-busy'}" style="margin-top:5px;">${w.available ? 'Available' : 'Busy'}</span>
        </div>
      </div>
      <div class="worker-bottom">
        <div>
          <div class="price">₹${w.rate}/hr</div>
          <div class="location">📍 ${w.area}, ${w.city}</div>
        </div>
        <button class="btn-small ${w.available ? 'btn-primary' : 'btn-secondary'}" style="width:auto;" onclick="event.stopPropagation();${w.available ? `openBooking(${w.id})` : `navigate('worker-profile',${w.id})`}">${w.available ? 'Book' : 'View'}</button>
      </div>
    </div>`;
}

// ===== WORKERS PAGE =====
function renderWorkers() {
  applyFilters();
}

function applyFilters() {
  let filtered = [...workers];
  const q = state.searchQuery.toLowerCase();
  if (q) filtered = filtered.filter(w => w.name.toLowerCase().includes(q) || w.skill.toLowerCase().includes(q) || w.city.toLowerCase().includes(q));
  if (state.filterSkill !== 'all') filtered = filtered.filter(w => w.skill === state.filterSkill);
  if (state.filterCity !== 'all') filtered = filtered.filter(w => w.city === state.filterCity);
  if (state.filterRating !== 'all') filtered = filtered.filter(w => w.rating >= parseFloat(state.filterRating));
  if (state.filterAvail !== 'all') filtered = filtered.filter(w => state.filterAvail === 'available' ? w.available : !w.available);

  const sort = document.getElementById('sort-select') ? document.getElementById('sort-select').value : 'rating';
  if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
  else if (sort === 'price-low') filtered.sort((a, b) => a.rate - b.rate);
  else if (sort === 'price-high') filtered.sort((a, b) => b.rate - a.rate);
  else if (sort === 'exp') filtered.sort((a, b) => b.exp - a.exp);

  const container = document.getElementById('workers-list');
  if (!container) return;
  if (filtered.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="icon">🔍</div><p>No workers found matching your filters.</p></div>';
  } else {
    container.innerHTML = `<div class="workers-grid">${filtered.map(w => workerCardHTML(w)).join('')}</div>`;
  }

  document.querySelectorAll('.filter-chip[data-skill]').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.skill === state.filterSkill);
  });
}

function setFilter(type, val) {
  state[type] = val;
  applyFilters();
}

// ===== WORKER PROFILE =====
function renderWorkerProfile() {
  const w = workers.find(x => x.id === state.selectedWorker);
  if (!w) return;

  document.getElementById('profile-content').innerHTML = `
    <div class="profile-header">
      <div class="avatar avatar-lg" style="background:${w.color};color:${w.colorText}">${w.initials}</div>
      <div style="flex:1;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;">
          <div>
            <h2 style="font-size:20px;font-weight:700;">${w.name}</h2>
            <p style="color:var(--text-muted);margin:3px 0;">${w.skill} · ${w.exp} years experience · 📍 ${w.area}, ${w.city}</p>
            <div class="stars" style="font-size:15px;">${stars(w.rating)} <span style="color:var(--text-muted);font-size:13px;">${w.rating} (${w.reviews} reviews)</span></div>
          </div>
          <span class="badge ${w.available ? 'badge-available' : 'badge-busy'}">${w.available ? 'Available' : 'Busy'}</span>
        </div>
        <div class="profile-actions">
          ${w.available ? `<button class="btn-primary" style="width:auto;padding:9px 24px;" onclick="openBooking(${w.id})">Book now</button>` : ''}
          <button class="btn-secondary" style="width:auto;padding:9px 24px;">Message</button>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="stats-grid" style="grid-template-columns:repeat(3,1fr);">
        <div class="stat-card"><div class="stat-val">${w.jobs}</div><div class="stat-lbl">Total jobs</div></div>
        <div class="stat-card"><div class="stat-val">${w.rating}</div><div class="stat-lbl">Rating</div></div>
        <div class="stat-card"><div class="stat-val">₹${w.rate}/hr</div><div class="stat-lbl">Charge</div></div>
      </div>
      <div class="card" style="margin-bottom:16px;">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:8px;">About</h3>
        <p style="color:var(--text-muted);line-height:1.7;">${w.bio}</p>
        <div class="skills-list">
          ${w.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
      </div>
      <div class="card">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:14px;">Reviews</h3>
        ${(workerReviews[w.id] || []).length === 0 ? '<p style="color:var(--text-muted);">No reviews yet.</p>' :
          (workerReviews[w.id] || []).map(r => `
          <div style="display:flex;gap:12px;margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid var(--border);">
            <div class="avatar avatar-sm" style="background:var(--blue-light);color:var(--blue)">${r.initials}</div>
            <div>
              <p style="font-size:13px;font-weight:600;">${r.name}</p>
              <div class="stars" style="font-size:12px;">${stars(r.rating)}</div>
              <p style="font-size:13px;color:var(--text-muted);margin-top:3px;">${r.comment}</p>
              <p style="font-size:11px;color:var(--text-muted);margin-top:2px;">${r.date}</p>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

// ===== BOOKING PAGE =====
function openBooking(workerId) {
  if (!state.currentUser) {
    showToast('Please login to book a worker', 'error');
    navigate('login');
    return;
  }
  state.selectedWorker = workerId;
  navigate('booking');
}

function renderBookingPage() {
  const w = workers.find(x => x.id === state.selectedWorker);
  if (!w) return;
  document.getElementById('booking-worker-info').innerHTML = `
    <div style="display:flex;gap:12px;align-items:center;background:var(--or-light);border-radius:10px;padding:14px;margin-bottom:20px;">
      <div class="avatar" style="background:${w.color};color:${w.colorText}">${w.initials}</div>
      <div>
        <p style="font-weight:600;">${w.name}</p>
        <p style="font-size:12px;color:var(--or-dark);">${w.skill} · ₹${w.rate}/hr · ${w.area}, ${w.city}</p>
      </div>
    </div>`;
  updateBookingTotal();
}

function updateBookingTotal() {
  const w = workers.find(x => x.id === state.selectedWorker);
  if (!w) return;
  const dur = parseInt(document.getElementById('booking-duration')?.value) || 1;
  const total = w.rate * dur;
  const el = document.getElementById('booking-total');
  if (el) el.textContent = '₹' + total;
  const rateEl = document.getElementById('booking-rate');
  if (rateEl) rateEl.textContent = '₹' + w.rate + '/hr';
}

function submitBooking() {
  const w = workers.find(x => x.id === state.selectedWorker);
  const service = document.getElementById('booking-service').value;
  const date = document.getElementById('booking-date').value;
  const time = document.getElementById('booking-time').value;
  const duration = document.getElementById('booking-duration').value;
  const address = document.getElementById('booking-address').value;
  const description = document.getElementById('booking-desc').value;

  if (!service || !date || !time || !address) {
    showToast('Please fill all required fields', 'error');
    return;
  }

  const newBooking = {
    id: state.bookings.length + 1,
    workerId: w.id,
    workerName: w.name,
    workerInitials: w.initials,
    skill: w.skill,
    service, date, time,
    duration: parseInt(duration),
    status: 'pending',
    price: w.rate * parseInt(duration),
    address, description
  };

  state.bookings.unshift(newBooking);
  state.workerBookings.unshift({
    id: state.workerBookings.length + 1,
    customerName: state.currentUser.name,
    customerInitials: getInitials(state.currentUser.name),
    service, date, time,
    duration: parseInt(duration),
    status: 'pending',
    price: w.rate * parseInt(duration),
    address, description
  });

  showToast('Booking confirmed! Waiting for worker to accept.', 'success');
  setTimeout(() => navigate('customer-dashboard'), 1000);
}

// ===== CUSTOMER DASHBOARD =====
function renderCustomerDashboard() {
  const tabs = ['bookings', 'profile'];
  const tab = state.activeTab;

  document.getElementById('customer-dash-content').innerHTML =
    tab === 'bookings' ? renderCustomerBookings() : renderCustomerProfile();
}

function renderCustomerBookings() {
  const total = state.bookings.length;
  const completed = state.bookings.filter(b => b.status === 'completed').length;
  const pending = state.bookings.filter(b => b.status === 'pending').length;

  return `
    <div class="section">
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-val">${total}</div><div class="stat-lbl">Total bookings</div></div>
        <div class="stat-card"><div class="stat-val">${completed}</div><div class="stat-lbl">Completed</div></div>
        <div class="stat-card"><div class="stat-val">${pending}</div><div class="stat-lbl">Pending</div></div>
        <div class="stat-card"><div class="stat-val">₹${state.bookings.reduce((s, b) => s + b.price, 0).toLocaleString()}</div><div class="stat-lbl">Total spent</div></div>
      </div>
      <h3 class="section-title">My bookings</h3>
      <div class="booking-list">
        ${state.bookings.map(b => `
          <div class="booking-item">
            <div class="booking-left">
              <div class="avatar" style="background:var(--or-light);color:var(--or-dark)">${b.workerInitials}</div>
              <div>
                <p style="font-weight:600;">${b.workerName} — ${b.skill}</p>
                <p style="font-size:12px;color:var(--text-muted);">${b.service} · ${formatDate(b.date)} · ${b.time} · ${b.duration} hr${b.duration > 1 ? 's' : ''}</p>
                <p style="font-size:11px;color:var(--text-muted);margin-top:2px;">📍 ${b.address}</p>
              </div>
            </div>
            <div class="booking-right">
              <span class="badge badge-${b.status}">${b.status.charAt(0).toUpperCase() + b.status.slice(1)}</span>
              <div class="price">₹${b.price}</div>
              ${b.status === 'pending' ? `<button onclick="cancelBooking(${b.id})" style="font-size:11px;color:var(--red);background:none;border:none;cursor:pointer;margin-top:4px;">Cancel</button>` : ''}
              ${b.status === 'completed' ? `<button onclick="openReviewModal(${b.workerId})" style="font-size:11px;color:var(--or);background:none;border:none;cursor:pointer;margin-top:4px;">Write review</button>` : ''}
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderCustomerProfile() {
  return `
    <div class="section">
      <div class="card" style="max-width:480px;">
        <h3 style="font-size:15px;font-weight:600;margin-bottom:18px;">My profile</h3>
        <div class="form-group"><label>Full name</label><input type="text" value="${state.currentUser?.name || ''}" /></div>
        <div class="form-group"><label>Email</label><input type="email" value="${state.currentUser?.email || ''}" /></div>
        <div class="form-group"><label>Phone</label><input type="tel" placeholder="+91 98765 43210" /></div>
        <div class="form-row">
          <div class="form-group"><label>City</label><input type="text" placeholder="Noida" /></div>
          <div class="form-group"><label>Area</label><input type="text" placeholder="Sector 62" /></div>
        </div>
        <button class="btn-primary" onclick="showToast('Profile updated!','success')">Save changes</button>
      </div>
    </div>`;
}

function cancelBooking(id) {
  const b = state.bookings.find(x => x.id === id);
  if (b) { b.status = 'cancelled'; renderCustomerDashboard(); showToast('Booking cancelled', ''); }
}

function openReviewModal(workerId) {
  state.reviewRating = 0;
  document.getElementById('review-modal').classList.add('open');
  document.getElementById('review-worker-id').value = workerId;
  document.querySelectorAll('.star-rating span').forEach(s => s.classList.remove('active'));
}

function setReviewRating(r) {
  state.reviewRating = r;
  document.querySelectorAll('.star-rating span').forEach((s, i) => {
    s.classList.toggle('active', i < r);
  });
}

function submitReview() {
  if (state.reviewRating === 0) { showToast('Please select a rating', 'error'); return; }
  const comment = document.getElementById('review-comment').value;
  const wid = parseInt(document.getElementById('review-worker-id').value);
  if (!workerReviews[wid]) workerReviews[wid] = [];
  workerReviews[wid].unshift({ name: state.currentUser.name, initials: getInitials(state.currentUser.name), rating: state.reviewRating, comment: comment || 'Good service!', date: 'Apr 3, 2025' });
  closeModal('review-modal');
  showToast('Review submitted! Thank you.', 'success');
}

// ===== WORKER DASHBOARD =====
function renderWorkerDashboard() {
  const tab = state.activeTab;
  document.getElementById('worker-dash-content').innerHTML =
    tab === 'bookings' ? renderWorkerBookings() :
    tab === 'earnings' ? renderWorkerEarnings() : renderWorkerProfileEdit();
}

function renderWorkerBookings() {
  const pending = state.workerBookings.filter(b => b.status === 'pending');
  const active = state.workerBookings.filter(b => b.status === 'accepted');
  const done = state.workerBookings.filter(b => b.status === 'completed');

  return `
    <div class="section">
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-val">${pending.length}</div><div class="stat-lbl">New requests</div></div>
        <div class="stat-card"><div class="stat-val">${state.workerBookings.length}</div><div class="stat-lbl">Total jobs</div></div>
        <div class="stat-card"><div class="stat-val">₹${state.workerBookings.reduce((s, b) => s + b.price, 0).toLocaleString()}</div><div class="stat-lbl">Total earned</div></div>
        <div class="stat-card"><div class="stat-val">4.9</div><div class="stat-lbl">Rating</div></div>
      </div>
      ${pending.length > 0 ? `
        <h3 class="section-title">New requests (${pending.length})</h3>
        <div class="booking-list" style="margin-bottom:24px;">
          ${pending.map(b => `
            <div class="booking-item" style="flex-direction:column;align-items:flex-start;gap:12px;">
              <div style="display:flex;justify-content:space-between;width:100%;align-items:center;">
                <div style="display:flex;gap:10px;align-items:center;">
                  <div class="avatar avatar-sm" style="background:var(--blue-light);color:var(--blue)">${b.customerInitials}</div>
                  <div>
                    <p style="font-weight:600;">${b.customerName}</p>
                    <p style="font-size:12px;color:var(--text-muted);">${b.service} · ${formatDate(b.date)} · ${b.time} · ${b.duration} hr${b.duration > 1 ? 's' : ''}</p>
                  </div>
                </div>
                <span class="badge badge-pending">Pending</span>
              </div>
              <p style="font-size:13px;color:var(--text-muted);">📍 ${b.address}</p>
              <p style="font-size:13px;color:var(--text-muted);">${b.description}</p>
              <div style="display:flex;gap:10px;width:100%;">
                <button class="btn-green btn-small" style="flex:1;" onclick="updateWorkerBooking(${b.id},'accepted')">Accept — ₹${b.price}</button>
                <button class="btn-red btn-small" style="flex:1;" onclick="updateWorkerBooking(${b.id},'rejected')">Reject</button>
              </div>
            </div>`).join('')}
        </div>` : ''}
      ${active.length > 0 ? `
        <h3 class="section-title">Active jobs</h3>
        <div class="booking-list" style="margin-bottom:24px;">
          ${active.map(b => `
            <div class="booking-item">
              <div class="booking-left">
                <div class="avatar avatar-sm" style="background:var(--blue-light);color:var(--blue)">${b.customerInitials}</div>
                <div>
                  <p style="font-weight:600;">${b.customerName}</p>
                  <p style="font-size:12px;color:var(--text-muted);">${b.service} · ${formatDate(b.date)} · ${b.time}</p>
                </div>
              </div>
              <div style="display:flex;gap:8px;align-items:center;">
                <span class="badge badge-accepted">Accepted</span>
                <span style="font-weight:600;">₹${b.price}</span>
                <button class="btn-green btn-small" onclick="updateWorkerBooking(${b.id},'completed')">Mark done</button>
              </div>
            </div>`).join('')}
        </div>` : ''}
      <h3 class="section-title">Completed jobs</h3>
      <div class="booking-list">
        ${done.length === 0 ? '<div class="empty-state"><p>No completed jobs yet.</p></div>' :
          done.map(b => `
            <div class="booking-item">
              <div class="booking-left">
                <div class="avatar avatar-sm" style="background:var(--green-light);color:var(--green)">${b.customerInitials}</div>
                <div>
                  <p style="font-weight:600;">${b.customerName}</p>
                  <p style="font-size:12px;color:var(--text-muted);">${b.service} · ${formatDate(b.date)}</p>
                </div>
              </div>
              <div style="text-align:right;">
                <span class="badge badge-completed">Completed</span>
                <div style="font-weight:600;margin-top:4px;">₹${b.price}</div>
              </div>
            </div>`).join('')}
      </div>
    </div>`;
}

function renderWorkerEarnings() {
  const total = state.workerBookings.filter(b => b.status === 'completed').reduce((s, b) => s + b.price, 0);
  return `
    <div class="section">
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-val">₹${total.toLocaleString()}</div><div class="stat-lbl">Total earned</div></div>
        <div class="stat-card"><div class="stat-val">₹2,000</div><div class="stat-lbl">This week</div></div>
        <div class="stat-card"><div class="stat-val">₹${total.toLocaleString()}</div><div class="stat-lbl">This month</div></div>
        <div class="stat-card"><div class="stat-val">${state.workerBookings.filter(b => b.status === 'completed').length}</div><div class="stat-lbl">Jobs done</div></div>
      </div>
      <div class="card">
        <h3 style="font-size:14px;font-weight:600;margin-bottom:14px;">Earnings breakdown</h3>
        ${state.workerBookings.filter(b => b.status === 'completed').map(b => `
          <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);">
            <div>
              <p style="font-size:13px;font-weight:500;">${b.customerName} — ${b.service}</p>
              <p style="font-size:12px;color:var(--text-muted);">${formatDate(b.date)}</p>
            </div>
            <p style="font-weight:600;color:var(--green);">+₹${b.price}</p>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderWorkerProfileEdit() {
  return `
    <div class="section">
      <div class="card" style="max-width:480px;">
        <h3 style="font-size:15px;font-weight:600;margin-bottom:18px;">Worker profile</h3>
        <div class="form-group"><label>Full name</label><input type="text" value="Ramesh Kumar" /></div>
        <div class="form-group"><label>Skill / Trade</label>
          <select><option>Carpenter</option><option>Painter</option><option>Plumber</option><option>Electrician</option><option>Labour</option></select>
        </div>
        <div class="form-row">
          <div class="form-group"><label>Experience (yrs)</label><input type="number" value="6" /></div>
          <div class="form-group"><label>Hourly rate (₹)</label><input type="number" value="400" /></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label>City</label><input type="text" value="Noida" /></div>
          <div class="form-group"><label>Area</label><input type="text" value="Sector 62" /></div>
        </div>
        <div class="form-group"><label>Bio</label><textarea>Experienced carpenter specialising in furniture making...</textarea></div>
        <div class="form-group">
          <label>Availability</label>
          <select><option>Available</option><option>Busy</option></select>
        </div>
        <button class="btn-primary" onclick="showToast('Profile updated!','success')">Save changes</button>
      </div>
    </div>`;
}

function updateWorkerBooking(id, status) {
  const b = state.workerBookings.find(x => x.id === id);
  if (b) {
    b.status = status;
    const msgs = { accepted: 'Booking accepted!', rejected: 'Booking rejected.', completed: 'Job marked as completed!' };
    showToast(msgs[status] || 'Updated', status === 'accepted' || status === 'completed' ? 'success' : '');
    renderWorkerDashboard();
  }
}

// ===== AUTH =====
function renderLogin() {
  const el = document.getElementById('login-content');
  if (!el) return;
}

function renderRegister() {}

function doLogin() {
  const email = document.getElementById('login-email').value;
  const pass = document.getElementById('login-pass').value;
  const role = document.getElementById('login-role').value;
  if (!email || !pass) { showToast('Please fill all fields', 'error'); return; }
  state.currentUser = { name: role === 'worker' ? 'Ramesh Kumar' : 'Chirag Jaiswal', email, role };
  updateNavForUser();
  showToast('Login successful! Welcome back.', 'success');
  setTimeout(() => navigate(role === 'worker' ? 'worker-dashboard' : 'customer-dashboard'), 800);
}

function doRegister() {
  const name = document.getElementById('reg-name').value;
  const email = document.getElementById('reg-email').value;
  const pass = document.getElementById('reg-pass').value;
  const role = document.querySelector('.role-btn.active')?.dataset.role || 'customer';
  if (!name || !email || !pass) { showToast('Please fill all fields', 'error'); return; }
  state.currentUser = { name, email, role };
  updateNavForUser();
  showToast('Account created! Welcome to ServiceWala.', 'success');
  setTimeout(() => navigate(role === 'worker' ? 'worker-dashboard' : 'customer-dashboard'), 800);
}

function doLogout() {
  state.currentUser = null;
  updateNavForUser();
  navigate('home');
  showToast('Logged out successfully.');
}

function updateNavForUser() {
  const navAuth = document.getElementById('nav-auth');
  const navUser = document.getElementById('nav-user');
  if (state.currentUser) {
    navAuth.style.display = 'none';
    navUser.style.display = 'flex';
    document.getElementById('nav-user-name').textContent = state.currentUser.name.split(' ')[0];
  } else {
    navAuth.style.display = 'flex';
    navUser.style.display = 'none';
  }
}

// ===== MODAL =====
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// ===== SEARCH (HOME) =====
function homeSearch() {
  const q = document.getElementById('home-search').value;
  state.searchQuery = q;
  navigate('workers');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  navigate('home');

  document.getElementById('home-search')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') homeSearch();
  });

  document.querySelectorAll('.role-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  document.querySelectorAll('.tab-item').forEach(tab => {
    tab.addEventListener('click', function () {
      const group = this.closest('.tab-bar');
      group.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      state.activeTab = this.dataset.tab;
      renderPage(state.currentPage);
    });
  });
});
