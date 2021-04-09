# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: fooo`bar`
## Input

`````js
new fooo`bar`
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "expression": {
                    "kind": 226,
                    "member": {
                        "kind": 81921,
                        "value": "fooo",
                        "autofix": 0,
                        "flags": 768,
                        "start": 3,
                        "end": 8
                    },
                    "template": {
                        "kind": 458761,
                        "rawText": "bar",
                        "text": "bar",
                        "autofix": 0,
                        "flags": 256,
                        "start": 8,
                        "end": 13
                    },
                    "optional": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 13
                },
                "argumentList": null,
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "new fooo`bar`",
    "fileName": "__root__",
    "autofix": 0,
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
> :: case: fooo`bar`
## Input

`````js
new fooo`bar`
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: fooo`bar`
## Input

`````js
new fooo`bar`
`````
```

