import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";

export function PreviewCta() {
  return (
    <section className="bg-page-bg pt-2 pb-8 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <p className="text-[14px] text-ink/65 mb-3.5 font-sans">
            Want a look inside before you apply?
          </p>
          <Button href="/preview" variant="preview" shape="pill">
            See The Platform
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
