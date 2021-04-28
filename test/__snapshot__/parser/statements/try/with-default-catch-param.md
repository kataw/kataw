# Kataw parser test case

## Input

`````js
try { } catch ([a = 0]) { }
`````

## Options

### Parser Options

`````js
{}
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
                    "multiLine": false,
                    "flags": 128,
                    "start": 5,
                    "end": 5
                },
                "flags": 128,
                "start": 3,
                "end": 7
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 7,
                    "start": 0,
                    "end": 13
                },
                "catchParameter": {
                    "kind": 201,
                    "elementList": {
                        "kind": 202,
                        "elements": [
                            {
                                "kind": 244,
                                "ellipsisToken": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 16,
                                    "end": 17
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 768,
                                    "start": 19,
                                    "end": 21
                                },
                                "flags": 256,
                                "start": 16,
                                "end": 21
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 16,
                        "end": 21
                    },
                    "flags": 256,
                    "start": 15,
                    "end": 22
                },
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "flags": 128,
                        "start": 25,
                        "end": 25
                    },
                    "flags": 128,
                    "start": 23,
                    "end": 27
                },
                "flags": 128,
                "start": 7,
                "end": 27
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "try { } catch ([a = 0]) { }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
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

