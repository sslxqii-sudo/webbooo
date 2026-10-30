import React, { useEffect, useRef } from 'react';

/**
 * MatrixGridCanvas Component
 * Renders an animated interactive HTML5 canvas matrix-dot grid.
 * - Deep matte carbon background (#0d1117)
 * - Crisp neon emerald (#10b981) and bright lime (#a3e635 / #bef264) accents
 * - Mouse movement causes gentle perspective shifting, dot repulsion, and cyber ripple waves
 * - Click triggers expanding dual ripple waves
 */
export default function MatrixGridCanvas({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initGrid();
    };

    window.addEventListener('resize', handleResize);

    const spacing = 38;
    let dots = [];
    let ripples = [];

    const mouse = {
      x: width * 0.5,
      y: height * 0.35,
      targetX: width * 0.5,
      targetY: height * 0.35,
      isHovered: false,
      speed: 0,
    };

    let lastMousePos = { x: mouse.x, y: mouse.y };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovered = true;

      const dx = mouse.targetX - lastMousePos.x;
      const dy = mouse.targetY - lastMousePos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      mouse.speed = Math.min(dist, 40);
      lastMousePos = { x: mouse.targetX, y: mouse.targetY };

      if (dist > 18 && Math.random() > 0.6) {
        ripples.push({
          x: mouse.targetX,
          y: mouse.targetY,
          radius: 5,
          maxRadius: 180 + Math.random() * 60,
          speed: 3.5,
          strength: 1.0,
          hue: Math.random() > 0.4 ? 'emerald' : 'lime',
        });
      }
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      ripples.push({
        x: clickX,
        y: clickY,
        radius: 4,
        maxRadius: 360,
        speed: 5.5,
        strength: 1.8,
        hue: 'lime',
      });
      ripples.push({
        x: clickX,
        y: clickY,
        radius: 8,
        maxRadius: 240,
        speed: 3.8,
        strength: 1.2,
        hue: 'emerald',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    const initGrid = () => {
      dots = [];
      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            originX: i * spacing,
            originY: j * spacing,
            baseRadius: i % 2 === 0 && j % 2 === 0 ? 1.6 : 1.1,
          });
        }
      }
    };

    initGrid();

    let time = 0;

    const render = () => {
      time += 0.02;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Deep matte carbon background
      ctx.fillStyle = '#0d1117';
      ctx.fillRect(0, 0, width, height);

      // Process ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += rip.speed;
        rip.strength *= 0.965;
        if (rip.radius > rip.maxRadius || rip.strength < 0.02) {
          ripples.splice(r, 1);
        }
      }

      // 3D perspective shift relative to screen center
      const centerX = width * 0.5;
      const centerY = height * 0.5;
      const tiltX = (mouse.x - centerX) / centerX;
      const tiltY = (mouse.y - centerY) / centerY;

      // Subtle radial glow under cursor
      const glowGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        340
      );
      glowGrad.addColorStop(0, 'rgba(16, 185, 129, 0.08)');
      glowGrad.addColorStop(0.5, 'rgba(163, 230, 53, 0.03)');
      glowGrad.addColorStop(1, 'rgba(13, 17, 23, 0)');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      const mouseInfluenceRadius = 220;
      const mouseInfluenceRadiusSq = mouseInfluenceRadius * mouseInfluenceRadius;

      for (let k = 0; k < dots.length; k++) {
        const dot = dots[k];

        // 1. Perspective tilt
        const distFromCenterX = dot.originX - centerX;
        const distFromCenterY = dot.originY - centerY;
        let targetPosX = dot.originX + tiltX * (distFromCenterY * 0.03);
        let targetPosY = dot.originY + tiltY * (distFromCenterX * 0.03);

        // 2. Harmonic ambient wave motion
        targetPosX += Math.sin(time + dot.originY * 0.015) * 2;
        targetPosY += Math.cos(time + dot.originX * 0.015) * 2;

        // 3. Ripple displacement
        let rippleOffsetStrength = 0;
        let rippleColorBoost = 0;

        for (let r = 0; r < ripples.length; r++) {
          const rip = ripples[r];
          const rdx = targetPosX - rip.x;
          const rdy = targetPosY - rip.y;
          const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
          const diff = Math.abs(rdist - rip.radius);

          if (diff < 45) {
            const waveFactor = Math.sin((diff / 45) * Math.PI);
            const push = waveFactor * 12 * rip.strength;
            if (rdist > 0.01) {
              targetPosX += (rdx / rdist) * push;
              targetPosY += (rdy / rdist) * push;
            }
            rippleOffsetStrength += waveFactor * rip.strength;
            rippleColorBoost += waveFactor * rip.strength * (rip.hue === 'lime' ? 1.5 : 1);
          }
        }

        // 4. Mouse repulsion & highlight
        const mdx = targetPosX - mouse.x;
        const mdy = targetPosY - mouse.y;
        const mDistSq = mdx * mdx + mdy * mdy;

        let dotRadius = dot.baseRadius;
        let alpha = 0.18;
        let dotColor = '#10b981';

        if (mDistSq < mouseInfluenceRadiusSq) {
          const mDist = Math.sqrt(mDistSq);
          const factor = 1 - mDist / mouseInfluenceRadius;

          const pushDistance = factor * 22;
          targetPosX += (mdx / (mDist || 1)) * pushDistance;
          targetPosY += (mdy / (mDist || 1)) * pushDistance;

          dotRadius = dot.baseRadius + factor * 2.4;
          alpha = 0.35 + factor * 0.65;

          if (factor > 0.45) {
            dotColor = '#a3e635'; // bright lime accent
          } else {
            dotColor = '#34d399'; // crisp neon emerald
          }
        }

        if (rippleColorBoost > 0) {
          alpha = Math.min(1.0, alpha + rippleColorBoost * 0.7);
          dotRadius += rippleColorBoost * 1.8;
          dotColor = '#bef264';
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(targetPosX, targetPosY, Math.max(0.6, dotRadius), 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.globalAlpha = Math.min(1, Math.max(0.08, alpha));
        ctx.fill();

        // Connect nearby points to mouse with cyber line
        if (mDistSq < 9000 && mouse.isHovered) {
          const lineAlpha = (1 - Math.sqrt(mDistSq) / 95) * 0.25;
          ctx.strokeStyle = '#10b981';
          ctx.globalAlpha = lineAlpha;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(targetPosX, targetPosY);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-auto z-0 w-full h-full ${className}`}
      style={{ background: '#0d1117' }}
    />
  );
}
