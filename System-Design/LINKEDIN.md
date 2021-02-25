# Prompt:
### Degrees of Seperation
Please desribe how you would approach writing an algorithm to calculate the degrees of seperation between your
profile and another input profile. Provide clear examples of the descisions your make within your approach and
why you'd choose to make them. We encourage you to include an image submission in addition to your written
response which can be whiteboarded with the application of your choice.

# Solution:

## Getting Started
This first step in calculating the extent of anything is having a clear understanding of it's definitions. For LinkedIn the degree of separation is defined as the number of immediate connections required to connect you with another individual.
*First level: both parties have accept connection request, Second level: 1 first connection away, Third level: 2 connections away*
*Additionally there are connections Fourth, Fifth and Sixth level that are not publicly viewable*

## Profile Generation
The starting point for our search will be with us; the user. The most effective method of confirming the largest amount of connections would be to generate a per-user profile containing all of the users first level connections and storing these directly in our database. This gives us the ability to immediately determine the entire pool of first connections without demanding to much space on our side. In order to maximize the effectiveness of the profile the ideal approach would be to store them as {id, name, link, #ofconnections} in descending order of connections.

## Going Deeper
Next we take into consideration how our search is being performed and what resources are available to us. For the sake of the problem at hand we'll approach the issue with the minimum resources we would need to be able to confirm a connection being similar to our initial format of {id, name, link, connections}. Searches would likely be performed via a profile's link or a unique id. We start by searching for the input user in our stored first connections, if it's found we are able to confirm them as a first level connection. If it's not found we begin a recursive search of the connections of each connection of the input profile, continuing to probe deeper until a connection matching our pre-loaded first connections is found. Organizing the lists by the number of connections on each profile allows us to process the largest amount of results at each point, significantly increasing the likelihood a match is found.

## Make it better
The issue with our approach to this search is the exponential amount of data we'd need to process as we reach the Fourth, Fifth, and Sixth level connections. Much like any application there are plenty of optimizations available to us that can help. Our most powerful tools to help expedite our searches revolve around native filtering tools present in whichever stack we've approached the problem with; decreasing the amount of text being processed in our requests and responses. In example we may want to consider doing a preliminary search for matching first names on each nested connection, followed by a search for a matching last name. This will allow us to almost instantaneously complete a search for potential connections on each collection without the need to prod for further and weightier account information.

## Wrapping up
While there are a small number of potential issues with the above listed solution they mostly revolve around potential limitations such as noting being able to receiving the minimum required information to confirm or keeping the amount of processing power to a minimum. Due the to o(n) requirements of this search we can safely presume this to be the reason that linked does not track beyond sixth level connections.

![LINKED](./LINKEDIN.PNG)

###### Developed by:
##### Samuel Bjorkund(https://github.com/Bjorklundsamm)
