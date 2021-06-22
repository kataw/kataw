# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases

> `````js
> var
> `````

> `````js
> let
> `````

> `````js
> const
> `````

### Templates

#### base case array

`````js
# [x] = v
`````

#### base case obj

`````js
# {x} = v
`````

#### arr with parens

`````js
# [(x)] = v
`````

#### obj with parens

`````js
# {(x)} = v
`````

#### value that is a member expression

`````js
# {a: b.c} = v
`````

#### shorthand that is a member expression

`````js
# {a.b} = v
`````

#### key that is a member expression

`````js
# {a.b: c} = v
`````

#### key that is computed

`````js
# {[a]: c} = v
`````

#### member key that is computed

`````js
# {[a.b]: c} = v
`````

#### shorthand that is computed

`````js
# {[a]} = v
`````

#### member value on key that is computed

`````js
# {[a]: b.c} = v
`````
