# Kataw parser test case

## Input

`````js
"use strict"; for (let [x = let];;) {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
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
                                            "flags": 96,
                                            "start": 24,
                                            "end": 25
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "let",
                                            "rawText": "let",
                                            "flags": 96,
                                            "start": 27,
                                            "end": 31
                                        },
                                        "flags": 32,
                                        "start": 24,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 24,
                                "end": 31
                            },
                            "flags": 32,
                            "start": 22,
                            "end": 32
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 22,
                        "end": 32
                    }
                ],
                "flags": 33554448,
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
                    "flags": 16,
                    "start": 37,
                    "end": 37
                },
                "flags": 16,
                "start": 35,
                "end": 38
            },
            "flags": 16,
            "start": 13,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; for (let [x = let];;) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 27, end: 31

```

