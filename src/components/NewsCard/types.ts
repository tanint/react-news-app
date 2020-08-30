export type NewsContentProps = {
  title: string
  section: string
  description?: string
}

export type NewsCardProps = {
  thumbnail?: string
} & NewsContentProps
