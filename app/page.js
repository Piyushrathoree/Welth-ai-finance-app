import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
    featuresData,
    howItWorksData,
    statsData,
    testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Zap, Shield } from "lucide-react";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Hero Section */}
            <HeroSection />

            {/* Stats Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-black"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {statsData.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="glass dark:glass-dark rounded-2xl p-6 transition-all duration-300 group-hover:scale-105">
                                    <div className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                            Powerful Features for
                            <span className="block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-white bg-clip-text text-transparent">
                                Modern Finance
                            </span>
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                            Everything you need to take control of your financial life, powered by cutting-edge AI technology.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuresData.map((feature, index) => (
                            <Card key={index} className="glass dark:glass-dark border-0 hover:scale-105 transition-all duration-300">
                                <CardContent className="p-8">
                                    <div className="w-16 h-16 glass dark:glass-dark rounded-2xl flex items-center justify-center mb-6">
                                        {React.cloneElement(feature.icon, { 
                                            className: "h-8 w-8 text-neutral-900 dark:text-white" 
                                        })}
                                    </div>
                                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-50 dark:from-black dark:to-neutral-900"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                            Get Started in
                            <span className="block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-white bg-clip-text text-transparent">
                                Three Simple Steps
                            </span>
                        </h2>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {howItWorksData.map((step, index) => (
                            <div key={index} className="text-center relative">
                                <div className="glass dark:glass-dark rounded-2xl p-8 h-full">
                                    <div className="w-16 h-16 glass dark:glass-dark rounded-full flex items-center justify-center mx-auto mb-6">
                                        {React.cloneElement(step.icon, { 
                                            className: "h-8 w-8 text-neutral-900 dark:text-white" 
                                        })}
                                    </div>
                                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-neutral-600 dark:text-neutral-300">
                                        {step.description}
                                    </p>
                                </div>
                                {index < howItWorksData.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <ArrowRight className="w-8 h-8 text-neutral-400 dark:text-neutral-600" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                            Trusted by
                            <span className="block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-white bg-clip-text text-transparent">
                                Thousands of Users
                            </span>
                        </h2>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonialsData.map((testimonial, index) => (
                            <Card key={index} className="glass dark:glass-dark border-0">
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-neutral-600 dark:text-neutral-300 mb-6 italic">
                        {testimonial.quote}
                    </p>
                                    <div className="flex items-center">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={48}
                                            height={48}
                                            className="rounded-full mr-4"
                                        />
                                        <div>
                                            <div className="font-semibold text-neutral-900 dark:text-white">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                                {testimonial.role}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Transform Your
                            <span className="block bg-gradient-to-r from-white via-neutral-200 to-white bg-clip-text text-transparent">
                                Financial Life?
                            </span>
                        </h2>
                        <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
                            Join thousands of users who are already managing their finances smarter with AI-powered insights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            <Link href="/dashboard">
                                <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-white text-neutral-900 hover:bg-neutral-100 transition-all duration-300 group">
                                    Start Free Trial
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-neutral-900 transition-all duration-300">
                                Schedule Demo
                            </Button>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-neutral-300">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4" />
                                <span>Bank-level security</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4" />
                                <span>Setup in 2 minutes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
