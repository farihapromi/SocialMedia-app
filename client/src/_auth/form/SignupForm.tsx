import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signupValidation } from '@/lib/validation';
// import { z } from 'zod';

const SignupForm = () => {
  const isLoading = true;
  const form = useForm<z.infer<typeof signupValidation>>({
    resolver: zodResolver(signupValidation),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signupValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <div className='sm:w-420 flex-center flex-col'>
        {/* Logo + Text side-by-side */}
        <div className='flex items-center gap-2'>
          <img
            src='/assets/images/logo_final.PNG' // No need to include `/public` in the path
            alt='LinkGram logo'
            className='w-10 h-10 object-contain'
          />
          <p className='text-white text-xl font-semibold'>LinkGram</p>
        </div>

        <h3 className='h3-bold md:h2-bold pt-2 sm:pt-6 text-2xl font-bold text-white'>
          Create a new account
        </h3>

        <p className='small-medium md:base-regular text-white'>
          To use LinkGram enter your account details
        </p>
      </div>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-5  mt-4'
      >
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type='text' className='shad-input' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='Name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type='text' className='shad-input' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' className='shad-input' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' className='shad-input' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='shad-button_primary' type='submit'>
          {isLoading ? <div>Loading......</div> : 'SignUp'}
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
