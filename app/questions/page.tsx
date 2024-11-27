"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useFormContext } from '@/context/FormContext';
import PageWrapper from '@/components/ui/PageWrapper';
import { useRouter } from 'next/navigation';
import { Send } from "lucide-react";

export default function Questions() {
  const router = useRouter();
  const { formData, updateFormData } = useFormContext();

  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-6">Answer A Few Questions</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Why did you visit this page?
          </label>
          <Input
            value={formData.visitReason}
            onChange={(e) => updateFormData('visitReason', e.target.value)}
            placeholder="Your answer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Do you work in the technology industry?
          </label>
          <RadioGroup
            value={formData.techIndustry}
            onValueChange={(value) => updateFormData('techIndustry', value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            What&apos;s your favorite software product?
          </label>
          <Input
            value={formData.favoriteSoftware}
            onChange={(e) => updateFormData('favoriteSoftware', e.target.value)}
            placeholder="Your answer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            What excites you most about technology?
          </label>
          <Input
            value={formData.techExcitement}
            onChange={(e) => updateFormData('techExcitement', e.target.value)}
            placeholder="Your answer"
          />
        </div>

        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={() => router.push('/personal-info')}
          >
            Back
          </Button>
          <Button
            onClick={() => router.push('/thank-you')}
          >
            Submit
            <Send fill='white' />
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}