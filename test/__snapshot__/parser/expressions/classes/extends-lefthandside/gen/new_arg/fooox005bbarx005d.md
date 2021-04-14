# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: fooo[bar]
## Input

`````js
new fooo[bar]
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
                "kind": 210,
                "newKeyword": {
                    "kind": 4259933,
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 130,
                    "member": {
                        "kind": 81921,
                        "text": "fooo",
                        "rawText": "fooo",
                        "flags": 768,
                        "start": 3,
                        "end": 8
                    },
                    "expression": {
                        "kind": 81921,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 768,
                        "start": 9,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 13
                },
                "argumentList": null,
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "new fooo[bar]",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: fooo[bar]
## Input

`````js
new fooo[bar]
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: fooo[bar]
## Input

`````js
new fooo[bar]
`````
```

