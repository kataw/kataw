# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: 0
> :: test: sneaky lhs contains `in`
> :: case: false
## Input

`````js
for ((a in b).x in {});
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "kind": 166,
            "initializer": {
                "kind": 129,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 6,
                            "end": 7
                        },
                        "operatorToken": {
                            "kind": 21006388,
                            "flags": 768,
                            "start": 7,
                            "end": 10
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 10,
                            "end": 12
                        },
                        "flags": 256,
                        "start": 5,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 13
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 14,
                    "end": 15
                },
                "autofix": 0,
                "flags": 256,
                "start": 5,
                "end": 15
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "start": 20,
                    "end": 20
                },
                "flags": 256,
                "start": 18,
                "end": 21
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 22,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "for ((a in b).x in {});",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

