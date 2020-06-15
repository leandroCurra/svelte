export function pannable(node) {
	let x;
	let y;

	function handleClick(event) {
            console.log( event.path[0] )
            event.path[0].animate([
                // keyframes
                { transform:' scale(1.3)' }, 
                { transform:' scale(1)' },

              ], { 
                // timing options
                duration: 200,
                iterations: 1
              });
    }
    node.addEventListener('click', handleClick);




	return {
		destroy() {
			node.removeEventListener('click', handleClick);
		}
	};
}