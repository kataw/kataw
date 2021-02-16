# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases

> `````js
> super
> `````

> `````js
> super()
> `````

> `````js
> super.cool
> `````

> `````js
> super[cool]
> `````

### Templates

#### object with string key

`````js
class x extends y {
  constructor() {
    ({"foo": #})
  }
}
`````

#### destructuring with string key

Note: super property is valid here, like any other property

`````js
class x extends y {
  constructor() {
    ({"foo": #} = x)
  }
}
`````

#### arrow with string key

`````js
class x extends y {
  constructor() {
    ({"foo": #}) => x
  }
}
`````

#### object with number key

`````js
class x extends y {
  constructor() {
    ({123: #})
  }
}
`````

#### destructuring with number key

Note: super property is valid here, like any other property

`````js
class x extends y {
  constructor() {
    ({123: #} = x)
  }
}
`````

#### arrow with number key

`````js
class x extends y {
  constructor() {
    ({123: #}) => x
  }
}
`````
