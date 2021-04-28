# Kataw parser test case

## Input

`````js
if (--
a);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 128,
                "operandToken": {
                    "kind": 196636,
                    "flags": 4,
                    "start": 512,
                    "end": 6
                },
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 6,
                    "end": 8
                },
                "flags": 256,
                "start": 4,
                "end": 8
            },
            "consequent": {
                "kind": 168,
                "flags": 128,
                "start": 9,
                "end": 10
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "if (--\na);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

