
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f735168d54msha395e4cd4832db8p1ed586jsn7d495cfca090',
		'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
	}
}

const fetchIpInfo = ip => {
  return fetch('https://ip-geolocation-and-threat-detection.p.rapidapi.com/'+ip, options)
        .then(res => res.json())
        .catch(err => console.error(err))
}

const form = document.querySelector('#form')
const input = document.querySelector('#input')
const submit = document.querySelector('#submit')
const results = document.querySelector('#results')

form.addEventListener('submit',async (event) => {
  event.preventDefault()
  const {value} = input
  
  if (!value) return

  submit.setAttribute('disabled','')
  submit.setAttribute('aria-busy','true')

  const ipInfo = await fetchIpInfo(value)

  if (ipInfo) {
     results.innerHTML = JSON.stringify(ipInfo,null,2)
  }

  submit.removeAttribute('disabled')
  submit.removeAttribute('aria-busy')
})