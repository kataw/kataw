# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: g
> :: test: new arg
> :: case: null
## Input

`````js
new null
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
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 138477575,
                    "flags": 0,
                    "start": 3,
                    "end": 8
                },
                "argumentList": null,
                "flags": 32,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "new null",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

new  null();
```

### Diagnostics

```javascript
✔ No errors
```

