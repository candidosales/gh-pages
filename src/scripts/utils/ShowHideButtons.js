export default function showHideButtons(state) {
    document.getElementById('btn-repos').style.display = state === 'show' ? 'block' : 'none';
    document.getElementById('btn-starred').style.display = state === 'show' ? 'block' : 'none';
}