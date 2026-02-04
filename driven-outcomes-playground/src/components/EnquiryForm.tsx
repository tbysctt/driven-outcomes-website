import { useState } from "react";

const FORM_FIELDS_STEP_1 = [
  { name: "schoolName", label: "School name", required: true },
  { name: "contactName", label: "Primary contact name", required: true },
  { name: "email", label: "Email", required: true, type: "email" as const },
  { name: "mobile", label: "Mobile", required: true, type: "tel" as const },
  { name: "role", label: "Role", required: true },
] as const;

const INCURSION_LENGTH_OPTIONS = [
  "60 minutes",
  "90 minutes",
  "Half day",
  "3/4 day",
  "Full day",
  "Multiple days",
  "Unsure/other",
] as const;

const CONTACT_METHOD_OPTIONS = ["Mobile", "Email", "Phone"] as const;

const HEAR_ABOUT_OPTIONS = [
  "Flyer",
  "Website/Google",
  "Word of mouth",
  "Had us in before",
  "Social media",
  "Other",
] as const;

const inputClass =
  "w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-brand-500 focus:border-transparent";

export function EnquiryForm() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const progressPercent = step === 1 ? 33 : step === 2 ? 66 : 100;

  return (
    <div>
      {submitted ? (
        <div className="text-center py-8">
          <p className="text-xl font-bold text-neutral-900 mb-2">
            Thank you for your enquiry
          </p>
          <p className="text-neutral-600">We&apos;ll be in touch soon.</p>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-bold text-neutral-900 mb-2">
            2026 Enquiry Form
          </h3>
          <p className="text-sm text-neutral-500 mb-2">Step {step} of 3</p>
          <div className="h-2 bg-neutral-100 rounded-full overflow-hidden mb-8">
            <div
              className="h-full bg-linear-to-r from-primary-brand-500 to-secondary-brand-500 rounded-full transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (step === 1) setStep(2);
              else if (step === 2) setStep(3);
              else if (step === 3) setSubmitted(true);
            }}
            className="space-y-5"
          >
            {step === 1 && (
              <>
                {FORM_FIELDS_STEP_1.map((field) => (
                  <label key={field.name} className="block">
                    <span className="block text-sm font-semibold text-neutral-800 mb-1.5">
                      {field.label}
                      {field.required && (
                        <span className="text-primary-brand-600 ml-0.5">
                          (Required)
                        </span>
                      )}
                    </span>
                    <input
                      type={"text"}
                      name={field.name}
                      required={field.required}
                      value={formData[field.name] ?? ""}
                      onChange={(e) => updateField(field.name, e.target.value)}
                      className={inputClass}
                    />
                  </label>
                ))}
                <button
                  type="submit"
                  className="w-full mt-6 py-3 px-4 font-bold uppercase tracking-wide bg-linear-to-r from-primary-brand-500 to-secondary-brand-500 text-white rounded-lg hover:opacity-95 transition-opacity"
                >
                  Continue
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <label className="block">
                  <span className="block text-sm font-semibold text-neutral-800 mb-1.5">
                    Program of interest
                    <span className="text-primary-brand-600 ml-0.5">
                      (Required)
                    </span>
                  </span>
                  <input
                    type="text"
                    name="programOfInterest"
                    required
                    value={formData.programOfInterest ?? ""}
                    onChange={(e) =>
                      updateField("programOfInterest", e.target.value)
                    }
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className="block text-sm font-semibold text-neutral-800 mb-1.5">
                    Year level/s
                  </span>
                  <input
                    type="text"
                    name="yearLevels"
                    value={formData.yearLevels ?? ""}
                    onChange={(e) => updateField("yearLevels", e.target.value)}
                    className={inputClass}
                  />
                </label>

                <fieldset className="block">
                  <span className="block text-sm font-semibold text-neutral-800 mb-2">
                    Preferred incursion length
                    <span className="text-primary-brand-600 ml-0.5">
                      (Required)
                    </span>
                  </span>
                  <div className="space-y-2">
                    {INCURSION_LENGTH_OPTIONS.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="incursionLength"
                          value={option}
                          required
                          checked={(formData.incursionLength ?? "") === option}
                          onChange={(e) =>
                            updateField("incursionLength", e.target.value)
                          }
                          className="w-4 h-4 text-primary-brand-600 border-neutral-300 focus:ring-primary-brand-500"
                        />
                        <span className="text-neutral-800">{option}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="block">
                  <span className="block text-sm font-semibold text-neutral-800 mb-1.5">
                    Number of students
                    <span className="text-primary-brand-600 ml-0.5">
                      (Required)
                    </span>
                  </span>
                  <input
                    type="number"
                    name="numberOfStudents"
                    required
                    min={1}
                    value={formData.numberOfStudents ?? ""}
                    onChange={(e) =>
                      updateField("numberOfStudents", e.target.value)
                    }
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className="block text-sm font-semibold text-neutral-800 mb-1.5">
                    Date preference 1
                  </span>
                  <input
                    type="date"
                    name="datePreference1"
                    value={formData.datePreference1 ?? ""}
                    onChange={(e) =>
                      updateField("datePreference1", e.target.value)
                    }
                    className={inputClass}
                    aria-label="Date preference 1 (dd/mm/yyyy)"
                  />
                </label>

                <label className="block">
                  <span className="block text-sm font-semibold text-neutral-800 mb-1.5">
                    Date preference 2
                  </span>
                  <input
                    type="date"
                    name="datePreference2"
                    value={formData.datePreference2 ?? ""}
                    onChange={(e) =>
                      updateField("datePreference2", e.target.value)
                    }
                    className={inputClass}
                    aria-label="Date preference 2 (dd/mm/yyyy)"
                  />
                </label>

                <label className="block">
                  <span className="block text-sm font-semibold text-neutral-800 mb-1.5">
                    Date preference 3
                  </span>
                  <input
                    type="date"
                    name="datePreference3"
                    value={formData.datePreference3 ?? ""}
                    onChange={(e) =>
                      updateField("datePreference3", e.target.value)
                    }
                    className={inputClass}
                    aria-label="Date preference 3 (dd/mm/yyyy)"
                  />
                </label>

                <label className="block">
                  <span className="block text-sm font-semibold text-neutral-800 mb-1.5">
                    Other date preferences
                  </span>
                  <input
                    type="text"
                    name="otherDatePreferences"
                    value={formData.otherDatePreferences ?? ""}
                    onChange={(e) =>
                      updateField("otherDatePreferences", e.target.value)
                    }
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className="block text-sm font-semibold text-neutral-800 mb-1.5">
                    Additional comments or questions
                  </span>
                  <textarea
                    name="additionalComments"
                    rows={3}
                    value={formData.additionalComments ?? ""}
                    onChange={(e) =>
                      updateField("additionalComments", e.target.value)
                    }
                    placeholder="Curriculum links, program focus or reason for incursion etc"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className="block text-sm font-semibold text-neutral-800 mb-1.5">
                    What is your budget?
                    <span className="text-primary-brand-600 ml-0.5">
                      (Required)
                    </span>
                  </span>
                  <p className="text-xs text-neutral-500 mb-1">
                    Total budget or per student price
                  </p>
                  <input
                    type="text"
                    name="budget"
                    required
                    value={formData.budget ?? ""}
                    onChange={(e) => updateField("budget", e.target.value)}
                    className={inputClass}
                  />
                </label>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 px-4 font-bold uppercase tracking-wide border-2 border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 font-bold uppercase tracking-wide bg-linear-to-r from-primary-brand-500 to-secondary-brand-500 text-white rounded-lg hover:opacity-95 transition-opacity"
                  >
                    Continue
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <fieldset className="block">
                  <span className="block text-sm font-semibold text-neutral-800 mb-2">
                    Preferred contact method
                    <span className="text-primary-brand-600 ml-0.5">
                      (Required)
                    </span>
                  </span>
                  <div className="space-y-2">
                    {CONTACT_METHOD_OPTIONS.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="contactMethod"
                          value={option}
                          required
                          checked={(formData.contactMethod ?? "") === option}
                          onChange={(e) =>
                            updateField("contactMethod", e.target.value)
                          }
                          className="w-4 h-4 text-primary-brand-600 border-neutral-300 focus:ring-primary-brand-500"
                        />
                        <span className="text-neutral-800">{option}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="block">
                  <span className="block text-sm font-semibold text-neutral-800 mb-1.5">
                    Best time to contact
                    <span className="text-primary-brand-600 ml-0.5">
                      (Required)
                    </span>
                  </span>
                  <input
                    type="text"
                    name="bestTimeToContact"
                    required
                    value={formData.bestTimeToContact ?? ""}
                    onChange={(e) =>
                      updateField("bestTimeToContact", e.target.value)
                    }
                    placeholder="e.g. Weekday mornings"
                    className={inputClass}
                  />
                </label>

                <fieldset className="block">
                  <span className="block text-sm font-semibold text-neutral-800 mb-2">
                    I would like to receive updates about programs, specials, or
                    teacher resources
                    <span className="text-primary-brand-600 ml-0.5">
                      (Required)
                    </span>
                  </span>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="receiveUpdates"
                        value="Yes"
                        required
                        checked={(formData.receiveUpdates ?? "") === "Yes"}
                        onChange={(e) =>
                          updateField("receiveUpdates", e.target.value)
                        }
                        className="w-4 h-4 text-primary-brand-600 border-neutral-300 focus:ring-primary-brand-500"
                      />
                      <span className="text-neutral-800">Yes</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="receiveUpdates"
                        value="No"
                        required
                        checked={(formData.receiveUpdates ?? "") === "No"}
                        onChange={(e) =>
                          updateField("receiveUpdates", e.target.value)
                        }
                        className="w-4 h-4 text-primary-brand-600 border-neutral-300 focus:ring-primary-brand-500"
                      />
                      <span className="text-neutral-800">No</span>
                    </label>
                  </div>
                </fieldset>

                <label className="block">
                  <span className="block text-sm font-semibold text-neutral-800 mb-1.5">
                    How did you hear about us?
                    <span className="text-primary-brand-600 ml-0.5">
                      (Required)
                    </span>
                  </span>
                  <select
                    name="hearAboutUs"
                    required
                    value={formData.hearAboutUs ?? ""}
                    onChange={(e) => updateField("hearAboutUs", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select an option</option>
                    {HEAR_ABOUT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 py-3 px-4 font-bold uppercase tracking-wide border-2 border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 font-bold uppercase tracking-wide bg-linear-to-r from-primary-brand-500 to-secondary-brand-500 text-white rounded-lg hover:opacity-95 transition-opacity"
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
