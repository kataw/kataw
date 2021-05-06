# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: assignmen
> :: case: return => {}
## Input

`````js
x = return => {} ;
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 3,
                    "end": 3
                },
                "flags": 32,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 3
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 3,
                "end": 10
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 10,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 3
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 15,
                "end": 15
            },
            "flags": 16,
            "start": 13,
            "end": 16
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 16,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "x = return => {} ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 3, end: 10
✖ A return statement can only be used within a function_body - start: 3, end: 10
✖ Expression expected - start: 10, end: 13

```

