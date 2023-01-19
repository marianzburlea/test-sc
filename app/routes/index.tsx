import styled from 'styled-components'

const H1 = styled.h1`
  border: 10px solid red;
  border-radius: 2rem;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`

export default function Index() {
  return (
    <Box>
      <H1>test 1</H1>
      <H1>test 2</H1>
      <H1>test 3</H1>
      <H1>test 4</H1>
      <H1>test 5</H1>
      <H1>test 6</H1>
      <H1>test 7</H1>
    </Box>
  )
}
