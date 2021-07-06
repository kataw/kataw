# Kataw parser test case

## Input

`````js
state = {
  // students
  hoverColumn: -1
};
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "state",
                    "rawText": "state",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 7
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "hoverColumn",
                                    "rawText": "hoverColumn",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 37
                                },
                                "right": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 134318643,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 40
                                    },
                                    "operand": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 41
                                    },
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 38,
                                    "end": 41
                                },
                                "flags": 33,
                                "transformFlags": 128,
                                "start": 9,
                                "end": 41
                            }
                        ],
                        "trailingComma": false,
                        "flags": 17,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 41
                    },
                    "flags": 49,
                    "transformFlags": 8,
                    "start": 7,
                    "end": 43
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 43
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "state = {\n  // students\n  hoverColumn: -1\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
state = { hoverColumn: -1 };
```

### Diagnostics

```javascript
✔ No errors
```

