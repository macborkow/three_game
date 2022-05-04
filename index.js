function main()
{
	const canvas = document.querySelector('#c');
	const renderer = new THREE.WebGLRenderer({canvas});
	const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 5);
	camera.position.z = 2;
	const scene = new THREE.Scene();
	const geometry = new THREE.BoxGeometry(1, 1, 1, 1);
	const material = new THREE.MeshPhongMaterial({color: 0x44aa88});
	const cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	{
		const light = new THREE.DirectionalLight(0xFFFFFF, 1);
		light.position.set(-1, 2, 4);
		scene.add(light);
	}
	
	function render(time) {
		time *= 0.001;
		cube.rotation.x = time;
		cube.rotation.y = time;

		renderer.render(scene, camera);

		requestAnimationFrame(render);
	}
	
	requestAnimationFrame(render);
}

main();
