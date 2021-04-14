# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: new.target
## Input

`````js
new new.target
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
                    "kind": 211,
                    "name": {
                        "kind": 81921,
                        "text": "target",
                        "rawText": "target",
                        "flags": 768,
                        "start": 8,
                        "end": 14
                    },
                    "flags": 768,
                    "start": 3,
                    "end": 14
                },
                "argumentList": null,
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "new new.target",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 80,
            "error": "'new.target' only allowed within functions",
            "start": 8,
            "end": 14
        }
    ],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: new.target
## Input

`````js
new new.target
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: new.target
## Input

`````js
new new.target
`````
```

