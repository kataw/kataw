# Kataw parser test case

## Input

`````js
let foo = 1; { var foo = 1; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 11
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 11
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 11
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 155,
                        "declareKeyword": null,
                        "varKeyword": {
                            "kind": 37757002,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 18
                        },
                        "declarationList": {
                            "kind": 156,
                            "declarations": [
                                {
                                    "kind": 157,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 18,
                                        "end": 22
                                    },
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 26
                                    },
                                    "flags": 16,
                                    "transformFlags": 128,
                                    "start": 18,
                                    "end": 26
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 26
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 27
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 12,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "let foo = 1; { var foo = 1; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot redeclare block-scoped variable - start: 18, end: 22

```

