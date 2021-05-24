# Kataw parser test case

## Input

`````js
switch (0) { case 1: var f; default: class f {} }
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
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
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
                            "flags": 0,
                            "start": 12,
                            "end": 17
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "statements": [
                            {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 0,
                                    "start": 20,
                                    "end": 24
                                },
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "start": 24,
                                                "end": 26
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 24,
                                            "end": 26
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 24,
                                    "end": 26
                                },
                                "flags": 16,
                                "start": 20,
                                "end": 27
                            }
                        ],
                        "flags": 16,
                        "start": 12,
                        "end": 27
                    },
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 27,
                            "end": 35
                        },
                        "statements": [
                            {
                                "kind": 178,
                                "declareKeyword": null,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 0,
                                    "start": 36,
                                    "end": 42
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 42,
                                    "end": 44
                                },
                                "typeParameters": null,
                                "tail": {
                                    "kind": 277,
                                    "classHeritage": null,
                                    "body": {
                                        "kind": 262,
                                        "elements": [],
                                        "flags": 32,
                                        "start": 46,
                                        "end": 46
                                    },
                                    "flags": 44,
                                    "start": 32,
                                    "end": 47
                                },
                                "flags": 16,
                                "start": 36,
                                "end": 47
                            }
                        ],
                        "flags": 16,
                        "start": 27,
                        "end": 47
                    }
                ],
                "flags": 16,
                "start": 10,
                "end": 49
            },
            "flags": 16,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "switch (0) { case 1: var f; default: class f {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 42, end: 44

```

