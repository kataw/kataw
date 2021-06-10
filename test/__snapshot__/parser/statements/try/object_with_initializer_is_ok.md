# Kataw parser test case

## Input

`````js
try {} catch({e}=x){}
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
                    "kind": 212,
                    "propertyList": {
                        "kind": 213,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "e",
                                "rawText": "e",
                                "flags": 96,
                                "start": 14,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 14,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 13,
                    "end": 16
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 16,
                    "start": 16,
                    "end": 16
                },
                "flags": 80,
                "start": 6,
                "end": 16
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 17,
                "end": 18
            },
            "flags": 16,
            "start": 17,
            "end": 18
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 20,
                "end": 20
            },
            "flags": 16,
            "start": 19,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "try {} catch({e}=x){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Catch clause variable cannot have an initializer - start: 16, end: 17
✖ Expected a `;` - start: 18, end: 19

```

