# Kataw parser test case

## Input

`````js
try {} catch ([a,b,c]) { }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 6
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 12
                },
                "catchParameter": {
                    "kind": 201,
                    "elementList": {
                        "kind": 324,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 16
                            },
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 18
                            },
                            {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 20
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 21
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 24
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 26
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 6,
                "end": 26
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "try {} catch ([a,b,c]) { }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
try {} catch ([a, b, c]) {}
```

### Diagnostics

```javascript
✔ No errors
```

