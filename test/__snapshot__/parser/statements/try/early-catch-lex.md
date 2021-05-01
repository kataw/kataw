# Kataw parser test case

## Input

`````js
try { } catch (x) { let x; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "start": 3,
                "end": 7
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 0,
                    "start": 7,
                    "end": 13
                },
                "catchParameter": {
                    "kind": 134299649,
                    "original": "x",
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 15,
                    "end": 16
                },
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 19,
                                    "end": 23
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "original": "x",
                                                "text": "x",
                                                "rawText": " x",
                                                "flags": 96,
                                                "start": 23,
                                                "end": 25
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 23,
                                            "end": 25
                                        }
                                    ],
                                    "flags": 33554448,
                                    "start": 23,
                                    "end": 25
                                },
                                "flags": 33554448,
                                "start": 19,
                                "end": 26
                            }
                        ],
                        "flags": 16,
                        "start": 19,
                        "end": 26
                    },
                    "flags": 16,
                    "start": 17,
                    "end": 28
                },
                "flags": 16,
                "start": 7,
                "end": 28
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "try { } catch (x) { let x; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

