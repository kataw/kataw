# Kataw parser test case

## Input

`````js
try { } catch ([a] = []) { }
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
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 17
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 18
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 18
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 18
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 7,
                "end": 18
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 22
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 20,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 20,
            "end": 23
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 26,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 24,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "try { } catch ([a] = []) { }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Catch clause variable cannot have an initializer - start: 19, end: 20
✖ '; ' expected - start: 23, end: 24

```

