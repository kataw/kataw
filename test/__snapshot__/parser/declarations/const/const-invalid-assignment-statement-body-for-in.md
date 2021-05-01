# Kataw parser test case

## Input

`````js
for (const x in [1, 2, 3]) { x++ }
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
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 12,
                "end": 15
            },
            "kind": 166,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 10,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 10,
                        "end": 12
                    }
                ],
                "flags": 16777232,
                "start": 10,
                "end": 12
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 17,
                            "end": 18
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 19,
                            "end": 21
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 22,
                            "end": 24
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 17,
                    "end": 24
                },
                "flags": 32,
                "start": 15,
                "end": 25
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 127,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 64,
                                    "start": 30,
                                    "end": 32
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 28,
                                "end": 32
                            },
                            "flags": 16,
                            "start": 28,
                            "end": 32
                        }
                    ],
                    "flags": 16,
                    "start": 28,
                    "end": 32
                },
                "flags": 16,
                "start": 26,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "for (const x in [1, 2, 3]) { x++ }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
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

