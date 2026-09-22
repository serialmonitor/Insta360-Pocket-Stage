/**
 * ascii.glsl — ASCII 字符化 Fragment Shader
 *
 * 由 AsciiPass.ts 使用。将输入画面按网格降采样取亮度，映射到字符图集
 * (10x10 网格，按亮度递增排列)，输出着色字符层。
 *
 * Uniforms:
 * - tInput:  sampler2D 输入画面（视频）
 * - tAtlas:  sampler2D 字符图集 (flipY=false, nearest)
 * - uCells:  vec2 网格列/行数
 * - uColor:  vec3 字符颜色
 * - uAtlasSize: float 图集边长（=10）
 * - uVideoAspect / uCanvasAspect: cover-fit 参数
 */

precision highp float;

uniform sampler2D tInput;
uniform sampler2D tAtlas;
uniform vec2 uCells;
uniform vec3 uColor;
uniform float uAtlasSize;
uniform float uVideoAspect;
uniform float uCanvasAspect;

varying vec2 vUv;

vec2 coverFit(vec2 uv) {
  vec2 r = uv;
  if (uCanvasAspect > uVideoAspect) {
    float s = uVideoAspect / uCanvasAspect;
    r.y = (uv.y - 0.5) * s + 0.5;
  } else {
    float s = uCanvasAspect / uVideoAspect;
    r.x = (uv.x - 0.5) * s + 0.5;
  }
  return r;
}

void main() {
  vec2 cell = floor(vUv * uCells);
  vec2 cellCenter = (cell + 0.5) / uCells;
  vec2 sampUv = coverFit(cellCenter);

  float b = 0.0;
  if (sampUv.x >= 0.0 && sampUv.x <= 1.0 && sampUv.y >= 0.0 && sampUv.y <= 1.0) {
    vec3 src = texture2D(tInput, sampUv).rgb;
    b = dot(src, vec3(0.299, 0.587, 0.114));
  }

  float count = uAtlasSize * uAtlasSize;
  float idx = floor(clamp(b, 0.0, 1.0) * (count - 1.0));
  float col = mod(idx, uAtlasSize);
  float row = floor(idx / uAtlasSize);

  vec2 local = fract(vUv * uCells);
  vec2 atlasUv = (vec2(col + local.x, row + (1.0 - local.y))) / uAtlasSize;
  float ch = texture2D(tAtlas, atlasUv).r;

  gl_FragColor = vec4(uColor * ch, ch);
}
