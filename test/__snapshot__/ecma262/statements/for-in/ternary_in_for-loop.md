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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 24752947,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 9
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 11
                },
                "consequent": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 13
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
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
                        "transformFlags": 0,
                        "start": 15,
                        "end": 17
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 22,
                            "end": 22
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 20,
                        "end": 23
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 15,
                    "end": 23
                },
                "flags": 96,
                "transformFlags": 4096,
                "start": 0,
                "end": 23
            },
            "condition": null,
            "incrementor": {
                "kind": 205586437,
                "flags": 96,
                "transformFlags": 0,
                "start": 24,
                "end": 30
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 33,
                "end": 35
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "for (true ? 0 : 0 in {}; false; ) ;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
for (true ? 0 : 0 in {}; ; false);
```

### Diagnostics

```javascript
✔ No errors
```

