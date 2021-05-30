# Kataw parser test case

## Input

`````js
try { } catch ([x, x]) {}
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
                "end": 7
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 7,
                    "end": 13
                },
                "catchParameter": {
                    "kind": 201,
                    "elementList": {
                        "kind": 202,
                        "elements": [
                            {
                                "kind": 203,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 17
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": null,
                                "flags": 32,
                                "start": 16,
                                "end": 17
                            },
                            {
                                "kind": 203,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 18,
                                    "end": 20
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": null,
                                "flags": 32,
                                "start": 18,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "start": 16,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 21
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 24,
                        "end": 24
                    },
                    "flags": 16,
                    "start": 22,
                    "end": 25
                },
                "flags": 16,
                "start": 7,
                "end": 25
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "try { } catch ([x, x]) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 18, end: 20

```

