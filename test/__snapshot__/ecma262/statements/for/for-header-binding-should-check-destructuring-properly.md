# Kataw parser test case

## Input

`````js
for (const [x, x] in {}) {}
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
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "start": 5,
                    "end": 10
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 201,
                                "elementList": {
                                    "kind": 324,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 13
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 14,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 12,
                                    "end": 16
                                },
                                "flags": 32,
                                "start": 10,
                                "end": 17
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 10,
                            "end": 17
                        }
                    ],
                    "flags": 16777232,
                    "start": 10,
                    "end": 17
                },
                "flags": 33554448,
                "start": 0,
                "end": 17
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 17,
                "end": 20
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 22,
                    "end": 22
                },
                "flags": 48,
                "start": 20,
                "end": 23
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 26,
                    "end": 26
                },
                "flags": 16,
                "start": 24,
                "end": 27
            },
            "flags": 80,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "for (const [x, x] in {}) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 14, end: 16

```

