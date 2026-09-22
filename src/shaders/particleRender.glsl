/**
 * particleRender.glsl — 粒子渲染 Fragment Shader（柔边圆点）
 *
 * 由 ParticleSystem.ts 使用。顶点着色器在 TS 中内联定义（需读取 per-vertex
 * 的 life/seed attribute 设置 gl_PointSize）。此处仅片元：绘制发光柔边粒子。
 *
 * Varyings (来自内联顶点着色器):
 * - vLife: float — 归一化剩余生命 (0-1)，用于淡出
 * Uniforms:
 * - uColor: vec3 — 粒子颜色
 * - uOpacity: float — 全局透明度（受音频调制）
 */

precision highp float;

uniform vec3 uColor;
uniform float uOpacity;

varying float vLife;

void main() {
  vec2 pc = gl_PointCoord - 0.5;
  float d = length(pc);
  if (d > 0.5) discard;
  // 柔边 + 中心高光
  float edge = smoothstep(0.5, 0.0, d);
  float core = smoothstep(0.25, 0.0, d);
  float alpha = edge * vLife * uOpacity;
  vec3 col = uColor + core * 0.6; // 中心偏白，增强发光感
  gl_FragColor = vec4(col * alpha, alpha);
}
