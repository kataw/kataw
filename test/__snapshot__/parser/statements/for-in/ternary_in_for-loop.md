# Kataw parser test case

## Input

`````js
for (true ? 0 : 0 in {}; false; ) ;
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134,
                    "text": true,
                    "flags": 96,
                    "start": 5,
                    "end": 9
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 9,
                    "end": 11
                },
                "consequent": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 11,
                    "end": 13
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 0,
                    "start": 13,
                    "end": 15
                },
                "alternate": {
                    "kind": 198,
                    "left": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 64,
                        "start": 17,
                        "end": 20
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 22,
                            "end": 22
                        },
                        "flags": 32,
                        "start": 20,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 23
                },
                "flags": 32,
                "start": 0,
                "end": 23
            },
            "condition": null,
            "incrementor": {
                "kind": 134,
                "text": false,
                "flags": 96,
                "start": 24,
                "end": 30
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 33,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "for (true ? 0 : 0 in {}; false; ) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
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

