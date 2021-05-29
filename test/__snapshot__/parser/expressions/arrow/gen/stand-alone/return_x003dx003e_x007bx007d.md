# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: e
> :: test: stand-alone
> :: case: return => {}
## Input

`````js
return => {} ;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 6,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 0
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 11,
                "end": 11
            },
            "flags": 16,
            "start": 9,
            "end": 12
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 12,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "return => {} ;",
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
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ Identifier expected - start: 6, end: 9

```

