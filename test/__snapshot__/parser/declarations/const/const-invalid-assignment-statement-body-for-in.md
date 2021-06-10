# Kataw parser test case

## Input

`````js
for (const x in [1, 2, 3]) { x++ }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
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
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 12,
                "end": 15
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
                "kind": 124,
                "block": {
                    "kind": 249,
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
                                "operand": {
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
            "flags": 80,
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

for (const in [1, 2, 3])
  {}
```

### Diagnostics

```javascript
✔ No errors
```

