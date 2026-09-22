/**
 * composite.glsl — 最终合成 Fragment Shader
 *
 * 合成顺序（底→顶）：tScene(视频+骨骼) → tAfterimage(残影) → tParticle(粒子)
 * → tGeometry(几何魅影) → tAscii(字符层)；再叠加基于发光层的近似 Bloom、
 * 色彩滤镜与暗角。由 CompositePass.ts 提供全部 uniform。
 */

precision highp float;

uniform sampler2D tScene;
uniform sampler2D tAfterimage;
uniform sampler2D tParticle;
uniform sampler2D tAscii;
uniform sampler2D tGeometry;
uniform float uBloomStrength;
uniform vec3 uFilterColor;
uniform float uMaskStrength;
uniform vec2 uResolution;

varying vec2 vUv;

void main() {
  vec3 base = texture2D(tScene, vUv).rgb;
  vec3 after = texture2D(tAfterimage, vUv).rgb;
  vec3 part = texture2D(tParticle, vUv).rgb;
  vec3 geo = texture2D(tGeometry, vUv).rgb;
  vec4 asc = texture2D(tAscii, vUv);

  vec3 color = base;
  color += after;          // 残影拖尾（加色）
  color += part;           // 粒子（加色）
  color += geo;            // 几何魅影（加色）
  color = mix(color, asc.rgb, asc.a); // ASCII 覆盖层（按 alpha）

  // ── 近似 Bloom：对发光层做金角螺旋模糊后叠加 ──
  vec2 texel = 1.0 / uResolution;
  vec3 glow = vec3(0.0);
  for (int i = 0; i < 16; i++) {
    float fi = float(i);
    float ang = fi * 2.399963229;
    float rad = fi / 16.0;
    vec2 off = vec2(cos(ang), sin(ang)) * rad * texel * 9.0;
    glow += texture2D(tParticle, vUv + off).rgb;
    glow += texture2D(tGeometry, vUv + off).rgb;
  }
  glow /= 16.0;
  color += glow * uBloomStrength;

  // ── 色彩滤镜（大气色调）+ 暗角 ──
  color += uFilterColor * uMaskStrength * 0.4;
  float d = length(vUv - 0.5);
  float vig = smoothstep(0.95, 0.35, d);
  color *= mix(1.0, vig, uMaskStrength * 0.5);

  gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}
