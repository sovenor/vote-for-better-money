import { EXTERNAL_LINKS } from "@/lib/constants";

export default function StickerAddressForm() {
  return (
    <form
      action={EXTERNAL_LINKS.stickersFormUsa}
      method="POST"
      className="space-y-4"
    >
      <input type="hidden" name="source" value="voteforbetter.money" />

      <div>
        <label
          htmlFor="sticker-name"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Name <span className="text-muted font-normal">(optional)</span>
        </label>
        <input
          id="sticker-name"
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Jane Doe"
          className="w-full px-4 py-3 rounded-lg bg-background border border-card-border text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="sticker-address1"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Address Line 1
        </label>
        <input
          id="sticker-address1"
          type="text"
          name="address1"
          autoComplete="address-line1"
          placeholder="123 Liberty St"
          required
          className="w-full px-4 py-3 rounded-lg bg-background border border-card-border text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="sticker-address2"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Address Line 2{" "}
          <span className="text-muted font-normal">(optional)</span>
        </label>
        <input
          id="sticker-address2"
          type="text"
          name="address2"
          autoComplete="address-line2"
          placeholder="Apt, suite, unit"
          className="w-full px-4 py-3 rounded-lg bg-background border border-card-border text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-1">
          <label
            htmlFor="sticker-city"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            City
          </label>
          <input
            id="sticker-city"
            type="text"
            name="city"
            autoComplete="address-level2"
            placeholder="Austin"
            required
            className="w-full px-4 py-3 rounded-lg bg-background border border-card-border text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="sticker-state"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            State
          </label>
          <input
            id="sticker-state"
            type="text"
            name="state"
            autoComplete="address-level1"
            placeholder="TX"
            required
            className="w-full px-4 py-3 rounded-lg bg-background border border-card-border text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="sticker-zip"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Zip Code
          </label>
          <input
            id="sticker-zip"
            type="text"
            name="zip"
            autoComplete="postal-code"
            inputMode="numeric"
            placeholder="78701"
            required
            className="w-full px-4 py-3 rounded-lg bg-background border border-card-border text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      <input type="hidden" name="_gotcha" style={{ display: "none" }} />

      <p className="text-xs text-muted m-0 pt-2 pb-4">
        Address data is deleted after your free stickers are shipped.
      </p>

      <button type="submit" className="btn-primary">
        Send My Stickers
      </button>
    </form>
  );
}
