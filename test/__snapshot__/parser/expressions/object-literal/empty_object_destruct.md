# Kataw parser test case

## Input

`````js
x({}=obj);
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 3,
                                    "end": 3
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 4
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 4,
                                "end": 5
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "obj",
                                "rawText": "obj",
                                "flags": 768,
                                "start": 5,
                                "end": 8
                            },
                            "flags": 256,
                            "start": 2,
                            "end": 8
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 2,
                    "end": 8
                },
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "x({}=obj);",
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

