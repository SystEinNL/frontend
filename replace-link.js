export default function transformer(fileInfo, api) {
    const j = api.jscodeshift;
    const root = j(fileInfo.source);

    root.find(j.JSXElement, { openingElement: { name: { name: "Link" } } })
        .forEach(path => {
            const linkElement = path.node;
            const child = linkElement.children.find(
                child => child.type === "JSXElement" && child.openingElement.name.name === "a"
            );

            if (child) {
                // Remove the <a> tag and move its children to <Link>
                const aChildren = child.children;
                linkElement.children = aChildren;

                // Merge classes from <a> to <Link>
                const linkAttributes = linkElement.openingElement.attributes;
                const aAttributes = child.openingElement.attributes;

                aAttributes.forEach(attr => {
                    if (attr.name.name === "className") {
                        const linkClass = linkAttributes.find(attr => attr.name.name === "className");
                        if (linkClass) {
                            linkClass.value.value += ` ${attr.value.value}`;
                        } else {
                            linkAttributes.push(attr);
                        }
                    }
                });
            }
        });

    return root.toSource();
}