# Kataw parser test case

## Input

`````js
try {}
catch ([v] = b) {}
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
                    "flags": 81,
                    "start": 6,
                    "end": 12
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
                                    "text": "v",
                                    "rawText": "v",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 16
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": null,
                                "flags": 32,
                                "start": 15,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "start": 15,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 14,
                    "end": 17
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 17,
                        "end": 17
                    },
                    "flags": 16,
                    "start": 17,
                    "end": 17
                },
                "flags": 16,
                "start": 6,
                "end": 17
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 19,
                "end": 21
            },
            "flags": 16,
            "start": 19,
            "end": 21
        },
        {
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
        }
    ],
    "isModule": false,
    "source": "try {}\ncatch ([v] = b) {}",
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
✖ Catch clause variable cannot have an initializer - start: 17, end: 19
✖ Expected a `;` - start: 21, end: 22

```

