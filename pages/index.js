import Page from '../layouts/main'
import Hero from '../components/hero'

import Pitch from '../components/home/pitch'
import DataAndTools from '../components/home/data-and-tools'
import Subscribe from '../components/home/subscribe'
import Partners from '../components/home/partners'

export default () => (
  <Page>
    <Hero
      title='La base adresse nationale'
      tagline='Un référentiel national ouvert : de l’adresse à la coordonnée géographique' />

    <Pitch />
    <DataAndTools />
    <Partners />
    <Subscribe />
  </Page>
)
