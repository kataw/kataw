# Kataw parser test case

## Options

`````js
{ allowTypes : true }
`````

## Input

`````js
try {} catch([a:string]) {}
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
                    "kind": 201,
                    "elementList": {
                        "kind": 202,
                        "elements": [
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 15
                                },
                                "optionalToken": null,
                                "type": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 64,
                                        "start": 16,
                                        "end": 22
                                    },
                                    "flags": 0,
                                    "start": 15,
                                    "end": 22
                                },
                                "right": null,
                                "flags": 32,
                                "start": 14,
                                "end": 22
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "start": 14,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 13,
                    "end": 23
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 26,
                        "end": 26
                    },
                    "flags": 16,
                    "start": 24,
                    "end": 27
                },
                "flags": 80,
                "start": 6,
                "end": 27
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "try {} catch([a:string]) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

try {
} catch ([a]) {
}
```

### Diagnostics

```javascript
✔ No errors
```

