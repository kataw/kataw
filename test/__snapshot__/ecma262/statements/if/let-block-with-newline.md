# Kataw parser test case

## Input

`````js
if (false) let // ASI
{}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 205586437,
                "flags": 96,
                "start": 4,
                "end": 9
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 10,
                    "end": 14
                },
                "flags": 16,
                "start": 10,
                "end": 14
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "start": 0,
            "end": 14
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 23,
                "end": 23
            },
            "flags": 17,
            "start": 14,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "if (false) let // ASI\n{}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

if (false)
  let; // ASI
{ }

```

### Diagnostics

```javascript
✔ No errors
```

