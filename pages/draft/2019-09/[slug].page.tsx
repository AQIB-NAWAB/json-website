import Layout, { ContentLayout } from '~/components/Layout'
import StyledMarkdown from '~/components/StyledMarkdown'
import Head from 'next/head'
import React from 'react'
import getStaticMarkdownPaths from '~/lib/getStaticMarkdownPaths'
import getStaticMarkdownProps from '~/lib/getStaticMarkdownProps'
import { Headline1 } from '~/components/Headlines'
import { SectionContext } from '~/context'

export async function getStaticPaths() { return getStaticMarkdownPaths('pages/draft/2019-09') }
export async function getStaticProps(args: any) { return getStaticMarkdownProps(args, 'pages/draft/2019-09') }

export default function StaticMarkdownPage({ frontmatter, content }: { frontmatter: any, content: any }) {
  return (
    <SectionContext.Provider value={frontmatter.section || null}>
      <Layout>
        <ContentLayout>
          <Head>
            <title>JSON Schema - {frontmatter.title}</title>
          </Head>
          <Headline1>{frontmatter.title}</Headline1>
          <StyledMarkdown markdown={content} />
        </ContentLayout>
      </Layout>
    </SectionContext.Provider>
  )
}
