"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from '@/context/FormContext';
import PageWrapper from '@/components/ui/PageWrapper';
import { useRouter } from 'next/navigation';

export default function PersonalInfo() {
  const router = useRouter();
  const { formData, updateFormData } = useFormContext();

  const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

  return (
    <PageWrapper key={window.location.pathname}>
          <h2 className="text-2xl font-bold mb-6">Tell Me About Yourself</h2>
          <p className='mb-6'>Please share your name and interests in technology. Your information will not be saved or shared.</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <Input
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Age</label>
              <Input
                type="number"
                value={formData.age}
                onChange={(e) => updateFormData('age', e.target.value)}
                placeholder="Your age"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <Input
                value={formData.city}
                onChange={(e) => updateFormData('city', e.target.value)}
                placeholder="Your city"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <Select
                value={formData.state}
                onValueChange={(value) => updateFormData('state', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a state" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-between pt-4">
              <Button 
                variant="outline" 
                onClick={() => router.push('/')}
              >
                Back
              </Button>
              <Button 
                onClick={() => router.push('/questions')}
              >
                Next
              </Button>
            </div>
          </div>
    </PageWrapper>
  );
}