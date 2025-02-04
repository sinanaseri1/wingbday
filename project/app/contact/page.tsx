'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Instagram, Twitter, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto space-y-12"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold">Get in Touch</h1>
            <p className="mt-4 text-muted-foreground">
              I'd love to hear from you. Let's create something amazing together.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: true })}
                className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2"
              />
              {errors.name && (
                <span className="text-sm text-destructive">Name is required</span>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2"
              />
              {errors.email && (
                <span className="text-sm text-destructive">Valid email is required</span>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                {...register('message', { required: true })}
                className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2"
              />
              {errors.message && (
                <span className="text-sm text-destructive">Message is required</span>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}