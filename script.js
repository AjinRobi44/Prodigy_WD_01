function changeContent(page) {
	var contentDiv = document.getElementById('content');

	switch (page) {
		case 'home':
			contentDiv.innerHTML = `
				<h2>
					Welcome to TEA BOX
				</h2>
				<p>
					Teabox offers organic green tea for weight loss, made with 100% whole leaf tea. This green tea is sourced from organic tea gardens and is free from bitterness. It is rich in antioxidants and is suitable for an active lifestyle, providing a flavorful and refreshing experience. This tea is ideal for starting your day or sipping during breaks, helping you stay refreshed throughout the day. It is recommended to store the tea in a cool, dry place away from heat, sunlight, and moisture, using an airtight container to minimize contact with oxygen.
				</p>
				<p>
					Visit the TEA BOX portal
					<a href="https://in.teabox.com/collections/green" target="_blank">
						here
					</a>.
				</p>
			`;
			break;
		case 'about':
			contentDiv.innerHTML = `
				<h2>About Us</h2>
				<h1>
					Imagine being refused teas grown in your own country...
				</h1>
				<p>
					A good story always has a great villain. In my scenario, it was the ageist notions of the Indian tea industry, which reserved its finest teas for export purposes. What was available to people was access to inferior tea variants and not the ideal tea drinking experience they deserved.
				 I realized it was high time to bring recognition to the beguiling world of Indian teas and put it on the global map.
                 Breaking the mold through constant innovation and technological know-how, I channeled my frustration of not getting a good cup of Darjeeling tea, into creating Teabox. A homegrown brand, situated at the foothills of the Himalayas, committed to bringing to your doorstep the world’s freshest Indian teas.
          
				 Teabox teas are fresh, sourced directly from the estates with no middlemen stored in dehumified facility for freshness. with over 1million Teaboxers in over 125+ countries and over 63,00+ five-star reviews, Teabox is more than just tea.It is an experience. 
				</p>
			`;
			break;
		case 'contact':
			contentDiv.innerHTML = 
				`<h2>Contact Us</h2> 
				<p>
					Feel free to reach out to us!
				</p> 
				<form> 
				<label for="name">Name:</label> 
				<input type="text" id="name" name="name" 
						placeholder="Your Name" required>
				<label for="email">Email:</label> 
				<input type="email" id="email" name="email" 
						placeholder="Your Email" required>
				<label for="message">Message:</label> 
				<textarea id="message" name="message" 
							placeholder="Your Message" 
							rows="4" required>
					</textarea>
				<button type="submit">Send Message</button> 
				</form>`;
			break;

		default:
			contentDiv.innerHTML = '<h2>Page not found!</h2>';
	}
}
