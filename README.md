# Generic UI

A bunch of generic/utility svelte components. Styled with tailwind. Instead of adding 300 more or less usable attributes. I tried to use `{...$$restProps}` in the best way. That should allow you (and me) to bind to/set/tweak any attribute needed, as well as overriding the class attribute.

However, there are components that are made up of more than one element, in those cases I've added a dummy attribute, like `spanClass` in the button component (where the `$$resProps` goes onto the actual button).