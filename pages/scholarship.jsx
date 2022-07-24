import Head from "next/head";
import { PageLayout } from "../sections/hoc";

export default function Resources({ ...props }) {
  return (
    <div {...props}>
      <Head>
        <title>PuMP | Scholarship</title>
        <meta
          name="description"
          content="Apply to the PuMP Foundation Scholarship will provide $500 to 2 Canadian students to support them through the costs of applying to medical school."
        />
      </Head>
      <PageLayout>
        <iframe
          id="JotFormIFrame-221947443957064"
          title="PuMP Foundation Scholarship"
          onLoad={() => window.parent.scrollTo(0, 0)}
          allowtransparency="true"
          allowFullScreen={true}
          allow="geolocation; microphone; camera"
          src="https://form.jotform.com/221947443957064"
          frameBorder="0"
          style={{
            minWidth: "100%",
            height: "539px",
            border: "none",
            scrolling: "no",
          }}
        />
      </PageLayout>
    </div>
  );
}
