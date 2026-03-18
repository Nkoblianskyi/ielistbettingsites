export interface BettingSite {
  id: string
  name: string
  logo: string
  score: number
  bonus: string
  features: string[]
  paymentMethods: string[]
  link: string
  reviews: number
  /** Short offer line for card (e.g. "Get €50"); defaults to bonus if omitted */
  welcomeOffer?: string
  /** T&C snippet for card footer */
  terms?: string
}

export interface Banner {
  id: number
  title: string
  subtitle: string
  image: string
  link: string
}

export interface HorizontalBanner {
  id: number
  name: string
  logo: string
  bonus: string
  welcomeOffer: string
  link: string
  backgroundImage: string
}
