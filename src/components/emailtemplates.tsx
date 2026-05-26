import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Link,
  Tailwind,
  Row,
  Column,
  Img,
} from '@react-email/components'

interface ContactTemplateProps {
  name: string
  email: string
  message: string
}

export function ContactTemplate({ name, email, message }: ContactTemplateProps) {
  return (
    <Html>
        <Tailwind>
      <Body className = "bg-amber-100 ">
        <Container className=''>
          <Heading>New Contact Message</Heading>
          <Hr />
          <Section>
            <Text><strong>Name:</strong> {name}</Text>
            <Text><strong>Email:</strong> {email}</Text>
            <Text><strong>Message:</strong></Text>
            <Text>{message}</Text>
          </Section>
        </Container>
      </Body>
      </Tailwind>
    </Html>
  )
}

const font = '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
 
export function NewsletterTemplate() {
  return (
    <Html lang="en">
      <Head />
      <Tailwind>
        <Body style={{ margin: 0, padding: 0, backgroundColor: '#F5F0E8' }}>
 
          {/* Hero Section */}
          <Section style={{ backgroundColor: '#F07C00', width: '100%', padding: '56px 40px 48px' }}>
            {/* Wordmark */}
            <Text style={{
              fontFamily: font,
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.65)',
              margin: '0 0 40px 0',
            }}>
              STUDIO UNPLEASANT
            </Text>
 
            <Heading style={{
              fontFamily: font,
              fontSize: '52px',
              fontWeight: 800,
              lineHeight: '1.05',
              color: '#ffffff',
              margin: '0 0 24px 0',
              letterSpacing: '-0.02em',
            }}>
              Welcome<br />to the club.
            </Heading>
 
            <Text style={{
              fontFamily: font,
              fontSize: '17px',
              fontWeight: 400,
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.85)',
              margin: '0',
              maxWidth: '420px',
            }}>
              You're officially on the inside. You'll be the first to know about upcoming exhibits, limited drops, and everything we're cooking up next.
            </Text>
          </Section>
 
          {/* Divider accent */}
          <Section style={{ backgroundColor: '#F5F0E8', padding: '0' }}>
            <Hr style={{ borderColor: '#F07C00', borderTopWidth: '2px', margin: '0' }} />
          </Section>
 
          {/* In the meantime section */}
          <Section style={{ backgroundColor: '#F5F0E8', padding: '48px 40px 40px' }}>
            <Text style={{
              fontFamily: font,
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#F07C00',
              margin: '0 0 16px 0',
            }}>
              IN THE MEANTIME
            </Text>
 
            <Heading as="h2" style={{
              fontFamily: font,
              fontSize: '28px',
              fontWeight: 800,
              lineHeight: '1.2',
              color: '#1A1A1A',
              margin: '0 0 16px 0',
              letterSpacing: '-0.01em',
            }}>
              Catch up on what you missed.
            </Heading>
 
            <Text style={{
              fontFamily: font,
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '1.7',
              color: '#444444',
              margin: '0 0 32px 0',
            }}>
              Browse our previous exhibits and past merch drops on the site — it's a good way to get a feel for what we do and how we do it.
            </Text>
 
            <Link
              href="https://unplsnt.com"
              style={{
                fontFamily: font,
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#F07C00',
                backgroundColor: '#F5F0E8',
                padding: '14px 28px',
                textDecoration: 'none',
                display: 'inline-block',
                borderRadius: '10px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#F07C00'
              }}
            >
              View Past Exhibits →
            </Link>
          </Section>
 
          {/* Social Section */}
          <Section style={{ backgroundColor: '#EDEAD E', padding: '0 40px 48px' }}>
            <Hr style={{ borderColor: '#E0D9CC', borderTopWidth: '1px', margin: '0 0 32px 0' }} />
 
            <Text style={{
              fontFamily: font,
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#888888',
              margin: '0 0 12px 0',
            }}>
              FOLLOW ALONG
            </Text>
 
            <Text style={{
              fontFamily: font,
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: '1.6',
              color: '#555555',
              margin: '0 0 20px 0',
            }}>
              Stay up to date between drops — follow us on social for behind-the-scenes, previews, and whatever else we feel like sharing.
            </Text>
 
            <Row>
              <Column>
                <Link
                  href="https://instagram.com/unplesnt"
                  style={{
                    fontFamily: font,
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    color: '#F07C00',
                    textDecoration: 'none',
                    marginRight: '24px',
                  }}
                >
                  Instagram ↗
                </Link>
                {/* <Link
                  href="https://twitter.com/unplsnt"
                  style={{
                    fontFamily: font,
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    color: '#F07C00',
                    textDecoration: 'none',
                  }}
                >
                  Twitter / X ↗
                </Link> */}
              </Column>
            </Row>
          </Section>
 
          {/* Footer */}
          <Section style={{ backgroundColor: '#1A1A1A', padding: '28px 40px' }}>
            <Text style={{
              fontFamily: font,
              fontSize: '11px',
              fontWeight: 400,
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.35)',
              margin: '0',
              letterSpacing: '0.02em',
            }}>
              © Studio Unpleasant. You're receiving this because you signed up at unplsnt.com.{' '}
              <Link href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>
                Unsubscribe
              </Link>
            </Text>
          </Section>
 
        </Body>
      </Tailwind>
    </Html>
  )
}
 
export default NewsletterTemplate