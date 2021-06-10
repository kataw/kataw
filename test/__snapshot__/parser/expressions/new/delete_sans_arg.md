# Kataw parser test case

## Input

`````js
new delete
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
                        "kind": 4259886,
                        "flags": 64,
                        "start": 3,
                        "end": 10
                    },
                    "operand": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 10,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 10
                },
                "argumentList": null,
                "flags": 96,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "new delete",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 10, end: 10

```

