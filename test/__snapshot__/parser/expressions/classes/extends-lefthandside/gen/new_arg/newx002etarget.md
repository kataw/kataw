# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: g
> :: test: new arg
> :: case: new.target
## Options

`````js
{}
`````
## Input

`````js
new new.target
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 211,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 96,
                        "start": 3,
                        "end": 7
                    },
                    "targetIdentifier": {
                        "kind": 16594,
                        "flags": 96,
                        "start": 8,
                        "end": 14
                    },
                    "flags": 96,
                    "start": 3,
                    "end": 14
                },
                "argumentList": null,
                "flags": 96,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "new new.target",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'new.target' only allowed within functions - start: 3, end: 14

```

