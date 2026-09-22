/**
 * particleSim.glsl — 粒子模拟参考 Shader
 *
 * 说明：本实现采用 CPU 粒子模拟（THREE.Points + BufferGeometry 逐帧更新），
 * 以获得跨设备可靠性并规避 float render target 依赖，符合计划中的降级策略。
 * 故本 GPGPU 模拟 shader 未被引用，保留占位以维持文件契约。
 * 粒子物理（发射/重力/阻尼/生命衰减）见 ParticleSystem.ts。
 */

void main() {
  gl_FragColor = vec4(0.0);
}
