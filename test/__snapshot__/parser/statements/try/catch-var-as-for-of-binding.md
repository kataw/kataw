# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
try {} catch (e) { for (var e of y) {} }
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
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "start": 3,
                "end": 6
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 6,
                    "end": 12
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 14,
                    "end": 15
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 167,
                                "forKeyword": {
                                    "kind": 37757017,
                                    "flags": 80,
                                    "start": 18,
                                    "end": 22
                                },
                                "awaitKeyword": null,
                                "initializer": {
                                    "kind": 341,
                                    "varKeyword": {
                                        "kind": 37757002,
                                        "flags": 64,
                                        "start": 24,
                                        "end": 27
                                    },
                                    "declarationList": {
                                        "kind": 156,
                                        "declarations": [
                                            {
                                                "kind": 157,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "e",
                                                    "rawText": "e",
                                                    "flags": 96,
                                                    "start": 27,
                                                    "end": 29
                                                },
                                                "type": null,
                                                "initializer": null,
                                                "flags": 16,
                                                "start": 27,
                                                "end": 29
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 27,
                                        "end": 29
                                    },
                                    "flags": 16,
                                    "start": 18,
                                    "end": 32
                                },
                                "ofKeyword": {
                                    "kind": 16793717,
                                    "flags": 64,
                                    "start": 29,
                                    "end": 32
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 32,
                                    "end": 34
                                },
                                "statement": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [],
                                        "flags": 16,
                                        "start": 37,
                                        "end": 37
                                    },
                                    "flags": 16,
                                    "start": 35,
                                    "end": 38
                                },
                                "flags": 80,
                                "start": 18,
                                "end": 38
                            }
                        ],
                        "flags": 16,
                        "start": 18,
                        "end": 38
                    },
                    "flags": 16,
                    "start": 16,
                    "end": 40
                },
                "flags": 80,
                "start": 6,
                "end": 40
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "try {} catch (e) { for (var e of y) {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot bound an already bound catch clause binding - start: 27, end: 29

```

