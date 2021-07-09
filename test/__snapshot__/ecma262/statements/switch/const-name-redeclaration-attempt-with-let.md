# Kataw parser test case

## Input

`````js
switch (0) { case 1: const f = 0; default: let f }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 17
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 20
                        },
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 37757004,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 26
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 28
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 30,
                                                "end": 32
                                            },
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 26,
                                            "end": 32
                                        }
                                    ],
                                    "flags": 16777232,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 32
                                },
                                "flags": 33554448,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 33
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 33
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 41
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 42
                        },
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 42,
                                    "end": 46
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 46,
                                                "end": 48
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 46,
                                            "end": 48
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 46,
                                    "end": 48
                                },
                                "flags": 33554448,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 48
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 48
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 12,
                "end": 48
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "switch (0) { case 1: const f = 0; default: let f }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 46, end: 48

```

