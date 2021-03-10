import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat
        iaculis eros, sit amet convallis neque cursus quis. Nunc id ipsum
        mauris. Praesent hendrerit consectetur egestas. Curabitur dapibus orci
        nec urna mattis, non iaculis quam sollicitudin. Mauris et magna
        sollicitudin, posuere tortor at, semper mi. Aliquam feugiat imperdiet
        tortor, vitae feugiat sem molestie commodo. Mauris sollicitudin auctor
        odio, eu ultrices est gravida et. In hac habitasse platea dictumst.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
