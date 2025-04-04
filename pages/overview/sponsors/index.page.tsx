import React from 'react';
import { getLayout } from '~/components/Sidebar';
import fs from 'fs';
import Head from 'next/head';
import { Headline1 } from '~/components/Headlines';
import matter from 'gray-matter';
import StyledMarkdown from '~/components/StyledMarkdown';
import { SectionContext } from '~/context';
import { DocsHelp } from '~/components/DocsHelp';
import NextPrevButton from '~/components/NavigationButtons';

export async function getStaticProps() {
  const block1 = fs.readFileSync('pages/overview/sponsors/_index.md', 'utf-8');
  const { content: block1Content } = matter(block1);
  return {
    props: {
      blocks: [block1Content],
    },
  };
}

export default function ContentExample({ blocks }: { blocks: any[] }) {
  const newTitle = 'Sponsors';
  const fileRenderType =
    'https://github.com/json-schema-org/community/blob/main/programs/sponsors/sponsors.md';
  return (
    <SectionContext.Provider value='docs'>
      <Head>
        <title>{newTitle}</title>
      </Head>
      <Headline1>{newTitle}</Headline1>
      <StyledMarkdown markdown={blocks[0]} />
      <NextPrevButton
        prevLabel='Roadmap'
        prevURL='/overview/roadmap'
        nextLabel='Use Cases'
        nextURL='/overview/use-cases'
      />
      <DocsHelp fileRenderType={fileRenderType} />
    </SectionContext.Provider>
  );
}
ContentExample.getLayout = getLayout;
