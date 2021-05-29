# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: g
> :: test: new arg
> :: case: false
## Input

`````js
new false
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
                    "kind": 205586437,
                    "flags": 0,
                    "start": 3,
                    "end": 9
                },
                "argumentList": null,
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "new false",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

new  false();
```

### Diagnostics

```javascript
✔ No errors
```

