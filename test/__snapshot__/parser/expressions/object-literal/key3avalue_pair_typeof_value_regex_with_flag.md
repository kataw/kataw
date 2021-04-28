# Kataw parser test case

## Input

`````js
({foo: typeof /x/g});
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 138477613,
                                        "flags": 6,
                                        "start": 512,
                                        "end": 13
                                    },
                                    "expression": {
                                        "kind": 221,
                                        "text": "/x/g",
                                        "flags": 768,
                                        "start": 13,
                                        "end": 18
                                    },
                                    "flags": 256,
                                    "start": 6,
                                    "end": 18
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 2,
                                    "end": 5
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 18
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 19
                },
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "({foo: typeof /x/g});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
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

