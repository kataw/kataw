# Kataw parser test case

## Input

`````js
try { } catch ([]) {}
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
                "end": 7
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 13
                },
                "catchParameter": {
                    "kind": 201,
                    "elementList": {
                        "kind": 324,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 20
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 21
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 7,
                "end": 21
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "try { } catch ([]) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
try {} catch ([]) {}
```

### Diagnostics

```javascript
✔ No errors
```

