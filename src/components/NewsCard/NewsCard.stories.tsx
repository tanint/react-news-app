import React from 'react'
import styled from '@emotion/styled'

import NewsCard from './NewsCard'
import NewsContent from './NewsContent'

export const Overview = () => {
  return (
    <NewsCard
      title={mockPost.title}
      description={mockPost.body}
      thumbnail={mockPost.thumbnail}
      section={mockPost.section}
    />
  )
}

export const NoDescription = () => {
  return <NewsCard title={mockPost.title} section={mockPost.section} />
}

export const OnlyTitle = () => {
  return <NewsContent title={mockPost.title} section={mockPost.section} />
}

export default {
  title: 'NewsCard',
  decorators: [(story) => <DecoBox>{story()}</DecoBox>],
}

const DecoBox = styled.div(() => ({
  maxWidth: '500px',
}))

const mockPost = {
  title: `Like Elgin Baylor before them, the NBA's Black players have had enough`,
  thumbnail:
    'https://media.guim.co.uk/097ac43a4f593084f5481c1e76522e33176065d8/0_175_2949_1769/500.jpg',
  section: 'sport',
  body: `This week Letetra Wildman, the sister of Jacob Blake, delivered a gripping message: “I don’t want your pity, I want change”. Apparently, the NBA received her memo. It all started with the news on Wednesday that the Milwaukee Bucks decided to boycott their playoff game after Blake, a Black man, was shot seven times in the back by a white police officer in the team’s home state of Wisconsin. Soon, the NBA cancelled the rest of Wednesday’s playoff games and leagues such as the WNBA, MLB and MLS followed suit. On television, former player Chris Webber delivered an emotional address as he fought back tears: “We understand it’s not going to end. But that does not mean young men that you don’t do anything. Don’t listen to these people telling you don’t do anything because it’s not going to end right away.” Everyone has weighed in with their opinions since the Bucks announced their boycott. Many questioned whether a boycott can really change the inequality and racism at the heart of America. Or what refusing to play basketball has to do with Jacob Blake or George Floyd or Breonna Taylor or any of the other countless Black men and Black women who have been unjustly injured or killed by the police with no accountability. I’m glad you asked. In July, I wrote an article detailing how much power NBA teams – and their billionaire CEOs – wield in the cities where they play. Money talks and it is well known that lost revenue has a way of motivating organizations to action at lightning speeds. Although teams are currently playing in a socially isolated bubble in Florida, people in their home bases will have seen players – and some CEOs – are willing to take action on racial injustice. If, in the future, a team threatened to leave a city if nothing is done on, say, police reform, civic leaders may well listen. It has worked before.`,
}
