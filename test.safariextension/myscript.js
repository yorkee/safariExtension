//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	// v = v.replace(/\bpasta\b/g, "shit");
	v = v.replace(/\bbread\b/g, "shit");
	v = v.replace(/\bbreads\b/g, "shit");
	v = v.replace(/\bBread\b/g, "shit");
	v = v.replace(/\bBreads\b/g, "shit");
	v = v.replace(/\bScones\b/g, "shit");
	// v = v.replace(/\bBuns\b/g, "shit");
	// v = v.replace(/\bspaghetti\b/g, "shit");
	// v = v.replace(/\bfood\b/g, "shit");
	// v = v.replace(/\bfoods\b/g, "shit");

	v = v.replace(/\bmind?\b/g, "shithead?");
	v = v.replace(/\bstatus\b/g, "shit");
	v = v.replace(/\bStatus\b/g, "shit");
	v = v.replace(/\bPhotos\b/g, "shit");
	v = v.replace(/\bVideo\b/g, "poops");
	v = v.replace(/\bProfile\b/g, "shit");
	v = v.replace(/\bfriend\b/g, "shit");
	v = v.replace(/\bfriends\b/g, "shit");
	v = v.replace(/\bFriend\b/g, "shit");
	v = v.replace(/\bFriends\b/g, "shit");	
	v = v.replace(/\bHome\b/g, "Shit");
	v = v.replace(/\bpeople\b/g, "shit");
	v = v.replace(/\bplaces\b/g, "shit");
	v = v.replace(/\bthings\b/g, "more shit");
	
	textNode.nodeValue = v;
}