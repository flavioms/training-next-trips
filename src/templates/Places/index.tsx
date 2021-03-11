import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlaceTemplateProps) {
  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} arial-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description.html }}
          />
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <img src={image.url} alt={place.name} key={`photo-${index}`} />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
