"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: Record<string, unknown>) => void;
      };
    };
  }
}

type Props = {
  portalId: string;
  formId: string;
  region?: string;
};

export function HubSpotForm({ portalId, formId, region = "na1" }: Props) {
  const targetId = `hs-form-${formId.replace(/-/g, "")}`;
  const initialised = useRef(false);

  useEffect(() => {
    if (initialised.current) return;
    initialised.current = true;

    const init = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: `#${targetId}`,
        });
      }
    };

    // If script already loaded (e.g. two forms on one page), just init
    if (window.hbspt) {
      init();
      return;
    }

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.onload = init;
    document.body.appendChild(script);
  }, [portalId, formId, region, targetId]);

  return (
    <div
      id={targetId}
      className="[&_.hs-form]:flex [&_.hs-form]:flex-col [&_.hs-form]:gap-4
        [&_label]:block [&_label]:text-[13.5px] [&_label]:font-medium [&_label]:text-ink/80 [&_label]:mb-1
        [&_input]:w-full [&_input]:bg-white [&_input]:border [&_input]:border-line [&_input]:rounded-xl [&_input]:px-4 [&_input]:py-3 [&_input]:text-[15px] [&_input]:text-navy [&_input]:outline-none
        [&_select]:w-full [&_select]:bg-white [&_select]:border [&_select]:border-line [&_select]:rounded-xl [&_select]:px-4 [&_select]:py-3 [&_select]:text-[15px] [&_select]:text-navy [&_select]:outline-none
        [&_textarea]:w-full [&_textarea]:bg-white [&_textarea]:border [&_textarea]:border-line [&_textarea]:rounded-xl [&_textarea]:px-4 [&_textarea]:py-3 [&_textarea]:text-[15px] [&_textarea]:text-navy [&_textarea]:outline-none [&_textarea]:min-h-[110px]
        [&_.hs-button]:mt-2 [&_.hs-button]:inline-flex [&_.hs-button]:items-center [&_.hs-button]:font-sans [&_.hs-button]:font-medium [&_.hs-button]:text-[15px] [&_.hs-button]:rounded-full [&_.hs-button]:px-7 [&_.hs-button]:py-[13px] [&_.hs-button]:bg-navy [&_.hs-button]:text-white [&_.hs-button]:border [&_.hs-button]:border-navy [&_.hs-button]:cursor-pointer
        [&_.hs-error-msgs]:text-[12px] [&_.hs-error-msgs]:text-red-500 [&_.hs-error-msgs]:mt-1 [&_.hs-error-msgs]:list-none [&_.hs-error-msgs]:p-0"
    />
  );
}
