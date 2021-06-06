# Kataw parser test case

## Input

`````js
delete super[foo]
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
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 64,
                    "start": 0,
                    "end": 6
                },
                "operand": {
                    "kind": 536871042,
                    "member": {
                        "kind": 225,
                        "superKeyword": {
                            "kind": 4259935,
                            "flags": 96,
                            "start": 6,
                            "end": 12
                        },
                        "flags": 96,
                        "start": 6,
                        "end": 12
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 13,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 6,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "delete super[foo]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 6, end: 13

```

