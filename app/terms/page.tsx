import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that apply to using invidiousentertainment.com and the material published on it.",
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "August 18, 2026";

export default function Terms() {
  return (
    <main className="px-7 pb-[120px] pt-[160px]">
      <div className="mx-auto max-w-[720px]">
        <span className="mb-[18px] inline-block text-[0.72rem] font-medium uppercase tracking-[0.32em] text-gold">
          Legal
        </span>
        <div className="mb-[30px] h-px w-16 bg-gold opacity-70" />
        <h1 className="mb-4 font-display text-[clamp(2.2rem,5vw,3rem)] font-semibold leading-[1.15]">
          Terms of Use
        </h1>
        <p className="mb-[50px] text-[0.85rem] uppercase tracking-[0.15em] text-text-muted">
          Last updated {LAST_UPDATED}
        </p>

        <div className="prose">
          <p>
            These terms apply to your use of invidiousentertainment.com. By
            using the site, you agree to them. They are written to be read, not
            to be impenetrable.
          </p>

          <h2>Ownership of the work</h2>
          <p>
            Everything published on this site — the writing, images, logo, name,
            design, and any excerpts of films, scripts, or novels — belongs to
            Invidious Entertainment and Jey Lofton, and is protected by
            copyright. The work is the entire point of the company; please treat
            it accordingly.
          </p>

          <h2>What you may do</h2>
          <p>
            Read it, quote briefly from it with attribution and a link back,
            share links to it, and reference it in reviews, coverage, or
            criticism. That is all ordinary and welcome.
          </p>

          <h2>What you may not do</h2>
          <p>
            Republish a piece in full elsewhere, present the work as your own,
            use it to train a machine learning model, sell it, or adapt it into
            another form without written permission. If you want to do something
            beyond the ordinary use above, ask — the answer is often yes when
            the request is made.
          </p>

          <h2>Using the contact form</h2>
          <p>
            The contact form is for genuine correspondence: inquiries,
            collaborations, and opportunities. Do not use it for spam, bulk
            solicitation, or anything unlawful. Do not send confidential
            material, and do not send unsolicited creative submissions — we
            cannot accept unsolicited pitches, scripts, or manuscripts, and any
            such material sent to us is not treated as confidential and creates
            no obligation of any kind.
          </p>

          <h2>Accuracy and availability</h2>
          <p>
            The site describes work that is in development. Details, timelines,
            and plans described here may change, and nothing on this site is a
            commitment to release any particular project. We also make no
            promise that the site will always be available or error-free.
          </p>

          <h2>External links</h2>
          <p>
            Links to other sites are provided for convenience. We do not control
            those sites and are not responsible for their content.
          </p>

          <h2>Liability</h2>
          <p>
            The site is provided as is. To the fullest extent permitted by law,
            Invidious Entertainment is not liable for any loss arising from your
            use of it.
          </p>

          <h2>Changes</h2>
          <p>
            These terms may be updated. The date at the top reflects the current
            version, and continuing to use the site means the current version
            applies.
          </p>

          <h2>Contact</h2>
          <p>
            Questions, or a permission request, can go to{" "}
            <strong>info@invidiousentertainment.com</strong> or through the{" "}
            <Link href="/#contact">contact form</Link>. See also our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
