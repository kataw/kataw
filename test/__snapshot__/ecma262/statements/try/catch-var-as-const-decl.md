# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
try {} catch (e) { const e = x; }
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
                    "text": "e",
                    "rawText": "e",
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
                                    "kind": 37757004,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 24
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 24,
                                                "end": 26
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 30
                                            },
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 24,
                                            "end": 30
                                        }
                                    ],
                                    "flags": 16777232,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 30
                                },
                                "flags": 33554448,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 31
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 31
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 33
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 6,
                "end": 33
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "try {} catch (e) { const e = x; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A block-scoped variable cannot shadow a catch clause binding - start: 24, end: 26

```

