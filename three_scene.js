let scene, camera, renderer, knot;

function initThreeScene() {
    const container = document.getElementById('three-canvas');
    if (!container || !window.THREE) return;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 4;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(1.2, 0.25, 128, 16);
    const material = new THREE.MeshNormalMaterial({ wireframe: false });
    knot = new THREE.Mesh(geometry, material);
    knot.position.y = 0.5;
    scene.add(knot);
    
    window.addEventListener('resize', onWindowResize, false);
    
    animate();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function updateThreeOnScroll(scrollY) {
    if (knot) {
        const scrollRatio = scrollY / (document.body.scrollHeight - window.innerHeight);
        knot.rotation.y = scrollRatio * Math.PI * 2;
        knot.rotation.x = scrollRatio * Math.PI;
        knot.position.y = 0.5 - scrollRatio * 1.5;
    }
}

export { initThreeScene, updateThreeOnScroll };
