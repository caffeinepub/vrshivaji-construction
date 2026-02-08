import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Inquiry } from '../backend';

interface InquiryInput {
  name: string;
  email: string;
  message: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation<Inquiry, Error, InquiryInput>({
    mutationFn: async (input: InquiryInput) => {
      if (!actor) {
        throw new Error('Actor not available');
      }

      return await actor.submitInquiry(input.name, input.email, input.message);
    },
    onSuccess: () => {
      // Invalidate inquiries query if it exists (for admin views)
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}
