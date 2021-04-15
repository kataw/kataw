# Kataw parser test case

## Input

`````js
({} + 1);
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
                    "kind": 198,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 2
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 3
                    },
                    "operatorToken": {
                        "kind": 34098,
                        "flags": 768,
                        "start": 3,
                        "end": 5
                    },
                    "right": {
                        "kind": 134299649,
                        "text": 1,
                        "rawText": "1",
                        "flags": 768,
                        "start": 5,
                        "end": 7
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 7
                },
                "flags": 256,
                "start": 0,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "text": "({} + 1);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

