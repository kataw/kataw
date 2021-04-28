# Kataw parser test case

## Input

`````js
[...x.list];
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 768,
                                "start": 1,
                                "end": 4
                            },
                            "argument": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 4,
                                    "end": 5
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "list",
                                    "rawText": "list",
                                    "flags": 768,
                                    "start": 6,
                                    "end": 10
                                },
                                "flags": 256,
                                "start": 4,
                                "end": 10
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 1,
                    "end": 10
                },
                "flags": 256,
                "start": 0,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "[...x.list];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
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

