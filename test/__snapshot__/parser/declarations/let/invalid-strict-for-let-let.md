# Kataw parser test case

## Input

`````js
"use strict"; for (let [x = let];;) {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 768,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 13,
                "end": 17
            },
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 24,
                                            "end": 25
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "let",
                                            "rawText": "let",
                                            "flags": 768,
                                            "start": 27,
                                            "end": 31
                                        },
                                        "flags": 256,
                                        "start": 24,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 24,
                                "end": 31
                            },
                            "flags": 256,
                            "start": 22,
                            "end": 32
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 22,
                        "end": 32
                    }
                ],
                "flags": 128,
                "start": 22,
                "end": 32
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 37,
                    "end": 37
                },
                "flags": 128,
                "start": 35,
                "end": 38
            },
            "flags": 128,
            "start": 13,
            "end": 38
        }
    ],
    "isModule": false,
    "text": "\"use strict\"; for (let [x = let];;) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 27, end: 31

```

