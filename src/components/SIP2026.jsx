import { Parallax } from "react-parallax";
import { useState } from "react";
import nit from "../images/NIT2.jpg";
import about from "../images/about.jpeg";
import side from "../images/hero.svg";
import "./SIP2026.css";
import SipCarousel from "./SipCarousel";

export default function Sip() {
  const [activeTab, setActiveTab] = useState("about");

  const benefits = [
    {
      color: "#4CAF50",
      icon: "👥",
      title: "Learn from Experts",
      description: "Guided by experienced researchers & mentors."
    },
    {
      color: "#FFC107",
      icon: "🔧",
      title: "Hands-on Experience",
      description: "Work on real-world datasets, tools & research projects."
    },
    {
      color: "#9C27B0",
      icon: "📜",
      title: "Certificate",
      description: "Earn a recognized internship certificate."
    },
    {
      color: "#F44336",
      icon: "⬆️",
      title: "Career Boost",
      description: "Enhance skills and boost your career."
    }
  ];

  const tabs = [
    { id: "about", label: "About" },
    { id: "guidelines", label: "Guidelines" },
    { id: "objectives", label: "Objectives" },
    { id: "institution", label: "Institution" },
    { id: "contact", label: "Contact" },
  ]

  const objectives = [
    {
      title: "Biomedical signal acquisition and processing in biosensors",
      items: [
        "Fundamentals of Signal Acquisition & Front-End Design Understanding biomedical sensors and instrumentation",
        "Integration & Systems",
        "Signal Processing & Analysis",
        "Hands-on experience with biomedical signal acquisition devices",
      ],
    },
    {
      title: "Advanced machine learning and deep learning techniques for Biomedical Applications",
      items: [
        "Generative AI & Large Language Models (LLMs)",
        "Deep learning models (CNN, RNN, LSTM) for signal and image analysis",
        "Privacy-Preserving Machine Learning",
        "Multi-Modal & Self-Supervised Learning",
        "Vision and Sequence Transformers",
        "Model evaluation and optimization for medical applications",
      ],
    },
    {
      title: "Opto-Biomedical instrumentation",
      items: [
        "Fundamentals of Light-Tissue Interaction",
        "Advanced Imaging Techniques, such as, OCT, DOT, STED etc",
        "Optical Sensors and Biosensors",
        "Therapeutic Applications (Light as Treatment)",
        "Hands on training on the assembly of optical devices"
      ],
    },
    {
      title: "Biofabrication and organ-on-chip devices",
      items: [
        "Biofabrication and organ-on-chip devices",
        "Biofabrication: Building the Tissue using Additive Manufacturing (Bioprinting, 3D-printing)",
        "Organ-on-a-Chip (OoC) Design",
        "Hands on training on the Biofabrication and Microfluidic devices"
      ],
    },
    {
      title: "Product development in area of medical devices ",
      items: [
        "Biomedical Product development life cycle",
        "Medical device regulatory and Quality Management ",
        "SaMD as Medical Devices",
        "Hands-on training on product development process"
      ],
    },
    {
      title: "Course Outcomes",
      items: [
        "Comprehensive understanding of the theoretical concepts on medical signal and image processing",
        "Hands-on experiment on medical devices including ECG, EMG, VEP, and BERA",
        "Theoretical aspects of AI-based techniques",
        "Implementation of AI techniques using popular software tools and programming languages",
        "Clinical integration of AI in medical signal and image processing"
      ],
    },
  ];

  return (
    <div>
      <div className="banner-container">
        <div className="banner-contentnt">
          <h1 className="banner-title gradient-text">SUMMER INTERNSHIP PROGRAM-2026</h1>
          <p className="banner-subtitle gradient-text">
            A Bridge Course For <strong>Biotechnology</strong> and <strong>Medical Engineering</strong> <br/>
            (Hybrid Mode: Online + Onsite at NIT Rourkela)
          </p>
          <p className="banner-details gradient-text">
            Course Duration: <strong>1st June - 15th July</strong> <br />
            Last Date for Application: <strong>20th May, 2026</strong>
          </p>
          <a href="https://forms.gle/9roLWQCaiNvgog6G8" target="_blank" rel="noopener noreferrer">
            <button className="apply-button">Apply Now</button>
          </a>
          <div class="download-brochure">
            <a href="../files/SIP_Brochure_2026.pdf" download class="download-btn">Download Brochure</a>
          </div>
        </div>
      </div>

      <section className="features">
        <div className="benefits-colored-section">
          <h2>Program Highlights</h2>
          <div className="colored-row">
            {benefits.map((benefit, index) => (
              <div className="colored-card" key={index}>
                <div
                  className="colored-icon"
                  style={{ backgroundColor: benefit.color }}
                >
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="tabs-section">
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "about" && (
          <div className="tab-content">
            <div className="about-section">
              <div className="about-image">
                <img src={about} alt="About SIP" />
              </div>
              <div className="about-content">
                <h2>ABOUT SIP 2026</h2>
                <p>
                  The summer internship program at NIT Rourkela is designed to provide comprehensive short-term training on biomedical engineering – a bridge course for those
                  engineering/sciences students (UG/PG/Diploma) willing to explore the burgeoning field of biomedical engineering/Medical devices.
                  The course will span for 45 Days comprising of 15 days lecture series in virtual mode and 30 days hands on training through working on real-life projects in hybrid mode.
                  The 15 days lecture series would focus on advanced machine learning and deep learning techniques, biomedical signal acquisition and processing in biosensors,
                  biomedical instrumentation, product development in area of medical devices and others. A key highlight of the internship is a competitive challenge,
                  where students will apply their acquired skills to develop and optimize machine learning models for advance biomedical applications.
                  This competition will encourage innovation and problem-solving, with awards for the best model design.
                  The Summer Internship certificate having bridge course is conducted exclusively in hybrid mode (off line / online), the program spans 45 days,
                  during which participants will gain in-depth knowledge and practical exposure to various biomedical Engineering aspects and completing the relevant projects.
                  The projects will be assigned as a team or individual based on the work picked by the students/ interns.
                  The training will cover essential topics such as acquisition of biomedical signals, advanced machine learning and deep learning techniques,
                  biomedical signal acquisition and processing in biosensors, biomedical instrumentation, product development in area of medical devices and others. Additionally,
                  students will learn data processing techniques for biomedical signals and images, enabling them to extract meaningful insights from complex datasets and
                  empowering participants to develop AI-driven solutions for biomedical applications.Multiple keynote international speakers will deliver lectures in the initial training duration on recent advance topics on biomedical Engineering.
                </p>
              </div>
            </div>
          </div>
        )
        }

        {
          activeTab === "guidelines" && (
            <div className="tab-content">
              <div className="registration-content">
                <div>
                  <h2>Important Guidelines</h2>
                  <ul>
                    <li>
                      Please fill the application form carefully. Before filling the form,
                      first you have to pay the registration fee and note the transaction ID
                      and keep a copy of the receipt.
                    </li>
                    <li>
                      The selected students must carry an email copy of the Approval letter
                      while entering the NIT Rourkela.
                    </li>
                    <li>
                      All students are advised to bring their laptop, considering the
                      restricted academic hours availability of the Labs.
                    </li>
                    <li>
                      Identity card of the Institute where you are currently studying, and
                      Aadhar card for accommodation. Also, bring 2 passport size
                      photographs for ID card.
                    </li>
                    <li>
                      Accommodation and logistics can be provided upon request, subject to
                      availability. As per the rules of NIT-RKL you have to pay extra ₹7500/-
                      for one month accommodation.
                    </li>
                  </ul>
                </div>
                <h2>Important Dates</h2>
                <ul>
                  <li>Registration Closes on <strong>20th May 2026.</strong></li>
                  <li>Early registries will be assigned projects early and monitored the progress of the project.</li>
                  <li>Course duration: <strong>1st June 2026 to 15th July 2026 (45 days).</strong></li>
                  <li>1st June to 15th June 2026 training on various topics through lecture series.</li>
                  <li>Multiple keynote international speakers will deliver lectures in the initial training duration on recent advance topics on biomedical Engineering.</li>
                  <li>15th and 16th June Internship projects will be officially assigned and mentor allotted.</li>
                  <li>7th July to 15th July: Project evaluation and certification issue.</li>
                </ul>
                <div className="bank-details-section">
                  <h2>Bank Account Details for Registration</h2>

                  <p className="fee-info">
                    <strong>Registration Fee:</strong> For full course (45 Days): ₹5900/- (Including GST)
                  </p>
                  <table className="bank-table">
                    <tbody>
                      <tr>
                        <th>Account Name:</th>
                        <td>CONTINUING EDUCATION NIT ROURKELA</td>
                      </tr>
                      <tr>
                        <th>Account No:</th>
                        <td>10138951784</td>
                      </tr>
                      <tr>
                        <th>Bank Name:</th>
                        <td>State Bank of India (002109)</td>
                      </tr>
                      <tr>
                        <th>Branch:</th>
                        <td>NIT Rourkela Campus</td>
                      </tr>
                      <tr>
                        <th>IFSC Code:</th>
                        <td>SBIN0002109</td>
                      </tr>
                    </tbody>
                  </table>

                  <p className="payment-note">
                    Payment should be done to the above provided details.
                  </p>
                </div>
              </div>
            </div>
          )
        }

        {
          activeTab === "objectives" && (
            <div className="tab-content">
              <div className="objectives-section">
                <div className="objectives-content">
                  <h2>The key objectives of the Summer internship program
                    A bridge course for Biotechnology and Biomedical Engineers</h2>
                  <div className="objectives-grid">
                    <div className="grid-container">
                      {objectives.map((obj, index) => (
                        <div className="grid-card" key={index}>
                          <h3>{obj.title}</h3>
                          <ul>
                            {obj.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }

        {
          activeTab === "institution" && (
            <div className="tab-content">
              <div className="institution-section">
                <h2>About NIT Rourkela</h2>
                <p>The National Institute of Technology Rourkela (NIT Rourkela), formerly known as the Regional Engineering College until its renaming on 26th June 2002, located in the steel city of Rourkela, Odisha, India,  NIT Rourkela holds prestigious rankings, including 19th in the NIRF Rankings 2024 for Indian Engineering Universities, 317th in the QS Asia University Rankings 2025, 167th in the QS World University Sustainable Rankings 2025 (Asia region), and within the 601–800 band in the Times Higher Education World University Rankings (Engineering) for 2024–25. The institute's mission is to become an internationally acclaimed center of learning, serving as a beacon of knowledge and expertise for society while establishing itself as a preferred destination for udergraduate and postgraduate studies.</p>
              </div>
              <div className="institution-section">
                <h2>About the Department </h2>
                <p> The Department of Biotechnology and Medical Engineering, established in 2007 at NIT Rourkela, serves as a multidisciplinary hub for cutting edge research and education at the interface of biological systems, engineering, and healthcare innovation. Over the years, the department has built a thriving ecosystem of translational research and technology development,  With over 1,600 peer-reviewed publications, more than 100 sponsored projects funded by leading agencies such as DBT, DST, SERB, and ICMR, and five patents filed or granted. The faculty members have diverse research interests and they conduct both basic and applied research in diverse areas such as Cell & Molecular Engineering, Biomaterials & Tissue Engineering, Bioprocess Engineering, Environmental & Plant Biotechnology, Biomechanics & Biotransport Engineering, and Medical Electronics & Instrumentation.</p>
              </div>
            </div>
          )
        }

        {
          activeTab === "contact" && (
            <div className="tab-content">
              <div className="contact-section">
                <h2>Contact Information</h2>

                <div className="contact-block">
                  <h3>Faculty Coordinators</h3>
                  <ul>
                    <li>Prof. Earu Banoth : <a href="mailto:banothe@nitrk.ac.in">banothe@nitrk.ac.in</a></li>
                    <li>Prof. Khalid Mirza Baig : <a href="mailto:jsiva@nitrkl.ac.in">jsiva@nitrkl.ac.in</a></li>
                    <li>Prof. Prasoon Kumar : <a href="mailto:kumarprasoon@nitrkl.ac.in">kumarprasoon@nitrkl.ac.in</a></li>
                    <li>Prof. Amrita Singh : <a href="mailto:singham@nitrkl.ac.in">singham@nitrkl.ac.in</a></li>
                  </ul>
                </div>

                <div className="contact-block">
                  <h3>General Email</h3>
                  <p><a href="mailto:sip.obms.nitrkl@gmail.com">sip.obms.nitrkl@gmail.com</a></p>
                  <p>
                    Department of Biotechnology & Medical Engineering,<br />
                    National Institute of Technology Rourkela,<br />
                    Odisha 769008, India.
                  </p>
                </div>

                <div className="contact-block">
                  <h3>Student Coordinators</h3>
                  <ul>
                    <li>Mr. Soumyajyoti De : <a href="tel:9564540744">9564540744</a></li>
                    <li>Mr. Tushar : <a href="tel:8763359276">8763359276</a></li>
                  </ul>
                </div>
              </div>
            </div>
          )
        }
      </section >
      <SipCarousel />
      <section className="cta">
        <h2>Ready to start your journey?</h2>
        <button className="btn">Apply Now</button>
      </section>
    </div >

  )
}

