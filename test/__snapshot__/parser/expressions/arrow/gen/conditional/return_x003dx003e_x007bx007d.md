# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: conditional
> :: case: return => {}
## Input

`````js
return => {} , bar;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 6,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 0
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
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
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "bar",
                "rawText": " bar",
                "flags": 96,
                "start": 14,
                "end": 18
            },
            "flags": 16,
            "start": 14,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "return => {} , bar;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ Expression expected - start: 6, end: 9
✖ Expected a `;` - start: 6, end: 9
✖ Statement expected - start: 6, end: 9
✖ Statement expected - start: 12, end: 14

```

