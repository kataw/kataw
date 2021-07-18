# Kataw parser test case

## Input

`````js
throw {x} catch (x = y) {}
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
                "catchParameter": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 17,
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
                "start": 9,
                "end": 18
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 9,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 20,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 20,
            "end": 22
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 25,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 23,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "throw {x} catch (x = y) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'catch' is not allowed here. Did you mean ';'? - start: 9, end: 15
✖ 'try' expected - start: 9, end: 15
✖ Catch clause variable cannot have an initializer - start: 19, end: 20
✖ ')' is not allowed here. Did you mean ';'? - start: 22, end: 23

```

