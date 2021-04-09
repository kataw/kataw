# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: x
> :: test: lhs is regex
> :: case: false
## Input

`````js
for (/foo/ in {});
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 166,
            "initializer": {
                "kind": 221,
                "text": "/foo/",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 10
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "multiline": false,
                    "autofix": 0,
                    "flags": 0,
                    "start": 15,
                    "end": 15
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 16
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 17,
                "end": 18
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "for (/foo/ in {});",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 62,
            "error": "Invalid left-hand side in for-in loop",
            "start": 13,
            "end": 15
        }
    ],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: x
> :: test: lhs is regex
> :: case: false
## Input

`````js
for (/foo/ in {});
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: x
> :: test: lhs is regex
> :: case: false
## Input

`````js
for (/foo/ in {});
`````
```

