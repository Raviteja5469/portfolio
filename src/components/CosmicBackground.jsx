import React, { useEffect, useRef } from 'react';
import './CosmicBackground.css';

const CosmicBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Get responsive parameters based on screen size
        const getResponsiveParams = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            if (width >= 1200) {
                // Large desktop
                return {
                    starCount: 120,
                    shootingStarCount: 2,
                    starSize: { min: 1, max: 3 },
                    shootingStarSpeed: { min: 2, max: 4 }
                };
            } else if (width >= 768) {
                // Tablet and medium desktop
                return {
                    starCount: 80,
                    shootingStarCount: 2,
                    starSize: { min: 1, max: 2.5 },
                    shootingStarSpeed: { min: 1.5, max: 3 }
                };
            } else if (width >= 480) {
                // Mobile large
                return {
                    starCount: 50,
                    shootingStarCount: 1,
                    starSize: { min: 0.8, max: 2 },
                    shootingStarSpeed: { min: 1, max: 2.5 }
                };
            } else {
                // Mobile small
                return {
                    starCount: 30,
                    shootingStarCount: 1,
                    starSize: { min: 0.6, max: 1.5 },
                    shootingStarSpeed: { min: 0.8, max: 2 }
                };
            }
        };

        // Resize canvas to fill window
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Star class
        class Star {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                const params = getResponsiveParams();
                this.size = Math.random() * (params.starSize.max - params.starSize.min) + params.starSize.min;
                this.brightness = Math.random() * 0.5 + 0.5;
                this.twinkleSpeed = Math.random() * 0.02 + 0.01;
                this.twinklePhase = Math.random() * Math.PI * 2;
            }

            draw(t) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness + Math.sin(t * this.twinkleSpeed + this.twinklePhase) * 0.2})`;
                ctx.fill();
            }

            // Reposition star if it goes off screen
            checkBounds() {
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                }
            }
        }

        // Shooting Star class
        class ShootingStar {
            constructor() {
                this.reset();
            }

            reset() {
                const params = getResponsiveParams();
                this.x = Math.random() * canvas.width * 0.3; // Start from left side
                this.y = Math.random() * canvas.height * 0.3; // Start from top
                this.length = Math.random() * 40 + 30; // Shorter trails on mobile
                this.speed = Math.random() * (params.shootingStarSpeed.max - params.shootingStarSpeed.min) + params.shootingStarSpeed.min;
                this.angle = Math.PI / 4; // Diagonal trajectory
                this.opacity = 1;
                this.fadeSpeed = 0.008; // Slower fade
            }

            update() {
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;
                this.opacity -= this.fadeSpeed;
                
                // Reset when it goes off screen or fades out
                if (this.y > canvas.height || this.x > canvas.width || this.opacity <= 0) {
                    this.reset();
                }
            }

            draw() {
                if (this.opacity > 0) {
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(this.x - Math.cos(this.angle) * this.length, this.y - Math.sin(this.angle) * this.length);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
                    ctx.lineWidth = 1.5; // Thinner lines on mobile
                    ctx.stroke();
                }
            }
        }

        // Initialize stars and shooting stars with responsive parameters
        let stars = [];
        let shootingStars = [];
        
        const initializeElements = () => {
            const params = getResponsiveParams();
            stars = Array.from({ length: params.starCount }, () => new Star());
            shootingStars = Array.from({ length: params.shootingStarCount }, () => new ShootingStar());
        };
        
        initializeElements();

        // Animation loop
        let time = 0;
        let animationFrameId;

        const animate = () => {
            // Clear with slight transparency to create trail effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw stars
            stars.forEach(star => {
                star.checkBounds();
                star.draw(time);
            });

            // Update and draw shooting stars
            shootingStars.forEach(star => {
                star.update();
                star.draw();
            });

            time += 0.05; // Slower time increment
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            resizeCanvas();
            initializeElements(); // Reinitialize with new parameters
        };
        
        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="cosmic-canvas"
        />
    );
};

export default CosmicBackground;