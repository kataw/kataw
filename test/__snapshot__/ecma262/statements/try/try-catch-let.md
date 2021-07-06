# Kataw parser test case

## Input

`````js
try {} catch (x) { let x }

try {} catch (x) { var x }
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
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 15
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 22
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 22,
                                                "end": 24
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "transformFlags": 128,
                                            "start": 22,
                                            "end": 24
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 24
                                },
                                "flags": 33554448,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 24
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 24
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 16,
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
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "transformFlags": 0,
                "start": 26,
                "end": 31
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 33
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 31,
                "end": 34
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 40
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 43
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 46,
                                    "end": 50
                                },
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 50,
                                                "end": 52
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "transformFlags": 128,
                                            "start": 50,
                                            "end": 52
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 50,
                                    "end": 52
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 52
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 46,
                        "end": 52
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 54
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 34,
                "end": 54
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 26,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "try {} catch (x) { let x }\n\ntry {} catch (x) { var x }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A block-scoped variable cannot shadow a catch clause binding - start: 22, end: 24

```

