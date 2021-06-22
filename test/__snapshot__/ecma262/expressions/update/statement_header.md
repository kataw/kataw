# Kataw parser test case

## Input

`````js
if (--
a);
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
                "kind": 128,
                "operandToken": {
                    "kind": 196636,
                    "flags": 96,
                    "start": 4,
                    "end": 6
                },
                "operand": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 6,
                    "end": 8
                },
                "flags": 32,
                "start": 4,
                "end": 8
            },
            "consequent": {
                "kind": 168,
                "flags": 16,
                "start": 9,
                "end": 10
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "if (--\na);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

if (--a);
```

### Diagnostics

```javascript
✔ No errors
```

