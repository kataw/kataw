# Kataw parser test case

## Input

`````js
for ({}.u |= c;;) x;
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
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 6
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 5,
                        "end": 7
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "u",
                        "rawText": "u",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 9
                    },
                    "flags": 48,
                    "transformFlags": 2,
                    "start": 0,
                    "end": 9
                },
                "operatorToken": {
                    "kind": 4136,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 12
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 14
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 14
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 19
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 17,
                "end": 20
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "for ({}.u |= c;;) x;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
for ({}.u |= c; ; ) x;
```

### Diagnostics

```javascript
✔ No errors
```

