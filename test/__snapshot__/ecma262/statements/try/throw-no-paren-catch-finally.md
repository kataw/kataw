# Kataw parser test case

## Input

`````js
throw {x} catch finally
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 158,
            "throwKeyword": {
                "kind": 37757026,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 8
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 8
                },
                "flags": 48,
                "transformFlags": 8,
                "start": 5,
                "end": 9
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        },
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 9
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 9,
                "end": 9
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 15
                },
                "catchParameter": null,
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 15
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 15
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 9,
                "end": 15
            },
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 64,
                "transformFlags": 0,
                "start": 15,
                "end": 23
            },
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 23
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 23,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 9,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "throw {x} catch finally",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'catch' is not allowed here. Did you mean ';'? - start: 9, end: 15

```

