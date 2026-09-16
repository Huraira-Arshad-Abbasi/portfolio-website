import { motion } from 'framer-motion'
import {
  Sparkles, Stethoscope, Contact, Factory, ShoppingCart, LayoutDashboard,
  Users, Rocket, Briefcase, Search, Building2, GraduationCap, CalendarClock,
} from 'lucide-react'
import '../css/services.css'

// ── Data ────────────────────────────────────────────────────────
const platforms = [
  {
    featured: true,
    icon: Stethoscope,
    title: 'Clinical & Healthcare Platforms',
    desc:
      'Enterprise healthcare systems like DaisyEMR — patient management, appointments, clinical notes, lab orders & results, medications, billing, encrypted files, and telemedicine.',
    tags: ['EMR / EHR', 'Telemedicine', 'Stripe Billing', 'PHI-Safe'],
    badge: 'Flagship — DaisyEMR',
  },
  {
    featured: true,
    icon: Contact,
    title: 'CRM & Customer Platforms',
    desc:
      'Customer relationship suites — lead pipelines, contact and account management, deals, tasks, and dashboards that give sales and support teams full visibility.',
    tags: ['Leads & Pipelines', 'Contacts', 'Deals', 'Automation'],
    badge: 'Featured',
  },
  {
    featured: true,
    icon: Factory,
    title: 'ERP & Business Systems',
    desc:
      'Full ERP suites — inventory & supply chain, procurement, HR & payroll, finance, and reporting modules unified into one platform for growing teams.',
    tags: ['Inventory', 'Procurement', 'HR & Payroll', 'Finance'],
    badge: 'Featured',
  },
  {
    icon: GraduationCap,
    title: 'Learning Management Systems',
    desc:
      'Multi-role e-learning platforms — course management, lessons, quizzes, grading, progress tracking, and certificates, from MVP to full institutional scale.',
    tags: ['Courses & Lessons', 'Quizzes & Grades', 'Certificates'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Store',
    desc: 'Complete online storefronts with product catalogs, carts, orders, and secure payment integration.',
    tags: ['Payments', 'Cart & Checkout', 'Order Mgmt'],
  },
  {
    icon: LayoutDashboard,
    title: 'SaaS Dashboard & Admin Panels',
    desc: 'Data-rich dashboards with analytics, user management, and role-based access control.',
    tags: ['Analytics', 'Role-based Access', 'Reports'],
  },
  {
    icon: Users,
    title: 'Social & Community Platforms',
    desc: 'Social networks with profiles, feeds, posts, follows, likes, and real-time chat.',
    tags: ['Profiles', 'Feeds', 'Real-time Chat'],
  },
  {
    icon: CalendarClock,
    title: 'Booking & Scheduling Platforms',
    desc: 'Service booking platforms with availability management, reservations, and reminders.',
    tags: ['Availability', 'Reservations', 'Reminders'],
  },
  {
    icon: Briefcase,
    title: 'Business & Agency Websites',
    desc: 'High-converting marketing sites with lead capture, service showcases, and appointment booking.',
    tags: ['Lead Capture', 'Booking', 'Brand Pages'],
  },
  {
    icon: Search,
    title: 'Job Boards & Hiring Platforms',
    desc: 'Job listing portals with company profiles, applications, search filters, and matching.',
    tags: ['Listings', 'Applications', 'Search'],
  },
  {
    icon: Building2,
    title: 'Real Estate Listing Platforms',
    desc: 'Property listing sites with advanced filters, search, map views, and seller/dashboard flows.',
    tags: ['Listings', 'Map View', 'Filters'],
  },
  {
    icon: Rocket,
    title: 'Custom Web Applications',
    desc:
      'Beyond templates — any web application you can imagine, built end to end from database design to a polished UI and deployment.',
    tags: ['APIs', 'Full-Stack', 'Deployment'],
  },
]

// ── Variants ────────────────────────────────────────────────────
const gridVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

// ── Component ───────────────────────────────────────────────────
export default function Services() {
  return (
    <section className='services'>

      {/* Header */}
      <motion.div
        className='section-header'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className='section-label'>
          <Sparkles size={14} /> Services
        </span>
        <h2>What I Can Build For You</h2>
        <p className='services__subtitle'>
          From landing pages to enterprise-scale platforms — I build any kind of
          web application, end to end.
        </p>
      </motion.div>

      {/* Platform cards */}
      <motion.div
        className='services__grid'
        variants={gridVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, margin: '-80px' }}
      >
        {platforms.map((platform) => {
          const Icon = platform.icon
          return (
            <motion.div
              key={platform.title}
              className={['services__card', platform.featured ? 'services__card--featured' : ''].filter(Boolean).join(' ')}
              variants={cardVariants}
            >
              <div className='services__card-top'>
                <span className='services__icon'>
                  <Icon size={18} strokeWidth={1.5} />
                </span>
                <h3>{platform.title}</h3>
                {platform.badge && (
                  <span className='services__badge'>{platform.badge}</span>
                )}
              </div>
              <p className='services__desc'>{platform.desc}</p>
              <div className='services__tags'>
                {platform.tags.map(tag => (
                  <span key={tag} className='services__tag'>{tag}</span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>

    </section>
  )
}