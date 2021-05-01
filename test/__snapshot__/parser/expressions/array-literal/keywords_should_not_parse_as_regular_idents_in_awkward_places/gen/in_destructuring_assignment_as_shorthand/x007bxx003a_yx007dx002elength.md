# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: in destructuring assignment as shorthand
> :: case: {x: y}.length
## Input

`````js
[ {x: y}.length ] = x
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
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "generatorToken": null,
                                                "asyncKeyword": null,
                                                "getKeyword": null,
                                                "setKeyword": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": " y",
                                                    "flags": 96,
                                                    "start": 5,
                                                    "end": 7
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 3,
                                                    "end": 4
                                                },
                                                "flags": 32,
                                                "start": 3,
                                                "end": 7
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 3,
                                        "end": 7
                                    },
                                    "flags": 32,
                                    "start": 1,
                                    "end": 8
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "length",
                                    "rawText": "length",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 15
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 17,
                    "end": 19
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": " x",
                    "flags": 96,
                    "start": 19,
                    "end": 21
                },
                "flags": 32,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "[ {x: y}.length ] = x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

