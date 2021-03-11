import Image from 'next/image'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'
import { useRouter } from 'next/dist/client/router'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlaceTemplateProps) {
  const router = useRouter()
  if (router.isFallback) return null

  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} arial-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                width={1000}
                height={600}
                quality={75}
                src={image.url}
                alt={place.name}
                key={`photo-${index}`}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
