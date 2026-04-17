import React, { useEffect, useRef } from "react"
import * as THREE from "three"

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isVisible = useRef(true)
  const sceneRef = useRef<{
    scene: THREE.Scene | null
    camera: THREE.OrthographicCamera | null
    renderer: THREE.WebGLRenderer | null
    mesh: THREE.Mesh | null
    uniforms: any
    animationId: number | null
  }>({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
    animationId: null,
  })

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const { current: refs } = sceneRef

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        
        float d = length(p) * distortion;
        
        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float line1 = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float line2 = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float line3 = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);
        
        vec3 color1 = vec3(0.66, 0.33, 0.97); // Purple
        vec3 color2 = vec3(0.23, 0.51, 0.96); // Blue
        vec3 color3 = vec3(0.40, 0.20, 0.80); // Darker purple
        
        vec3 finalColor = line1 * color1 + line2 * color2 + line3 * color3;
        
        // 1. Menos opacidade no meio, mais iluminada nos cantos
        // Ajustando o centro para a área do texto (ligeiramente acima do centro exato e mais largo)
        vec2 centerOffset = vec2(0.0, 0.1);
        float distFromCenter = length(vec2(p.x * 0.4, p.y) - centerOffset);
        
        // Aumentando o contraste: bem escuro no meio, bem claro nas bordas
        float centerMask = smoothstep(0.3, 1.4, distFromCenter);
        float intensity = mix(0.02, 4.0, centerMask);
        
        // 2. Transição suave para a próxima seção (fade out na parte inferior)
        // Usando as coordenadas da tela (0 a 1)
        float normY = gl_FragCoord.y / resolution.y;
        // Começa a sumir mais cedo e de forma mais suave
        float bottomFade = smoothstep(0.0, 0.6, normY);
        
        finalColor *= intensity * bottomFade;
        
        // Calcula o alpha baseado na intensidade da cor para manter o fundo transparente
        // Aumentando o alpha nas bordas para dar mais brilho
        float alpha = max(max(finalColor.r, finalColor.g), finalColor.b) * 1.5;
        alpha = clamp(alpha, 0.0, 1.0);
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `

    const initScene = () => {
      refs.scene = new THREE.Scene()
      refs.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "high-performance" })
      // Limita o pixel ratio a 2 para evitar queda de FPS em telas retina/4k
      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      refs.renderer.setClearColor(new THREE.Color(0x000000), 0)

      refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1)

      refs.uniforms = {
        resolution: { value: [window.innerWidth, window.innerHeight] },
        time: { value: 0.0 },
        xScale: { value: 1.0 },
        yScale: { value: 0.5 },
        distortion: { value: 0.05 },
      }

      const position = [
        -1.0, -1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0,  1.0, 0.0,
      ]

      const positions = new THREE.BufferAttribute(new Float32Array(position), 3)
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", positions)

      const material = new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: refs.uniforms,
        side: THREE.DoubleSide,
      })

      refs.mesh = new THREE.Mesh(geometry, material)
      refs.scene.add(refs.mesh)

      handleResize()
    }

    const animate = () => {
      // Só renderiza e atualiza o tempo se o canvas estiver visível na tela
      if (isVisible.current) {
        if (refs.uniforms) refs.uniforms.time.value += 0.01
        if (refs.renderer && refs.scene && refs.camera) {
          refs.renderer.render(refs.scene, refs.camera)
        }
      }
      refs.animationId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms || !canvasRef.current?.parentElement) return
      const width = canvasRef.current.parentElement.clientWidth
      const height = canvasRef.current.parentElement.clientHeight
      refs.renderer.setSize(width, height, false)
      refs.uniforms.resolution.value = [width, height]
    }

    initScene()
    animate()
    
    // Intersection Observer para pausar a animação quando fora da tela
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting
      },
      { rootMargin: "100px" }
    )
    intersectionObserver.observe(canvas)

    const resizeObserver = new ResizeObserver(() => {
      handleResize()
    })
    
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      if (refs.animationId) cancelAnimationFrame(refs.animationId)
      intersectionObserver.disconnect()
      resizeObserver.disconnect()
      window.removeEventListener("resize", handleResize)
      if (refs.mesh) {
        refs.scene?.remove(refs.mesh)
        refs.mesh.geometry.dispose()
        if (refs.mesh.material instanceof THREE.Material) {
          refs.mesh.material.dispose()
        }
      }
      refs.renderer?.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full block z-[-1] pointer-events-none opacity-60 will-change-transform"
    />
  )
}
