# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: lhs dynamic property assignment
> :: case: false
## Input

`````js
for(o[0] = 0 in {});
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 81921,
                        "text": "o",
                        "rawText": "o",
                        "flags": 768,
                        "start": 4,
                        "end": 5
                    },
                    "expression": {
                        "kind": 81921,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 6,
                        "end": 7
                    },
                    "flags": 256,
                    "start": 4,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 8,
                    "end": 10
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 81921,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 10,
                        "end": 12
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 768,
                        "start": 12,
                        "end": 15
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 17,
                            "end": 17
                        },
                        "flags": 256,
                        "start": 15,
                        "end": 18
                    },
                    "flags": 256,
                    "start": 10,
                    "end": 18
                },
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 18,
                "end": 18
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 19,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "for(o[0] = 0 in {});",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 18,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 18,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 18,
            "end": 19
        }
    ],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: lhs dynamic property assignment
> :: case: false
## Input

`````js
for(o[0] = 0 in {});
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: lhs dynamic property assignment
> :: case: false
## Input

`````js
for(o[0] = 0 in {});
`````
```

