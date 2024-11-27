"use client"
import PageWrapper from '@/components/ui/PageWrapper'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  return (
    <PageWrapper>
          <h1 className="text-2xl font-bold mb-6">Welcome 👋🏽</h1>
          <p className="mb-6">This is a project by Bryant Mejia. The project showcases a web form built with <strong>React</strong> and <strong>Next.js</strong>. </p>
          <Button 
            className="w-full"
            onClick={() => router.push('/personal-info')}
          >
            Get Started
          </Button>
    </PageWrapper>
  );
}
