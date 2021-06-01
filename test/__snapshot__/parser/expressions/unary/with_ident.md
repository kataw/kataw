# Kataw parser test case

## Input

`````js
new +
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
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 99634,
                        "flags": 64,
                        "start": 3,
                        "end": 5
                    },
                    "operand": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 5,
                        "end": 5
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 5
                },
                "argumentList": null,
                "flags": 32,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "source": "new +",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 5
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 5, end: 5

```

