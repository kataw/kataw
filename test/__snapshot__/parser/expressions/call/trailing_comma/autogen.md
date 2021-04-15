# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> undefined
> `````

> `````js
> Infinity
> `````

### Templates

#### not on no args

`````js
foo(,);
`````

#### not just commas

`````js
foo(,,);
`````

#### one arg

`````js
foo(x,);
`````

#### two args

`````js
foo(x,y,);
`````

#### cannot elide

`````js
foo(a,,);
`````

#### can after spread

`````js
foo(...a,);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 768,
                            "start": 4,
                            "end": 4
                        }
                    ],
                    "trailingComma": true,
                    "flags": 256,
                    "start": 4,
                    "end": 5
                },
                "flags": 256,
                "start": 0,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "text": "foo(,);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 7
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

