export type NewsContentProps = {
  title: string
  description?: string
}

export type NewsCardProps = {
  thumbnail?: string
} & NewsContentProps
