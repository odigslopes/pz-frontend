'use server';

import { revalidateTag } from 'next/cache';

interface RevalidateProps {
  tag: string;
}

export async function revalidate({ tag }: RevalidateProps) {
  revalidateTag(tag);
}
