# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
({...import.meta} = {});
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
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 2,
                                        "start": 0,
                                        "end": 5
                                    },
                                    "argument": {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 207,
                                            "importKeyword": {
                                                "kind": 37814364,
                                                "flags": 5,
                                                "start": 0,
                                                "end": 11
                                            },
                                            "flags": 11,
                                            "start": 768,
                                            "end": 16
                                        },
                                        "flags": 128,
                                        "start": 11,
                                        "end": 16
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 16
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 16
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 17
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 17,
                        "start": 512,
                        "end": 19
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 21,
                            "end": 21
                        },
                        "flags": 256,
                        "start": 19,
                        "end": 22
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 22
                },
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": true,
    "text": "({...import.meta} = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
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

