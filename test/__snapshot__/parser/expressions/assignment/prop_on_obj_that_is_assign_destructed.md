# Kataw parser test case

## Input

`````js
[...[{prop: 1}.prop]] = []
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
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 0,
                                    "start": 1,
                                    "end": 4
                                },
                                "argument": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 219,
                                                                "generatorToken": null,
                                                                "asyncKeyword": null,
                                                                "getKeyword": null,
                                                                "setKeyword": null,
                                                                "left": {
                                                                    "kind": 201392130,
                                                                    "text": 1,
                                                                    "rawText": "1",
                                                                    "flags": 96,
                                                                    "start": 11,
                                                                    "end": 13
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "prop",
                                                                    "rawText": "prop",
                                                                    "flags": 96,
                                                                    "start": 6,
                                                                    "end": 10
                                                                },
                                                                "flags": 32,
                                                                "start": 6,
                                                                "end": 13
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "start": 6,
                                                        "end": 13
                                                    },
                                                    "flags": 32,
                                                    "start": 5,
                                                    "end": 14
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "prop",
                                                    "rawText": "prop",
                                                    "flags": 96,
                                                    "start": 15,
                                                    "end": 19
                                                },
                                                "flags": 32,
                                                "start": 5,
                                                "end": 19
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 5,
                                        "end": 19
                                    },
                                    "flags": 32,
                                    "start": 4,
                                    "end": 20
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 21,
                    "end": 23
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 25,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 23,
                    "end": 26
                },
                "flags": 32,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "[...[{prop: 1}.prop]] = []",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
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

