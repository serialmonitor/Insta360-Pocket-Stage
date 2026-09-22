/**
 * afterimage.glsl — 残影/拖尾累积 Fragment Shader
 *
 * 由 AfterimagePass.ts 使用。基于当前视频帧与上一视频帧的差异得到运动掩码，
 * 仅在运动区域注入当前颜色，与历史累积缓冲按 uFade 衰减取 max，形成拖尾。
 * 静止区域随时间衰减到黑，故本层只贡献"运动残影"，避免与底层视频重复。
 *
 * Uniforms:
 * - tVideoCur:  sampler2D 当前视频帧（已 cover-fit 到画布空间）
 * - tVideoPrev: sampler2D 上一帧视频（画布空间）
 * - tHistory:   sampler2D 上一帧残影累积（ping-pong）
 * - uFade:        float 拖尾衰减 (0-1，越大越久)
 * - uSensitivity: float 运动灵敏度 (0-1)
 * - uColor:       vec3  残影着色
 */

precision highp float;

uniform sampler2D tVideoCur;
uniform sampler2D tVideoPrev;
uniform sampler2D tHistory;
uniform float uFade;
uniform float uSensitivity;
uniform vec3 uColor;

varying vec2 vUv;

void main() {
  vec3 cur = texture2D(tVideoCur, vUv).rgb;
  vec3 prevV = texture2D(tVideoPrev, vUv).rgb;
  vec3 hist = texture2D(tHistory, vUv).rgb;

  float m = length(cur - prevV);
  // sensitivity 越大越敏感 → 阈值越低
  float thresh = mix(0.45, 0.08, uSensitivity);
  float mask = smoothstep(thresh, thresh + 0.2, m);

  // 当前运动区域只轻微注入，作为拖尾种子；历史按 fade 衰减形成尾迹
  vec3 inject = cur * mask * 0.6;
  vec3 acc = max(inject, hist * clamp(uFade, 0.0, 0.97));

  // 纯色着色（不过度提亮），整体压暗避免与底层视频叠加过曝
  acc *= uColor;

  gl_FragColor = vec4(acc * 0.75, 1.0);
}
