/*
**  Just Fucking Embed Me Anyway
*/

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('ebtn').addEventListener('click', () => {
    const val = document.getElementById('jfema').value
    try {

      // Attempt to parse URL and get vidID
      const parsedURL = new URL(val)
      const vidID = parsedURL.searchParams.get('v')

      if (typeof vidID !== "string") {
        throw new Error("Video parameter not found in URL")
      }

      // Generate properties string
      const properties = Object.entries({
        src:          `https://www.youtube.com/embed/${vidID}`,
        width:        "560",
        height:       "315",
        frameborder:  "0"
      }).map(([k, v]) => `${k}=\"${v}\"`).join(' ')

      // Generate result HTML
      const result = `<iframe ${properties}></iframe>`

      // Alter result Textarea
      const txt = document.createTextNode(result)
      const area = document.getElementById('result')
      area.innerHTML = ""
      area.appendChild(txt)

      // Alter preview
      document.getElementById('preview').innerHTML = result

      // Remove errors
      document.getElementById('errors').innerHTML = ""
    } catch(error) {
      document.getElementById('errors').innerHTML = [
        "An error occured - Check the link you entered.",
        "Your link must be a valid youtube video.",
        "Just copy/paste the video URL, and it should work fine ! :)"
      ].join('<br/>')
      console.log(error)
    }
  })
})
