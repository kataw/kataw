# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: s
> :: test: for-in lhs
> :: case: fooo.bar
## Input

`````js
for (fooo.bar in x) ;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 129,
                "member": {
                    "kind": 134299649,
                    "text": "fooo",
                    "rawText": "fooo",
                    "flags": 96,
                    "start": 5,
                    "end": 9
                },
                "expression": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 10,
                    "end": 13
                },
                "flags": 536870944,
                "start": 5,
                "end": 13
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 13,
                "end": 16
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 19,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "for (fooo.bar in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

for (fooo.bar in x);
```

### Diagnostics

```javascript
✔ No errors
```

