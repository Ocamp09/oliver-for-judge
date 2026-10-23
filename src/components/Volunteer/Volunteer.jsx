import { useState } from 'react'
import './Volunteer.css'

const GET_INVOLVED_OPTIONS = [
  { id: 'yard-sign',     label: 'Yard Sign' },
  { id: 'volunteer',     label: 'Volunteer' },
]

const INITIAL_STATE = {
  firstName:   '',
  lastName:    '',
  email:       '',
  zip:         '',
  phone:       '',
  involvement: [],
  subject:     '',
  message:     '',
}

export default function Volunteer() {
  const [form, setForm]       = useState(INITIAL_STATE)
  const [errors, setErrors]   = useState({})
  const [submitted, setSubmitted] = useState(false)

  /* ── Helpers ──────────────────────────────────────────────── */
  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    // Clear error on edit
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  function handleCheckbox(e) {
    const { value, checked } = e.target
    setForm(prev => ({
      ...prev,
      involvement: checked
        ? [...prev.involvement, value]
        : prev.involvement.filter(v => v !== value),
    }))
  }

  /* ── Validation ───────────────────────────────────────────── */
  function validate() {
    const next = {}
    if (!form.firstName.trim())  next.firstName = 'First name is required.'
    if (!form.lastName.trim())   next.lastName  = 'Last name is required.'
    if (!form.email.trim()) {
      next.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!form.zip.trim()) {
      next.zip = 'Zip code is required.'
    } else if (!/^\d{5}(-\d{4})?$/.test(form.zip.trim())) {
      next.zip = 'Please enter a valid zip code.'
    }
    if (form.phone && !/^[\d\s\-().+]{7,15}$/.test(form.phone)) {
      next.phone = 'Please enter a valid phone number.'
    }
    return next
  }

  /* ── Submit ───────────────────────────────────────────────── */
  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
      // Scroll to first error
      const firstKey = Object.keys(validationErrors)[0]
      document.getElementById(`field-${firstKey}`)?.focus()
      return
    }
    // TODO: wire up to backend / email service
    console.log('Volunteer form submitted:', form)
    setSubmitted(true)
  }

  function handleReset() {
    setForm(INITIAL_STATE)
    setErrors({})
    setSubmitted(false)
  }

  /* ── Success state ────────────────────────────────────────── */
  if (submitted) {
    return (
      <section className="volunteer-section" id="volunteer" aria-labelledby="volunteer-heading">
        <div className="volunteer-inner container">
          <div className="volunteer-success" role="status" aria-live="polite">
            <span className="success-icon" aria-hidden="true">✓</span>
            <h2 className="success-heading">You're on the Team!</h2>
            <p className="success-body">
              Thank you for stepping up to support Brandon Oliver's campaign.
              We'll be in touch soon with next steps.
            </p>
            <button className="btn btn-outline" onClick={handleReset}>
              Submit Another Response
            </button>
          </div>
        </div>
      </section>
    )
  }

  /* ── Form ─────────────────────────────────────────────────── */
  return (
    <section className="volunteer-section" id="volunteer" aria-labelledby="volunteer-heading">
      <div className="volunteer-inner container">

        {/* Header */}
        <div className="volunteer-header">
          <p className="section-eyebrow">Volunteer</p>
          <h2 className="volunteer-heading" id="volunteer-heading">
            Support the Campaign
          </h2>
          <p className="volunteer-subhead">
            Join our growing team of supporters. Fill out the form below and
            we'll reach out with ways you can make a difference.
          </p>
        </div>

        <form
          className="volunteer-form"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Volunteer sign-up form"
        >

          {/* ── Name ── */}
          <fieldset className="form-fieldset">
            <legend className="form-legend">Name</legend>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="field-firstName" className="form-label">
                  First Name <span className="required-mark" aria-hidden="true">*</span>
                </label>
                <input
                  id="field-firstName"
                  name="firstName"
                  type="text"
                  className={`form-input${errors.firstName ? ' is-error' : ''}`}
                  value={form.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                  aria-required="true"
                  aria-describedby={errors.firstName ? 'err-firstName' : undefined}
                  placeholder="Jane"
                />
                {errors.firstName && (
                  <p id="err-firstName" className="field-error" role="alert">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="field-lastName" className="form-label">
                  Last Name <span className="required-mark" aria-hidden="true">*</span>
                </label>
                <input
                  id="field-lastName"
                  name="lastName"
                  type="text"
                  className={`form-input${errors.lastName ? ' is-error' : ''}`}
                  value={form.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                  aria-required="true"
                  aria-describedby={errors.lastName ? 'err-lastName' : undefined}
                  placeholder="Smith"
                />
                {errors.lastName && (
                  <p id="err-lastName" className="field-error" role="alert">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>
          </fieldset>

          {/* ── Contact ── */}
          <fieldset className="form-fieldset">
            <legend className="form-legend">Contact</legend>

            <div className="form-group">
              <label htmlFor="field-email" className="form-label">
                Email Address <span className="required-mark" aria-hidden="true">*</span>
              </label>
              <input
                id="field-email"
                name="email"
                type="email"
                className={`form-input${errors.email ? ' is-error' : ''}`}
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                aria-required="true"
                aria-describedby={errors.email ? 'err-email' : undefined}
                placeholder="jane@example.com"
              />
              {errors.email && (
                <p id="err-email" className="field-error" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="field-zip" className="form-label">
                  Zip Code <span className="required-mark" aria-hidden="true">*</span>
                </label>
                <input
                  id="field-zip"
                  name="zip"
                  type="text"
                  inputMode="numeric"
                  className={`form-input${errors.zip ? ' is-error' : ''}`}
                  value={form.zip}
                  onChange={handleChange}
                  autoComplete="postal-code"
                  aria-required="true"
                  aria-describedby={errors.zip ? 'err-zip' : undefined}
                  placeholder="12345"
                  maxLength={10}
                />
                {errors.zip && (
                  <p id="err-zip" className="field-error" role="alert">
                    {errors.zip}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="field-phone" className="form-label">
                  Phone
                  <span className="optional-mark"> (optional)</span>
                </label>
                <input
                  id="field-phone"
                  name="phone"
                  type="tel"
                  className={`form-input${errors.phone ? ' is-error' : ''}`}
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  aria-describedby={errors.phone ? 'err-phone' : undefined}
                  placeholder="(555) 555-5555"
                />
                {errors.phone && (
                  <p id="err-phone" className="field-error" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>
          </fieldset>

          {/* ── Get Involved ── */}
          <fieldset className="form-fieldset">
            <legend className="form-legend">
              Get Involved
              <span className="legend-sub"> — Check all that apply</span>
            </legend>
            <div className="checkbox-group">
              {GET_INVOLVED_OPTIONS.map(({ id, label }) => (
                <label key={id} className="checkbox-label">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    value={id}
                    checked={form.involvement.includes(id)}
                    onChange={handleCheckbox}
                  />
                  <span className="checkbox-custom" aria-hidden="true" />
                  <span className="checkbox-text">{label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* ── Message ── */}
          <fieldset className="form-fieldset">
            <legend className="form-legend">Message</legend>

            <div className="form-group">
              <label htmlFor="field-subject" className="form-label">
                Subject
                <span className="optional-mark"> (optional)</span>
              </label>
              <input
                id="field-subject"
                name="subject"
                type="text"
                className="form-input"
                value={form.subject}
                onChange={handleChange}
                placeholder="How can you help?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="field-message" className="form-label">
                Message
                <span className="optional-mark"> (optional)</span>
              </label>
              <textarea
                id="field-message"
                name="message"
                className="form-textarea"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us more about how you'd like to get involved…"
              />
            </div>
          </fieldset>

          {/* ── Submit ── */}
          <div className="form-footer">
            <p className="required-note">
              <span className="required-mark" aria-hidden="true">*</span> Required fields
            </p>
            <button type="submit" className="btn btn-primary submit-btn">
              Submit
            </button>
          </div>

        </form>
      </div>
    </section>
  )
}
